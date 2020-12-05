exports.getMissingSeat = function (values) {
  const seats = [];
  values.forEach((value) => {
    const row = getRange(value.split(''), 'B', 'F', [0, 127])[0];
    const column = getRange(value.slice(-3).split(''), 'R', 'L', [0, 7])[0];

    const seatId = row * 8 + column;

    seats.push(seatId);
  });

  const lowestSeat = Math.min(...seats);
  const highestSeat = Math.max(...seats);

  let missingPass = null;
  seats.forEach((seat) => {
    if (seat !== lowestSeat && !seats.includes(seat - 1)) {
      missingPass = seat - 1;
    } else if (seat !== highestSeat && !seats.includes(seat + 1)) {
      missingPass = seat + 1;
    }
  });

  return missingPass;
};

function getRange(letters, upperLetter, lowerLetter, range) {
  letters.forEach((letter) => {
    if (letter === upperLetter) {
      const lowerValue = Math.ceil((range[1] - range[0]) / 2) + range[0];

      range[0] = lowerValue;
    } else if (letter === lowerLetter) {
      const upperValue = Math.floor((range[1] - range[0]) / 2) + range[0];

      range[1] = upperValue;
    }
  });

  return range;
}
