var a = 2,
    b = 3,
    c = 1;

function getDiscriminant (a, b, c) {
    var delta = Math.pow(b, 2) - 4 * a * c
    return delta
}

function getQuadratic (delta, a, b) {
  if (delta === 0) {
    var x = -b / (2 * a)
    return 'X: ' + x
  } else if (delta > 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a)
    var x2 = (-b - Math.sqrt(delta)) / (2 * a)
    return 'X1: ' + x1 + '; X2: ' + x2
  } else if (delta < 0) {
    return 'No data'
  }
}

document.write(getDiscriminant(a, b, c))
document.write(getQuadratic(getDiscriminant(a, b, c), a, b))


module.exports = {
    getDiscriminant,
    getQuadratic
}