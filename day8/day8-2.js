exports.findFinishedAccumulator = function (inputValues) {
  let finishedAcc;

  inputValues.forEach((line, index) => {
    let acc = 0;
    let currentOp = 0;
    let runLines = {};

    while (!runLines[currentOp] && currentOp < inputValues.length) {
      const [action, value] = inputValues[currentOp].split(' ');

      runAction(action, parseInt(value));
    }

    function runAction(action, value) {
      runLines[currentOp] = true;

      if (currentOp === index && ['jmp', 'nop'].includes(action)) {
        action = action === 'jmp' ? 'nop' : 'jmp';
      }

      switch (action) {
        default:
        case 'nop':
          currentOp++;
          break;
        case 'acc':
          acc += value;
          currentOp++;
          break;
        case 'jmp':
          currentOp += value;
          break;
      }

      lastOp = [action, value];
    }

    if (!runLines[currentOp]) {
      finishedAcc = acc;
    }
  });

  return finishedAcc;
};
