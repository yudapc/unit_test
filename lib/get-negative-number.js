function getNegativeNumber(arr) {
  return arr.filter(x => x < 0);
}

function countNumber(functionAction) {
  return function(data) {
    const filter = functionAction(data);
    return filter.length;
  };
}

function doubleNumber(arr) {
  return arr.map(x => x * 2);
}

module.exports = { getNegativeNumber, countNumber, doubleNumber };
