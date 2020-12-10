exports.findJoltDifference = function (values) {
  const maxAdapter = Math.max(...values);
  let currentJoltAdapter = 0;

  // 3 jolt always starts at 1 to include phone +3
  const joltDifference = [0, 0, 1];

  while (currentJoltAdapter < maxAdapter) {
    if (values.includes(currentJoltAdapter + 1)) {
      currentJoltAdapter += 1;
      joltDifference[0]++;
    } else if (values.includes(currentJoltAdapter + 2)) {
      currentJoltAdapter += 2;
      joltDifference[1]++;
    } else if (values.includes(currentJoltAdapter + 3)) {
      currentJoltAdapter += 3;
      joltDifference[2]++;
    }
  }

  return joltDifference[0] * joltDifference[2];
};
