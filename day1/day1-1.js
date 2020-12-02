exports.find2020 = function (values) {
  for (let i = 0; i < values.length - 1; i++) {
    for (let j = 1; j < values.length; j++) {
      const first = values[i];
      const second = values[j];
      if (first + second === 2020) {
        return first * second;
      }
    }
  }
};
