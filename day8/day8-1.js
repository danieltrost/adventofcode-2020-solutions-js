exports.findAccumulator = function (inputValues) {
  let acc = 0;
  let currentOp = 0;
  let runLines = {};

  while (!runLines[currentOp]) {
    const [action, value] = inputValues[currentOp].split(' ');
    const parsedValue = parseInt(value);

    runLines[currentOp] = true;

    switch (action) {
      default:
      case 'nop':
        currentOp++;
        break;
      case 'acc':
        acc += parsedValue;
        currentOp++;
        break;
      case 'jmp':
        currentOp += parsedValue;
        break;
    }
  }

  return acc;
};
