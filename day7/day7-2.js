exports.findBagCount = function (inputValues) {
  const results = {};

  inputValues.forEach((row) => {
    const parsedRow = row.split(', ');
    const bagDetails = parsedRow[0].split(' ');
    const primaryBag = bagDetails[0] + bagDetails[1];
    const insideBag = bagDetails[5] + bagDetails[6];
    const insideCount = bagDetails[4];

    if (insideCount !== 'no') {
      results[primaryBag] = {
        [insideBag]: insideCount,
      };

      for (let i = 1; i < parsedRow.length; i++) {
        const [bagCount, color1, color2] = parsedRow[i].split(' ');

        results[primaryBag][color1 + color2] = bagCount;
      }
    }
  });

  function recur(bag) {
    let count = 0;
    if (!results[bag]) {
      return 0;
    }

    Object.entries(results[bag]).forEach(([key, value]) => {
      count += parseInt(value) + recur(key) * value;
    });

    return count;
  }
  return recur('shinygold');
};
