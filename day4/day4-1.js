const REQUIRED_FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

exports.validPassports = function (values) {
  let valid = 0;
  values.forEach((passport) => {
    const passportResult = {};
    const passportLines = passport.split('\n');

    passportLines.forEach((line) => {
      const items = line.split(' ');

      items.forEach((item) => {
        const [key, value] = item.split(':');

        passportResult[key] = value;
      });
    });

    if (REQUIRED_FIELDS.every((field) => !!passportResult[field])) {
      valid++;
    }
  });

  return valid;
};
