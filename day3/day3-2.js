// [[x, y]]
const slopes = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 1],
];

function calculateTreesHit([x, y], values) {
  let treesHit = 0;
  let yCoord = 0;

  for (let i = 0; i < values.length; i += x) {
    if (values[i][yCoord] === '#') {
      treesHit++;
    }
    yCoord += y;
    if (yCoord >= values[i].length) {
      yCoord = yCoord - values[i].length;
    }
  }

  return treesHit;
}
exports.calculateSlopeResults = (values) =>
  slopes
    .map((slope) => calculateTreesHit(slope, values))
    .reduce((acc, cur) => acc * cur, 1);
