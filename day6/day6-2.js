exports.getYesAnswers = function (values) {
  let totalCount = 0;
  values.forEach((group) => {
    const answers = {};
    const people = group.split('\n');

    people.forEach((personAnswers) => {
      personAnswers.split('').forEach((letter) => {
        if (answers[letter] !== undefined) {
          answers[letter] += 1;
        } else {
          answers[letter] = 1;
        }
      });
    });

    Object.entries(answers).forEach((entry) => {
      if (entry[1] === people.length) {
        totalCount++;
      }
    });
  });

  return totalCount;
};
