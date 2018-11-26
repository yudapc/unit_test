function getNegativeNumber(arr) {
  return arr.filter(x => x < 0);
}

function countNegativeNumber(arr) {
  const filter = getNegativeNumber(arr);
  return filter.length;
}

function doubleNumber(arr) {
  return arr.map(x => x * 2);
}

module.exports = { getNegativeNumber, countNegativeNumber, doubleNumber };
