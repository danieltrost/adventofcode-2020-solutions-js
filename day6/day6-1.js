exports.getYesAnswers = function (values) {
  let totalCount = 0;
  values.forEach((group) => {
    const answers = {};
    const people = group.split('\n');

    people.forEach((personAnswers) => {
      personAnswers.split('').forEach((letter) => (answers[letter] = true));
    });

    Object.entries(answers).forEach(() => totalCount++);
  });

  return totalCount;
};
