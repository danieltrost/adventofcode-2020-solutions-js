exports.validPasswords = function (values) {
  let valid = 0;

  for (let i = 0; i < values.length; i++) {
    let currentLetterCount = 0;
    const sections = values[i].split(' ');

    const [min, max] = sections[0].split('-').map((v) => parseInt(v));
    const letter = sections[1][0];

    sections[2].split('').forEach((l) => {
      if (l === letter) {
        currentLetterCount++;
      }
    });

    if (currentLetterCount >= min && currentLetterCount <= max) {
      valid++;
    }
  }

  return valid;
};
