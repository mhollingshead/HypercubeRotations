var hypercube4D = [
  new Vector4d(-1, -1, -1, 1),
  new Vector4d(1, -1, -1, 1),
  new Vector4d(1, 1, -1, 1),
  new Vector4d(-1, 1, -1, 1),
  new Vector4d(-1, -1, 1, 1),
  new Vector4d(1, -1, 1, 1),
  new Vector4d(1, 1, 1, 1),
  new Vector4d(-1, 1, 1, 1),
  new Vector4d(-1, -1, -1, -1),
  new Vector4d(1, -1, -1, -1),
  new Vector4d(1, 1, -1, -1),
  new Vector4d(-1, 1, -1, -1),
  new Vector4d(-1, -1, 1, -1),
  new Vector4d(1, -1, 1, -1),
  new Vector4d(1, 1, 1, -1),
  new Vector4d(-1, 1, 1, -1)
];

var distance = 4;
var rotated4D = [];
var xy = true;
var zw = true;
var xw = false;
var projectedCube = project4D(hypercube4D, 0);

function rotate(a) {
  projectedCube = project4D(hypercube4D, a);
}

function project4D(s, angle) {
  var ps = [];
  for (var i = 0; i < s.length; i++) {
    var rotationZW = [
      [Math.cos(angle), -Math.sin(angle), 0, 0],
      [Math.sin(angle), Math.cos(angle), 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ];
    var rotationXW = [
      [1, 0, 0, 0],
      [0, Math.cos(angle), -Math.sin(angle), 0],
      [0, Math.sin(angle), Math.cos(angle), 0],
      [0, 0, 0, 1]
    ];
    var rotationXY = [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, Math.cos(angle), -Math.sin(angle)],
      [0, 0, Math.sin(angle), Math.cos(angle)]
    ];

    var rotated = s[i];
    if (zw) {
      rotated = matVec4Mul(rotationZW, rotated);
    }
    if (xw) {
      rotated = matVec4Mul(rotationXW, rotated);
    }
    if (xy) {
      rotated = matVec4Mul(rotationXY, rotated);
    }

    if (i === 0) {
      rotated4D = rotated;
    }

    var w = 1 / (distance - rotated.w);
    var projectionMatrix = [
      [w, 0, 0, 0],
      [0, w, 0, 0],
      [0, 0, w, 0]
    ];

    ps.push(matVecMul(projectionMatrix, rotated));
  }
  return ps;
}

function init4D() {
  var scene = new THREE.Scene();
  scene.rotateX(-Math.PI / 2);

  var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 1.33;

  var angle = 0;
  var lines = [];

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
  document.getElementById("cubeArea").appendChild(renderer.domElement);

  var material = new THREE.LineBasicMaterial({
    color: "white"
  });

  makeLines();
  scene.add(circle2);

  function render() {
    requestAnimationFrame(render);
    angle += 0.02;
    if (angle === 6.28) {
      angle = 0;
    }

    circle2.position.set(projectedCube[0].x, projectedCube[0].y, projectedCube[0].z);
    if (rotated4D != []) {
      document.getElementById("4dX").value = rotated4D.x;
      document.getElementById("4dXnum").innerHTML = parseFloat(rotated4D.x).toFixed(2);
      document.getElementById("4dY").value = rotated4D.y;
      document.getElementById("4dYnum").innerHTML = parseFloat(rotated4D.y).toFixed(2);
      document.getElementById("4dZ").value = rotated4D.z;
      document.getElementById("4dZnum").innerHTML = parseFloat(rotated4D.z).toFixed(2);
      document.getElementById("4dW").value = rotated4D.w;
      document.getElementById("4dWnum").innerHTML = parseFloat(rotated4D.w).toFixed(2);
    }

    rotate(angle);
    makeLines();

    renderer.render(scene, camera);
  }
  render();

  function makeLines() {
    count = 0;
    for (var i = 0; i < 4; i++) {
      connect(0, i, (i + 1) % 4, projectedCube, count);
      count++;
      connect(0, i + 4, ((i + 1) % 4) + 4, projectedCube, count);
      count++;
      connect(0, i, i + 4, projectedCube, count);
      count++;
      connect(8, i, (i + 1) % 4, projectedCube, count);
      count++;
      connect(8, i + 4, ((i + 1) % 4) + 4, projectedCube, count);
      count++;
      connect(8, i, i + 4, projectedCube, count);
      count++;
    }
    for (var i = 0; i < 8; i++) {
      connect(0, i, i + 8, projectedCube, count);
      count++;
    }

  }

  function connect(offset, i, j, points, index) {
    var a = points[i + offset];
    var b = points[j + offset];

    var geometry = new THREE.Geometry();
    geometry.vertices = [a, b];

    if (lines.length === 32) {
      lines[index].geometry.dispose();
      lines[index].geometry = geometry;
    } else {
      var line = new THREE.Line(geometry, material);
      lines.push(line);
      scene.add(line);
    }
  }
}
