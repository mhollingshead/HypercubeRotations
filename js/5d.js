var hypercube5D = [
  new Vector5d(-1, -1, -1, 1, 1),
  new Vector5d(1, -1, -1, 1, 1),
  new Vector5d(1, 1, -1, 1, 1),
  new Vector5d(-1, 1, -1, 1, 1),
  new Vector5d(-1, -1, 1, 1, 1),
  new Vector5d(1, -1, 1, 1, 1),
  new Vector5d(1, 1, 1, 1, 1),
  new Vector5d(-1, 1, 1, 1, 1),
  new Vector5d(-1, -1, -1, -1, 1),
  new Vector5d(1, -1, -1, -1, 1),
  new Vector5d(1, 1, -1, -1, 1),
  new Vector5d(-1, 1, -1, -1, 1),
  new Vector5d(-1, -1, 1, -1, 1),
  new Vector5d(1, -1, 1, -1, 1),
  new Vector5d(1, 1, 1, -1, 1),
  new Vector5d(-1, 1, 1, -1, 1),
  new Vector5d(-1, -1, -1, 1, -1),
  new Vector5d(1, -1, -1, 1, -1),
  new Vector5d(1, 1, -1, 1, -1),
  new Vector5d(-1, 1, -1, 1, -1),
  new Vector5d(-1, -1, 1, 1, -1),
  new Vector5d(1, -1, 1, 1, -1),
  new Vector5d(1, 1, 1, 1, -1),
  new Vector5d(-1, 1, 1, 1, -1),
  new Vector5d(-1, -1, -1, -1, -1),
  new Vector5d(1, -1, -1, -1, -1),
  new Vector5d(1, 1, -1, -1, -1),
  new Vector5d(-1, 1, -1, -1, -1),
  new Vector5d(-1, -1, 1, -1, -1),
  new Vector5d(1, -1, 1, -1, -1),
  new Vector5d(1, 1, 1, -1, -1),
  new Vector5d(-1, 1, 1, -1, -1)
];

var distance5 = 4;
var rotated5D = [];
var zwv = true;
var xyv = true;
var xyz = true;
var xwv = false;
var projectedCube5D = project5D(hypercube5D, 0);

function rotate5D(a) {
  projectedCube5D = project5D(hypercube5D, a);
}

function project5D(s, angle) {
  var ps = [];
  for (var i = 0; i < s.length; i++) {
    var rotationZWV = [
      [Math.cos(angle), -Math.sin(angle), 0, 0, 0],
      [Math.sin(angle), Math.cos(angle), 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ];
    var rotationXWV = [
      [1, 0, 0, 0, 0],
      [0, Math.cos(angle), -Math.sin(angle), 0, 0],
      [0, Math.sin(angle), Math.cos(angle), 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ];
    var rotationXYV = [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, Math.cos(angle), -Math.sin(angle), 0],
      [0, 0, Math.sin(angle), Math.cos(angle), 0],
      [0, 0, 0, 0, 1]
    ];
    var rotationXYZ = [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, Math.cos(angle), -Math.sin(angle)],
      [0, 0, 0, Math.sin(angle), Math.cos(angle)]
    ];

    var rotated = s[i];
    if (zwv) {
      rotated = matVec5Mul(rotationZWV, rotated);
    }
    if (xyv) {
      rotated = matVec5Mul(rotationXYV, rotated);
    }
    if (xyz) {
      rotated = matVec5Mul(rotationXYZ, rotated);
    }
    if (xwv) {
      rotated = matVec5Mul(rotationXWV, rotated);
    }

    if (i === 0) {
      rotated5D = rotated;
    }

    var w = 1 / (distance5 - rotated.v);
    var projectionMatrix = [
      [w, 0, 0, 0, 0],
      [0, w, 0, 0, 0],
      [0, 0, w, 0, 0]
    ];

    ps.push(matVecMul5D(projectionMatrix, rotated));
  }
  return ps;
}

function init5D() {
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
  document.getElementById("cubeArea5D").appendChild(renderer.domElement);

  var material = new THREE.LineBasicMaterial({
    color: "white"
  });

  makeLines5();
  scene.add(circle3);

  function render5() {
    requestAnimationFrame(render5);
    angle += 0.02;
    if (angle === 6.28) {
      angle = 0;
    }

    circle3.position.set(projectedCube5D[0].x, projectedCube5D[0].y, projectedCube5D[0].z);
    if (rotated5D != []) {
      document.getElementById("5dX").value = rotated5D.x;
      document.getElementById("5dXnum").innerHTML = rotated5D.x.toFixed(2);
      document.getElementById("5dY").value = rotated5D.y;
      document.getElementById("5dYnum").innerHTML = rotated5D.y.toFixed(2);
      document.getElementById("5dZ").value = rotated5D.z;
      document.getElementById("5dZnum").innerHTML = rotated5D.z.toFixed(2);
      document.getElementById("5dW").value = rotated5D.w;
      document.getElementById("5dWnum").innerHTML = rotated5D.w.toFixed(2);
      document.getElementById("5dV").value = rotated5D.v;
      document.getElementById("5dVnum").innerHTML = rotated5D.v.toFixed(2);
    }

    rotate5D(angle);
    makeLines5();

    renderer.render(scene, camera);
  }
  render5();

  function makeLines5() {
    count = 0;
    for (var i = 0; i < 4; i++) {
      connect5(0, i, (i + 1) % 4, projectedCube5D, count);
      count++;
      connect5(0, i + 4, ((i + 1) % 4) + 4, projectedCube5D, count);
      count++;
      connect5(0, i, i + 4, projectedCube5D, count);
      count++;
      connect5(8, i, (i + 1) % 4, projectedCube5D, count);
      count++;
      connect5(8, i + 4, ((i + 1) % 4) + 4, projectedCube5D, count);
      count++;
      connect5(8, i, i + 4, projectedCube5D, count);
      count++;
      connect5(16, i, (i + 1) % 4, projectedCube5D, count);
      count++;
      connect5(16, i + 4, ((i + 1) % 4) + 4, projectedCube5D, count);
      count++;
      connect5(16, i, i + 4, projectedCube5D, count);
      count++;
      connect5(24, i, (i + 1) % 4, projectedCube5D, count);
      count++;
      connect5(24, i + 4, ((i + 1) % 4) + 4, projectedCube5D, count);
      count++;
      connect5(24, i, i + 4, projectedCube5D, count);
      count++;
    }
    for (var i = 0; i < 8; i++) {
      connect5(0, i, i + 8, projectedCube5D, count);
      count++;
      connect5(16, i, i + 8, projectedCube5D, count);
      count++;
    }
    for (var i = 0; i < 16; i++) {
      connect5(0, i, i + 16, projectedCube5D, count);
      count++;
    }
  }

  function connect5(offset, i, j, points, index) {
    var a = points[i + offset];
    var b = points[j + offset];

    var geometry = new THREE.Geometry();
    geometry.vertices = [a, b];

    if (lines.length === 80) {
      lines[index].geometry.dispose();
      lines[index].geometry = geometry;
    } else {
      var line = new THREE.Line(geometry, material);
      lines.push(line);
      scene.add(line);
    }
  }
}
