exports.findValidBags = function (inputValues) {
  const results = {};
  const validBags = {};

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
    Object.entries(results).forEach(([key, value]) => {
      if (!!value[bag]) {
        validBags[key] = true;
        recur(key);
      }
    });
  }
  recur('shinygold');

  return Object.entries(validBags).length;
};
