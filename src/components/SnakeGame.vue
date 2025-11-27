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
// import { Camera } from '@mediapipe/camera_utils'; // 不再使用

// --- 状态变量 ---
const canvasContainer = ref<HTMLElement | null>(null);
const inputVideo = ref<HTMLVideoElement | null>(null);
const uiHidden = ref(false);
const isHandDetected = ref(false);
const isPinching = ref(false);
const score = ref(0);
const snakeColor = ref('#00ff88');
const currentModel = ref('cube');

const models = [
  { label: 'Cube', value: 'cube' },
  { label: 'Sphere', value: 'sphere' },
  { label: 'Tetra', value: 'tetra' }
];

// --- Three.js 变量 ---
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let animationId: number;

// 蛇
const snakeSegments: THREE.Object3D[] = [];
const segmentDistance = 0.5;
const snakeSpeed = 0.15;
const boostSpeed = 0.3;
let moveSpeed = snakeSpeed;
const targetPosition = new THREE.Vector3(0, 0, 0);

// 食物
let food: THREE.Object3D;
// const foodBounds = { x: 15, y: 10, z: 5 }; // 已移除，动态计算

// MediaPipe 手势识别
let hands: Hands;
// let cameraUtils: Camera; // 已移除，直接使用 getUserMedia

// --- 烟花特效 ---
interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
}

const fireworks: Particle[] = [];
const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4);

const createFirework = (position: THREE.Vector3) => {
  const particleCount = 20;
  // 随机颜色：红、黄、橙
  const colors = [0xff0000, 0xffff00, 0xffa500, 0xff00ff, 0x00ffff];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  for (let i = 0; i < particleCount; i++) {
    const material = new THREE.MeshBasicMaterial({ color: color });
    const mesh = new THREE.Mesh(particleGeometry, material);
    mesh.position.copy(position);
    
    // 随机爆炸速度
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.8,
      (Math.random() - 0.5) * 0.8,
      (Math.random() - 0.5) * 0.8
    );

    scene.add(mesh);
    fireworks.push({
      mesh,
      velocity,
      life: 1.0
    });
  }
};

const updateFireworks = () => {
  for (let i = fireworks.length - 1; i >= 0; i--) {
    const p = fireworks[i];
    if (!p) continue;

    p.life -= 0.02; // 逐渐消失
    
    if (p.life <= 0) {
      scene.remove(p.mesh);
      p.mesh.geometry.dispose(); // 释放内存
      (p.mesh.material as THREE.Material).dispose();
      fireworks.splice(i, 1);
    } else {
      p.mesh.position.add(p.velocity);
      p.mesh.scale.setScalar(p.life);
      p.mesh.rotation.x += 0.1;
    }
  }
};

// --- 方法 ---

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
    segment.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        (child.material as THREE.MeshStandardMaterial).color.set(color);
        (child.material as THREE.MeshStandardMaterial).emissive.set(color);
      }
    });
  });
};

// --- 游戏逻辑 ---

const initThree = () => {
  if (!canvasContainer.value) return;

  // 场景
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x111111); // 为了透明度已移除
  // scene.fog = new THREE.FogExp2(0x111111, 0.02); // 已移除雾效

  // 相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 20;

  // 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // 启用透明
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); // 清除透明
  canvasContainer.value.appendChild(renderer.domElement);

  // 灯光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Grid (Optional, for reference)
  // const gridHelper = new THREE.GridHelper(50, 50, 0x444444, 0x222222);
  // gridHelper.rotation.x = Math.PI / 2;
  // scene.add(gridHelper);

  // 初始化蛇
  createSnakeSegment(new THREE.Vector3(0, 0, 0));
  // 添加初始身体段
  for(let i=0; i<5; i++) {
    addSegment();
  }

  // 初始化食物
  createFood();

  // 窗口大小调整处理
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

const createSnakeHeadMesh = () => {
  const group = new THREE.Group();

  // 头部
  const headGeometry = new THREE.BoxGeometry(0.7, 0.6, 0.8);
  const headMaterial = new THREE.MeshStandardMaterial({ 
    color: snakeColor.value,
    emissive: snakeColor.value,
    emissiveIntensity: 0.5,
    roughness: 0.4,
    metalness: 0.6
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  group.add(head);

  // 眼睛
  const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const pupilGeometry = new THREE.SphereGeometry(0.07, 16, 16);
  const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

  // 左眼
  const eyeL = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eyeL.position.set(-0.2, 0.2, 0.3);
  group.add(eyeL);
  const pupilL = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupilL.position.set(-0.2, 0.2, 0.42);
  group.add(pupilL);

  // 右眼
  const eyeR = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eyeR.position.set(0.2, 0.2, 0.3);
  group.add(eyeR);
  const pupilR = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupilR.position.set(0.2, 0.2, 0.42);
  group.add(pupilR);

  return group;
};

const createSnakeSegment = (position: THREE.Vector3) => {
  let mesh: THREE.Object3D;

  if (snakeSegments.length === 0) {
    // 头部
    mesh = createSnakeHeadMesh();
  } else {
    // 身体
    const geometry = getGeometry();
    const material = new THREE.MeshStandardMaterial({ 
      color: snakeColor.value,
      emissive: snakeColor.value,
      emissiveIntensity: 0.3,
      roughness: 0.4,
      metalness: 0.6
    });
    mesh = new THREE.Mesh(geometry, material);
  }

  mesh.position.copy(position);
  scene.add(mesh);
  snakeSegments.push(mesh);
};

const rebuildSnake = () => {
  // 保持位置，替换网格
  const positions = snakeSegments.map(s => s.position.clone());
  // 移除旧的
  snakeSegments.forEach(s => scene.remove(s));
  snakeSegments.length = 0;
  // 创建新的
  positions.forEach(pos => createSnakeSegment(pos));
};

const addSegment = () => {
  const lastSegment = snakeSegments[snakeSegments.length - 1];
  if (lastSegment) {
    createSnakeSegment(lastSegment.position.clone());
  }
};

const createAppleMesh = () => {
  const group = new THREE.Group();

  // 身体
  const bodyGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const bodyMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xff0000,
    emissive: 0xaa0000,
    emissiveIntensity: 0.4,
    roughness: 0.2,
    metalness: 0.3
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  // Deform slightly to look like apple
  body.scale.set(1, 0.9, 1);
  group.add(body);

  // 果梗
  const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8);
  const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x5d4037 });
  const stem = new THREE.Mesh(stemGeometry, stemMaterial);
  stem.position.y = 0.5;
  group.add(stem);

  // 叶子
  const leafGeometry = new THREE.SphereGeometry(0.2, 8, 8);
  const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
  const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf.position.set(0.15, 0.5, 0);
  leaf.scale.set(1, 0.2, 0.5);
  leaf.rotation.z = 0.5;
  group.add(leaf);

  return group;
};

const createFood = () => {
  if (food) scene.remove(food);
  
  food = createAppleMesh();
  respawnFood();
  scene.add(food);
};

const respawnFood = () => {
  // 计算 Z=0 处的可见边界
  // 相机 Z=20, 食物 Z=0 -> 距离 = 20
  const dist = camera.position.z;
  const vFOV = THREE.MathUtils.degToRad(camera.fov); // 垂直视场角（弧度）
  const height = 2 * Math.tan(vFOV / 2) * dist;
  const width = height * camera.aspect;

  // 使用 90% 的可见区域以保持食物在屏幕内
  const safeWidth = width * 0.45;
  const safeHeight = height * 0.45;

  food.position.set(
    (Math.random() - 0.5) * 2 * safeWidth,
    (Math.random() - 0.5) * 2 * safeHeight,
    0 // 固定 Z 为 0 以便碰撞检测
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
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });

  hands.onResults(onResults);

  // 直接使用 getUserMedia 以获得更好的移动端支持 (facingMode)
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user', // 移动端优先使用前置摄像头
        width: { ideal: 640 },
        height: { ideal: 480 }
      }
    });
    
    inputVideo.value.srcObject = stream;
    await inputVideo.value.play();

    // 开始处理循环
    const processFrame = async () => {
      if (inputVideo.value && !inputVideo.value.paused && !inputVideo.value.ended) {
        await hands.send({ image: inputVideo.value });
      }
      requestAnimationFrame(processFrame);
    };
    processFrame();

  } catch (error) {
    console.error("Error accessing camera:", error);
    alert("无法访问摄像头，请检查权限或设备支持情况。");
  }
};

const onResults = (results: any) => {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    isHandDetected.value = true;
    const landmarks = results.multiHandLandmarks[0];
    
    // 使用食指指尖 (8) 定位
    // 映射 0-1 到场景坐标
    // 视频是镜像的，所以 x 反转
    const x = (1 - landmarks[8].x) * 2 - 1; // -1 to 1
    const y = (1 - landmarks[8].y) * 2 - 1; // -1 to 1
    
    // 映射到场景边界（近似）
    targetPosition.x = x * 15;
    targetPosition.y = y * 10;
    // Z 轴可以通过手的大小或捏合来控制？暂时保持 Z 轴简单，或者用捏合控制 Z？
    // 需求说“手张开/闭合控制蛇的方向”。
    // 让我们用捏合来加速。
    
    // 检测捏合（拇指指尖 4 和食指指尖 8 的距离）
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

// --- 动画循环 ---

const animate = () => {
  animationId = requestAnimationFrame(animate);

  // 更新烟花
  updateFireworks();

  // 移动蛇头向目标
  const head = snakeSegments[0];
  if (head) {
    // 平滑插值头部位置到目标
    const dir = new THREE.Vector3().subVectors(targetPosition, head.position);
    // 限制速度
    if (dir.length() > moveSpeed) {
      dir.normalize().multiplyScalar(moveSpeed);
    }
    head.position.add(dir);
    
    // 旋转头部朝向方向
    head.lookAt(targetPosition);
  }

  // 移动身体
  for (let i = snakeSegments.length - 1; i > 0; i--) {
    const current = snakeSegments[i];
    const prev = snakeSegments[i - 1];
    
    if (current && prev) {
      // 当前段向上一段移动
      const dist = current.position.distanceTo(prev.position);
      if (dist > segmentDistance) {
        const dir = new THREE.Vector3().subVectors(prev.position, current.position).normalize();
        const moveDist = dist - segmentDistance;
        current.position.add(dir.multiplyScalar(moveDist));
        current.lookAt(prev.position);
      }
    }
  }

  // 检查食物碰撞
  if (head && food) {
    // 忽略 Z 轴距离，因为主要在 2D 平面，且 Z 固定为 0
    // 使用 2D 距离获得更好的手感
    const dist = Math.sqrt(
      Math.pow(head.position.x - food.position.x, 2) + 
      Math.pow(head.position.y - food.position.y, 2)
    );
    
    if (dist < 1.5) { // 增加判定阈值
      score.value += 10;
      addSegment();
      // 在食物重生前触发烟花，确保位置正确
      createFirework(food.position.clone());
      respawnFood();
    }
    
    // 旋转食物
    food.rotation.z += 0.02; // 绕 Z 轴旋转以适应 2D 视图
    // food.rotation.y += 0.03;
  }

  updateFireworks(); // 更新烟花

  renderer.render(scene, camera);
};

// --- 生命周期 ---

onMounted(() => {
  initThree();
  initMediaPipe();
  animate();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', onWindowResize);
  
  // 停止视频流
  if (inputVideo.value && inputVideo.value.srcObject) {
    const stream = inputVideo.value.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  }

  // 清理 Three.js
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
  z-index: 3;
}
</style>
