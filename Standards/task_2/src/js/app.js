'use strict';

const balanses = [523, 6000, 5001, 5013];

const viewBalanse = (strings, balanse) => {
  let string = strings[0];
  let ending;
  if (balanse % 10 === 1 && balanse % 100 !== 11) {
    ending = 'балл';
  } else if (balanse % 10 > 1 && balanse % 10 < 5 && (balanse % 100 > 14 || balanse % 100 < 12)) {
    ending = 'балла';
  } else {
    ending = 'баллов';
  }
  return `${string} ${balanse} ${ending}`;
}

for (let balanse of balanses) {
  const output = viewBalanse`Ваш баланс: ${balanse}`;
  console.log (output);
}

