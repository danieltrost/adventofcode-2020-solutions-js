const REQUIRED_FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const EYE_COLORS = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

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

    if (
      REQUIRED_FIELDS.every((field) => !!passportResult[field]) &&
      isPassportValid(passportResult)
    ) {
      valid++;
    }
  });

  return valid;
};

function isPassportValid({ byr, iyr, eyr, hgt, hcl, ecl, pid }) {
  const newHeight = hgt.split('in')[0].split('cm')[0];

  if (byr < 1920 || byr > 2002) {
    return false;
  } else if (iyr < 2010 || iyr > 2020) {
    return false;
  } else if (eyr < 2020 || eyr > 2030) {
    return false;
  } else if (!hgt.includes('cm') && !hgt.includes('in')) {
    return false;
  } else if (hgt.includes('in') && (newHeight < 59 || newHeight > 76)) {
    return false;
  } else if (hgt.includes('cm') && (newHeight < 150 || newHeight > 193)) {
    return false;
  } else if (!/^\#([0-9a-fA-F]){6}$/g.test(hcl)) {
    return false;
  } else if (!EYE_COLORS.includes(ecl)) {
    return false;
  } else if (!/^[0-9]{9}$/g.test(pid)) {
    return false;
  } else {
    return true;
  }
}
