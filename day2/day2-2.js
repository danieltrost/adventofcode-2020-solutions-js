exports.validPasswords = function (values) {
  let valid = 0;

  for (let i = 0; i < values.length; i++) {
    const sections = values[i].split(' ');

    // Subtract 1 from number to make it zero indexed
    const [min, max] = sections[0].split('-').map((v) => parseInt(v) - 1);
    const letter = sections[1][0];

    if (
      (sections[2][min] === letter && sections[2][max] !== letter) ||
      (sections[2][min] !== letter && sections[2][max] === letter)
    ) {
      valid++;
    }
  }

  return valid;
};
