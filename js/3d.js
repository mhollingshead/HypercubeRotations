var x = true;
var y = true;
var z = false;

const geo = new THREE.SphereGeometry(0.02, 32, 32);
const mat = new THREE.MeshBasicMaterial({
  color: "#33b570"
});
const circle2 = new THREE.Mesh(geo, mat);
const circle3 = new THREE.Mesh(geo, mat);
const circle4 = new THREE.Mesh(geo, mat);
const geo2 = new THREE.SphereGeometry(0.06, 32, 32);
const circle1 = new THREE.Mesh(geo2, mat);

var scene = new THREE.Scene();
scene.rotateX(-Math.PI / 2);

var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 4;

var ambientLight = new THREE.AmbientLight(0xeeeeee);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

var renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(300, 300);
document.getElementById("cube").appendChild(renderer.domElement);

var material = new THREE.LineBasicMaterial({
  color: "white"
});

var geometry = new THREE.Geometry();
geometry.vertices = [
  new THREE.Vector3(-1, -1, -1),
  new THREE.Vector3(-1, -1, 1),
  new THREE.Vector3(-1, 1, 1),
  new THREE.Vector3(1, 1, 1),
  new THREE.Vector3(1, 1, -1),
  new THREE.Vector3(-1, 1, -1),
  new THREE.Vector3(-1, -1, -1),
  new THREE.Vector3(1, -1, -1),
  new THREE.Vector3(1, -1, 1),
  new THREE.Vector3(-1, -1, 1),
  new THREE.Vector3(-1, 1, 1),
  new THREE.Vector3(-1, 1, -1),
  new THREE.Vector3(1, 1, -1),
  new THREE.Vector3(1, -1, -1),
  new THREE.Vector3(1, -1, 1),
  new THREE.Vector3(1, 1, 1)
];

var line = new THREE.Line(geometry, material);

scene.add(line);
scene.add(circle1);

function render() {
  requestAnimationFrame(render);

  if (x) {
    line.rotation.x += 0.02;
  }
  if (y) {
    line.rotation.y += 0.02;
  }
  if (z) {
    line.rotation.z += 0.02;
  }

  line.updateMatrix();
  var vec = new THREE.Vector3();
  vec.copy(line.geometry.vertices[0]);
  vec.applyMatrix4(line.matrix);

  circle1.position.set(vec.x, vec.y, vec.z);
  document.getElementById("3dX").value = vec.x;
  document.getElementById("3dXnum").innerHTML = vec.x.toFixed(2);
  document.getElementById("3dY").value = vec.y;
  document.getElementById("3dYnum").innerHTML = vec.y.toFixed(2);
  document.getElementById("3dZ").value = vec.z;
  document.getElementById("3dZnum").innerHTML = vec.z.toFixed(2);

  renderer.render(scene, camera);
}
render();

function normalizeCube() {
  line.rotation.x = 0;
  line.rotation.y = 0;
  line.rotation.z = 0;
}
