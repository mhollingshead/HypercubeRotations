var hypercube6D = [
  new Vector6d(-1, -1, -1, 1, 1, 1),
  new Vector6d(1, -1, -1, 1, 1, 1),
  new Vector6d(1, 1, -1, 1, 1, 1),
  new Vector6d(-1, 1, -1, 1, 1, 1),
  new Vector6d(-1, -1, 1, 1, 1, 1),
  new Vector6d(1, -1, 1, 1, 1, 1),
  new Vector6d(1, 1, 1, 1, 1, 1),
  new Vector6d(-1, 1, 1, 1, 1, 1),
  new Vector6d(-1, -1, -1, -1, 1, 1),
  new Vector6d(1, -1, -1, -1, 1, 1),
  new Vector6d(1, 1, -1, -1, 1, 1),
  new Vector6d(-1, 1, -1, -1, 1, 1),
  new Vector6d(-1, -1, 1, -1, 1, 1),
  new Vector6d(1, -1, 1, -1, 1, 1),
  new Vector6d(1, 1, 1, -1, 1, 1),
  new Vector6d(-1, 1, 1, -1, 1, 1),
  new Vector6d(-1, -1, -1, 1, -1, 1),
  new Vector6d(1, -1, -1, 1, -1, 1),
  new Vector6d(1, 1, -1, 1, -1, 1),
  new Vector6d(-1, 1, -1, 1, -1, 1),
  new Vector6d(-1, -1, 1, 1, -1, 1),
  new Vector6d(1, -1, 1, 1, -1, 1),
  new Vector6d(1, 1, 1, 1, -1, 1),
  new Vector6d(-1, 1, 1, 1, -1, 1),
  new Vector6d(-1, -1, -1, -1, -1, 1),
  new Vector6d(1, -1, -1, -1, -1, 1),
  new Vector6d(1, 1, -1, -1, -1, 1),
  new Vector6d(-1, 1, -1, -1, -1, 1),
  new Vector6d(-1, -1, 1, -1, -1, 1),
  new Vector6d(1, -1, 1, -1, -1, 1),
  new Vector6d(1, 1, 1, -1, -1, 1),
  new Vector6d(-1, 1, 1, -1, -1, 1),
  new Vector6d(-1, -1, -1, 1, 1, -1),
  new Vector6d(1, -1, -1, 1, 1, -1),
  new Vector6d(1, 1, -1, 1, 1, -1),
  new Vector6d(-1, 1, -1, 1, 1, -1),
  new Vector6d(-1, -1, 1, 1, 1, -1),
  new Vector6d(1, -1, 1, 1, 1, -1),
  new Vector6d(1, 1, 1, 1, 1, -1),
  new Vector6d(-1, 1, 1, 1, 1, -1),
  new Vector6d(-1, -1, -1, -1, 1, -1),
  new Vector6d(1, -1, -1, -1, 1, -1),
  new Vector6d(1, 1, -1, -1, 1, -1),
  new Vector6d(-1, 1, -1, -1, 1, -1),
  new Vector6d(-1, -1, 1, -1, 1, -1),
  new Vector6d(1, -1, 1, -1, 1, -1),
  new Vector6d(1, 1, 1, -1, 1, -1),
  new Vector6d(-1, 1, 1, -1, 1, -1),
  new Vector6d(-1, -1, -1, 1, -1, -1),
  new Vector6d(1, -1, -1, 1, -1, -1),
  new Vector6d(1, 1, -1, 1, -1, -1),
  new Vector6d(-1, 1, -1, 1, -1, -1),
  new Vector6d(-1, -1, 1, 1, -1, -1),
  new Vector6d(1, -1, 1, 1, -1, -1),
  new Vector6d(1, 1, 1, 1, -1, -1),
  new Vector6d(-1, 1, 1, 1, -1, -1),
  new Vector6d(-1, -1, -1, -1, -1, -1),
  new Vector6d(1, -1, -1, -1, -1, -1),
  new Vector6d(1, 1, -1, -1, -1, -1),
  new Vector6d(-1, 1, -1, -1, -1, -1),
  new Vector6d(-1, -1, 1, -1, -1, -1),
  new Vector6d(1, -1, 1, -1, -1, -1),
  new Vector6d(1, 1, 1, -1, -1, -1),
  new Vector6d(-1, 1, 1, -1, -1, -1)
];

var distance6 = 4;
var rotated6D = [];
var zwvu = true;
var xwvu = true;
var xyvu = true;
var xyzu = true;
var xyzw = true;
//var projectedCube6D = project6(hypercube6D, 0);

function rotate6(a) {
  projectedCube6D = project6(hypercube6D, a);
}

function project6(s, angle) {
  var ps = [];
  for (var i = 0; i < s.length; i++) {
    var rotationZWVU = [
      [Math.cos(angle), -Math.sin(angle), 0, 0, 0, 0],
      [Math.sin(angle), Math.cos(angle), 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1]
    ];
    var rotationXWVU = [
      [1, 0, 0, 0, 0, 0],
      [0, Math.cos(angle), -Math.sin(angle), 0, 0, 0],
      [0, Math.sin(angle), Math.cos(angle), 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1]
    ];
    var rotationXYVU = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, Math.cos(angle), -Math.sin(angle), 0, 0],
      [0, 0, Math.sin(angle), Math.cos(angle), 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1]
    ];
    var rotationXYZU = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, Math.cos(angle), -Math.sin(angle), 0],
      [0, 0, 0, Math.sin(angle), Math.cos(angle), 0],
      [0, 0, 0, 0, 0, 1]
    ];

    var rotationXYZW = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, Math.cos(angle), -Math.sin(angle)],
      [0, 0, 0, 0, Math.sin(angle), Math.cos(angle)]
    ];

    var rotated = s[i];
    if (zwvu) {
      rotated = matVec6Mul(rotationZWVU, rotated);
    }
    if (xwvu) {
      rotated = matVec6Mul(rotationXWVU, rotated);
    }
    if (xyvu) {
      rotated = matVec6Mul(rotationXYVU, rotated);
    }
    if (xyzu) {
      rotated = matVec6Mul(rotationXYZU, rotated);
    }
    if (xyzw) {
      rotated = matVec6Mul(rotationXYZW, rotated);
    }
    if (i === 0) {
      rotated6D = rotated;
    }

    var w = 1 / (distance6 - rotated.u);
    var projectionMatrix = [
      [w, 0, 0, 0, 0, 0],
      [0, w, 0, 0, 0, 0],
      [0, 0, w, 0, 0, 0]
    ];
    ps.push(matVecMul6D(projectionMatrix, rotated));
  }
  return ps;
}

function init6D() {
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
  document.getElementById("cube6d").appendChild(renderer.domElement);

  var material = new THREE.LineBasicMaterial({
    color: "white"
  });

  makeLines6();
  scene.add(circle4);

  function render6() {
    requestAnimationFrame(render6);
    angle += 0.02;
    if (angle === 6.28) {
      angle = 0;
    }

    circle4.position.set(projectedCube6D[0].x, projectedCube6D[0].y, projectedCube6D[0].z);
    if (rotated6D != []) {
      document.getElementById("6dX").value = rotated6D.x;
      document.getElementById("6dXnum").innerHTML = (rotated6D.x).toFixed(2);
      document.getElementById("6dY").value = rotated6D.y;
      document.getElementById("6dYnum").innerHTML = (rotated6D.y).toFixed(2);
      document.getElementById("6dZ").value = rotated6D.z;
      document.getElementById("6dZnum").innerHTML = (rotated6D.z).toFixed(2);
      document.getElementById("6dW").value = rotated6D.w;
      document.getElementById("6dWnum").innerHTML = (rotated6D.w).toFixed(2);
      document.getElementById("6dV").value = rotated6D.v;
      document.getElementById("6dVnum").innerHTML = (rotated6D.v).toFixed(2);
      document.getElementById("6dU").value = rotated6D.u;
      document.getElementById("6dUnum").innerHTML = (rotated6D.u).toFixed(2);
    }

    rotate6(angle);
    makeLines6();

    renderer.render(scene, camera);
  }
  render6();

  function makeLines6() {
    count = 0;
    for (var i = 0; i < 4; i++) {
      connect6(0, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(0, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(0, i, i + 4, projectedCube6D, count);
      count++;
      connect6(8, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(8, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(8, i, i + 4, projectedCube6D, count);
      count++;
      connect6(16, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(16, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(16, i, i + 4, projectedCube6D, count);
      count++;
      connect6(24, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(24, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(24, i, i + 4, projectedCube6D, count);
      count++;
      connect6(32, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(32, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(32, i, i + 4, projectedCube6D, count);
      count++;
      connect6(40, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(40, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(40, i, i + 4, projectedCube6D, count);
      count++;
      connect6(48, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(48, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(48, i, i + 4, projectedCube6D, count);
      count++;
      connect6(56, i, (i + 1) % 4, projectedCube6D, count);
      count++;
      connect6(56, i + 4, ((i + 1) % 4) + 4, projectedCube6D, count);
      count++;
      connect6(56, i, i + 4, projectedCube6D, count);
      count++;
    }
    for (var i = 0; i < 8; i++) {
      connect6(0, i, i + 8, projectedCube6D, count);
      count++;
      connect6(16, i, i + 8, projectedCube6D, count);
      count++;
      connect6(32, i, i + 8, projectedCube6D, count);
      count++;
      connect6(48, i, i + 8, projectedCube6D, count);
      count++;
    }
    for (var i = 0; i < 16; i++) {
      connect6(0, i, i + 16, projectedCube6D, count);
      count++;
      connect6(32, i, i + 16, projectedCube6D, count);
      count++;
    }
    for (var i = 0; i < 32; i++) {
      connect6(0, i, i + 32, projectedCube6D, count);
      count++;
    }
  }

  function connect6(offset, i, j, points, index) {
    var a = points[i + offset];
    var b = points[j + offset];

    var geometry = new THREE.Geometry();
    geometry.vertices = [a, b];

    if (lines.length === 192) {
      lines[index].geometry.dispose();
      lines[index].geometry = geometry;
    } else {
      var line = new THREE.Line(geometry, material);
      lines.push(line);
      scene.add(line);
    }
  }
}
