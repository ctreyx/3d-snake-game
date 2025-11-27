<template>
  <div class="game-container">
    <div ref="canvasContainer" class="canvas-container"></div>
    
    <!-- Video element for MediaPipe and Background -->
    <video ref="inputVideo" class="input-video" playsinline></video>

    <!-- UI Panel -->
    <div class="ui-panel" :class="{ 'hidden': uiHidden }">
      <div class="panel-header">
        <h2>3D Snake Control</h2>
        <button @click="toggleUI" class="toggle-btn">{{ uiHidden ? 'Show' : 'Hide' }}</button>
      </div>
      
      <div class="control-group">
        <label>Snake Model</label>
        <div class="model-selector">
          <button 
            v-for="model in models" 
            :key="model.value"
            :class="{ active: currentModel === model.value }"
            @click="setModel(model.value)"
          >
            {{ model.label }}
          </button>
        </div>
      </div>

      <div class="control-group">
        <label>Snake Color</label>
        <input type="color" v-model="snakeColor" @input="updateColor">
      </div>

      <div class="control-group">
        <label>Status</label>
        <div class="status-text">
          <div class="debug-info">{{ debugMessage }}</div>
          <span :class="{ active: isHandDetected }">
            {{ isHandDetected ? 'Hand Detected' : 'No Hand' }}
          </span>
          <span v-if="isHandDetected">
            | {{ isPinching ? 'Speed Boost!' : 'Normal Speed' }}
          </span>
        </div>
      </div>

      <div class="control-group">
        <button @click="toggleFullscreen" class="fullscreen-btn">
          Toggle Fullscreen
        </button>
      </div>
    </div>
    
    <!-- Score Display -->
    <div class="score-display">
      Score: {{ score }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { Hands } from '@mediapipe/hands';
// import { Camera } from '@mediapipe/camera_utils'; // Not used anymore

// --- State ---
const canvasContainer = ref<HTMLElement | null>(null);
const inputVideo = ref<HTMLVideoElement | null>(null);
const uiHidden = ref(false);
const isHandDetected = ref(false);
const isPinching = ref(false);
const debugMessage = ref('Initializing...');
const score = ref(0);
const snakeColor = ref('#00ff88');
const currentModel = ref('cube');

const models = [
  { label: 'Cube', value: 'cube' },
  { label: 'Sphere', value: 'sphere' },
  { label: 'Tetra', value: 'tetra' }
];

// --- Three.js Variables ---
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let animationId: number;

// Snake
const snakeSegments: THREE.Mesh[] = [];
const segmentDistance = 0.5;
const snakeSpeed = 0.15;
const boostSpeed = 0.3;
let moveSpeed = snakeSpeed;
const targetPosition = new THREE.Vector3(0, 0, 0);

// Food
let food: THREE.Mesh;
const foodBounds = { x: 15, y: 10, z: 5 };

// MediaPipe
let hands: Hands;
// let cameraUtils: Camera; // Removed as we use getUserMedia directly

// --- Methods ---

const toggleUI = () => {
  uiHidden.value = !uiHidden.value;
};

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const setModel = (model: string) => {
  currentModel.value = model;
  rebuildSnake();
};

const updateColor = () => {
  const color = new THREE.Color(snakeColor.value);
  snakeSegments.forEach(segment => {
    (segment.material as THREE.MeshStandardMaterial).color.set(color);
    (segment.material as THREE.MeshStandardMaterial).emissive.set(color);
  });
};

// --- Game Logic ---

const initThree = () => {
  if (!canvasContainer.value) return;

  // Scene
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x111111); // Removed for transparency
  // scene.fog = new THREE.FogExp2(0x111111, 0.02); // Removed fog

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 20;

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable transparency
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); // Clear transparent
  canvasContainer.value.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Grid (Optional, for reference)
  // const gridHelper = new THREE.GridHelper(50, 50, 0x444444, 0x222222);
  // gridHelper.rotation.x = Math.PI / 2;
  // scene.add(gridHelper);

  // Init Snake
  createSnakeSegment(new THREE.Vector3(0, 0, 0));
  // Add some initial body
  for(let i=0; i<5; i++) {
    addSegment();
  }

  // Init Food
  createFood();

  // Resize Handler
  window.addEventListener('resize', onWindowResize);
};

const getGeometry = () => {
  switch (currentModel.value) {
    case 'sphere': return new THREE.SphereGeometry(0.4, 16, 16);
    case 'tetra': return new THREE.TetrahedronGeometry(0.5);
    case 'cube': 
    default: return new THREE.BoxGeometry(0.6, 0.6, 0.6);
  }
};

const createSnakeSegment = (position: THREE.Vector3) => {
  const geometry = getGeometry();
  const material = new THREE.MeshStandardMaterial({ 
    color: snakeColor.value,
    emissive: snakeColor.value,
    emissiveIntensity: 0.5,
    roughness: 0.4,
    metalness: 0.6
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);
  scene.add(mesh);
  snakeSegments.push(mesh);
};

const rebuildSnake = () => {
  // Keep positions, replace meshes
  const positions = snakeSegments.map(s => s.position.clone());
  // Remove old
  snakeSegments.forEach(s => scene.remove(s));
  snakeSegments.length = 0;
  // Create new
  positions.forEach(pos => createSnakeSegment(pos));
};

const addSegment = () => {
  const lastSegment = snakeSegments[snakeSegments.length - 1];
  if (lastSegment) {
    createSnakeSegment(lastSegment.position.clone());
  }
};

const createFood = () => {
  if (food) scene.remove(food);
  const geometry = new THREE.OctahedronGeometry(0.5);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0xff0055,
    emissive: 0xff0055,
    emissiveIntensity: 0.8
  });
  food = new THREE.Mesh(geometry, material);
  respawnFood();
  scene.add(food);
};

const respawnFood = () => {
  food.position.set(
    (Math.random() - 0.5) * foodBounds.x * 2,
    (Math.random() - 0.5) * foodBounds.y * 2,
    (Math.random() - 0.5) * foodBounds.z * 2
  );
};

const onWindowResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

// --- MediaPipe Logic ---

const initMediaPipe = async () => {
  if (!inputVideo.value) return;

  hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
  });

  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 0, // Use Lite model for mobile performance
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });

  hands.onResults(onResults);

  // Use getUserMedia directly for better mobile support (facingMode)
  try {
    debugMessage.value = "Requesting Camera...";
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user', // Prefer front camera on mobile
        width: { ideal: 640 },
        height: { ideal: 480 }
      }
    });
    
    debugMessage.value = "Camera Access Granted";
    inputVideo.value.srcObject = stream;
    
    // Wait for video to be ready
    inputVideo.value.onloadedmetadata = async () => {
      if (!inputVideo.value) return;
      debugMessage.value = "Video Metadata Loaded";
      await inputVideo.value.play();
      debugMessage.value = "Video Playing, Starting AI...";
      processFrame();
    };

  } catch (error) {
    console.error("Error accessing camera:", error);
    debugMessage.value = "Camera Error: " + error;
    alert("无法访问摄像头，请检查权限或设备支持情况。");
  }
};

// Start processing loop
const processFrame = async () => {
  if (inputVideo.value && !inputVideo.value.paused && !inputVideo.value.ended) {
    try {
      await hands.send({ image: inputVideo.value });
    } catch (e) {
      console.error("MediaPipe Error:", e);
      // Don't update debugMessage here to avoid spam, but log it
    }
  }
  requestAnimationFrame(processFrame);
};

const onResults = (results: any) => {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    isHandDetected.value = true;
    debugMessage.value = "Tracking Active";
    const landmarks = results.multiHandLandmarks[0];
    
    // Use Index Finger Tip (8) for position
    // Map 0-1 to scene coordinates
    // Video is mirrored, so x is inverted
    const x = (1 - landmarks[8].x) * 2 - 1; // -1 to 1
    const y = (1 - landmarks[8].y) * 2 - 1; // -1 to 1
    
    // Map to scene bounds (approx)
    targetPosition.x = x * 15;
    targetPosition.y = y * 10;
    // Z can be controlled by hand size or pinch? Let's keep Z simple for now or use pinch for Z?
    // Requirement says "Hands open/close control snake direction".
    // Let's use Pinch to boost speed.
    
    // Detect Pinch (Thumb tip 4 and Index tip 8 distance)
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const distance = Math.sqrt(
      Math.pow(thumbTip.x - indexTip.x, 2) + 
      Math.pow(thumbTip.y - indexTip.y, 2)
    );
    
    if (distance < 0.05) {
      isPinching.value = true;
      moveSpeed = boostSpeed;
    } else {
      isPinching.value = false;
      moveSpeed = snakeSpeed;
    }

  } else {
    isHandDetected.value = false;
  }
};

// --- Animation Loop ---

const animate = () => {
  animationId = requestAnimationFrame(animate);

  // Move Head towards target
  const head = snakeSegments[0];
  if (head) {
    // Smoothly interpolate head position to target
    const dir = new THREE.Vector3().subVectors(targetPosition, head.position);
    // Limit speed
    if (dir.length() > moveSpeed) {
      dir.normalize().multiplyScalar(moveSpeed);
    }
    head.position.add(dir);
    
    // Rotate head to face direction
    head.lookAt(targetPosition);
  }

  // Move Body
  for (let i = snakeSegments.length - 1; i > 0; i--) {
    const current = snakeSegments[i];
    const prev = snakeSegments[i - 1];
    
    if (current && prev) {
      // Move current towards prev
      const dist = current.position.distanceTo(prev.position);
      if (dist > segmentDistance) {
        const dir = new THREE.Vector3().subVectors(prev.position, current.position).normalize();
        const moveDist = dist - segmentDistance;
        current.position.add(dir.multiplyScalar(moveDist));
        current.lookAt(prev.position);
      }
    }
  }

  // Check Food Collision
  if (head && food) {
    if (head.position.distanceTo(food.position) < 1.0) {
      score.value += 10;
      addSegment();
      respawnFood();
      // Pulse effect or particle burst could go here
    }
    
    // Rotate food
    food.rotation.x += 0.02;
    food.rotation.y += 0.03;
  }

  renderer.render(scene, camera);
};

// --- Lifecycle ---

onMounted(() => {
  initThree();
  initMediaPipe();
  animate();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', onWindowResize);
  
  // Stop video stream
  if (inputVideo.value && inputVideo.value.srcObject) {
    const stream = inputVideo.value.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  }

  // Cleanup Three.js
  renderer.dispose();
});

</script>

<style scoped>
.game-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; /* Canvas on top */
  pointer-events: none; /* Let clicks pass through if needed, though UI handles clicks */
}

.input-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; /* Video behind canvas */
  transform: scaleX(-1); /* Mirror the video to match hand tracking logic */
}

.ui-panel {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 280px;
  background: rgba(20, 20, 30, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  z-index: 10;
}

/* Mobile Adaptation */
@media (max-width: 768px) {
  .ui-panel {
    top: auto;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: auto;
    max-height: 40vh;
    overflow-y: auto;
  }
  
  .ui-panel.hidden {
    transform: translateY(calc(100% + 20px));
  }
}

.ui-panel.hidden {
  /* Desktop hidden state */
  @media (min-width: 769px) {
    transform: translateX(calc(100% + 20px));
  }
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.toggle-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.control-group {
  margin-bottom: 15px;
}

.control-group label {
  display: block;
  font-size: 0.8rem;
  color: #aaa;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.model-selector {
  display: flex;
  gap: 8px;
}

.model-selector button {
  flex: 1;
  padding: 8px;
  background: rgba(255,255,255,0.1);
  border: 1px solid transparent;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.model-selector button.active {
  background: rgba(0, 255, 136, 0.2);
  border-color: #00ff88;
  color: #00ff88;
}

input[type="color"] {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
}

.debug-info {
  font-size: 0.7rem;
  color: #ffaa00;
  margin-bottom: 4px;
  font-family: monospace;
}

.status-text {
  font-size: 0.9rem;
  color: #666;
}

.status-text .active {
  color: #00ff88;
  font-weight: bold;
}

.fullscreen-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(45deg, #00ff88, #00ccff);
  border: none;
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

.fullscreen-btn:hover {
  transform: scale(1.02);
}

.score-display {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
  pointer-events: none;
}
</style>
