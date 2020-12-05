exports.calculateTreesHit = function (values) {
  let treesHit = 0;
  let yCoord = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i][yCoord] === '#') {
      treesHit++;
    }
    yCoord += 3;
    if (yCoord >= values[i].length) {
      yCoord = yCoord - values[i].length;
    }
  }

  return treesHit;
};
