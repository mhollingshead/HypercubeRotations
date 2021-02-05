function Vector3d(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

function Vector4d(x, y, z, w) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
}

function Vector5d(x, y, z, w, v) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.v = v;
}

function Vector6d(x, y, z, w, v, u) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
  this.v = v;
  this.u = u;
}

function vector4ToMatrix(v) {
  return [
    [v.x],
    [v.y],
    [v.z],
    [v.w]
  ];
}

function vector5ToMatrix(v) {
  return [
    [v.x],
    [v.y],
    [v.z],
    [v.w],
    [v.v]
  ];
}

function vector6ToMatrix(v) {
  return [
    [v.x],
    [v.y],
    [v.z],
    [v.w],
    [v.v],
    [v.u]
  ];
}

function matrixToVector(m) {
  return new Vector3d(m[0][0], m[1][0], m[2][0]);
}

function matrixToVector4(m) {
  return new Vector4d(m[0][0], m[1][0], m[2][0], m[3][0]);
}

function matrixToVector5(m) {
  return new Vector5d(m[0][0], m[1][0], m[2][0], m[3][0], m[4][0]);
}

function matrixToVector6(m) {
  return new Vector6d(m[0][0], m[1][0], m[2][0], m[3][0], m[4][0], m[5][0]);
}

function matVecMul(m, v) {
  var vm = vector4ToMatrix(v);
  return matrixToVector(matMul(m, vm));
}

function matVecMul5D(m, v) {
  var vm = vector5ToMatrix(v);
  return matrixToVector(matMul(m, vm));
}

function matVecMul6D(m, v) {
  var vm = vector6ToMatrix(v);
  return matrixToVector(matMul(m, vm));
}

function matVec4Mul(m, v) {
  var vm = vector4ToMatrix(v);
  return matrixToVector4(matMul(m, vm));
}

function matVec5Mul(m, v) {
  var vm = vector5ToMatrix(v);
  return matrixToVector5(matMul(m, vm));
}

function matVec6Mul(m, v) {
  var vm = vector6ToMatrix(v);
  return matrixToVector6(matMul(m, vm));
}

function matMul(a, b) {
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumRows = b.length,
    bNumCols = b[0].length,
    m = new Array(aNumRows);
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}
