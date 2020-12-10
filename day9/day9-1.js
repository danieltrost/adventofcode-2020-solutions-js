exports.findFirstBreak = function (values, preambleSize) {
  const rollingList = [];
  let firstBreak;

  for (let i = 0; i < values.length; i++) {
    if (i < preambleSize) {
      rollingList.push(values[i]);
    } else {
      if (hasResult(rollingList, values[i])) {
        rollingList.shift();
        rollingList.push(values[i]);
      } else {
        firstBreak = values[i];
        break;
      }
    }
  }

  return firstBreak;
};

function hasResult(list, targetNumber) {
  let contains = false;
  for (let i = 0; i < list.length; i++) {
    const subtractedTarget = targetNumber - list[i];

    if (subtractedTarget !== list[i] && list.includes(subtractedTarget)) {
      contains = true;
      break;
    }
  }

  return contains;
}
