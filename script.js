// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(2, 2, 2);
scene.add(light);

// Glowing office files (cubes)
const files = [];
const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x0088ff, emissiveIntensity: 1 });
for (let i = 0; i < 5; i++) {
  const geo = new THREE.BoxGeometry(0.5, 0.7, 0.1);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(Math.random() * 3 - 1.5, Math.random() * 2 - 1, Math.random() * 2 - 2);
  scene.add(mesh);
  files.push(mesh);
}

camera.position.z = 3;

// Animate
let progress = 0;
function animate() {
  requestAnimationFrame(animate);
  files.forEach(f => {
    f.rotation.x += 0.01;
    f.rotation.y += 0.01;
  });
  progress += 0.005;
  if (progress > 2) document.getElementById('login-container').style.display = 'block';
  renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
