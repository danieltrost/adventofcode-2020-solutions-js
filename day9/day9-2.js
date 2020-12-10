exports.findEncryptionWeakness = function (inputValues, firstBreak) {
  let result;

  for (let i = 0; i < inputValues.length; i++) {
    const values = [];
    let currentSize = 0;
    let currentIndex = i;

    while (currentSize < firstBreak) {
      const value = inputValues[currentIndex];
      currentSize += value;
      currentIndex++;
      values.push(value);
    }

    if (currentSize === firstBreak) {
      result = Math.min(...values) + Math.max(...values);
      break;
    }
  }

  return result;
};
