exports.find2020 = function (values) {
  for (let i = 0; i < values.length - 2; i++) {
    for (let j = 1; j < values.length - 1; j++) {
      for (let k = 2; k < values.length; k++) {
        const first = values[i];
        const second = values[j];
        const third = values[k];
        if (first + second + third === 2020) {
          return first * second * third;
        }
      }
    }
  }
};
