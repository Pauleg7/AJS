'use strict';

const balanses = [523, 6000, 5001, 5013];
const string = 'Ваш баланс:';

const viewBalanse = (string, balanses) => {
  for (let balanse of balanses) {
    let ending;

    if (balanse % 10 === 1 && balanse % 100 !== 11) {
      ending = 'балл';
    } else if (balanse % 10 > 1 && balanse % 10 < 5 && balanse % 100 > 14) {
      ending = 'балла';
    } else {
      ending = 'баллов';
    }

    console.log(`${string} ${balanse} ${ending}`);
  }
}

viewBalanse (string, balanses);