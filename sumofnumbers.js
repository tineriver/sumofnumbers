// eslint-disable-next-line import/no-unresolved
const _ = require('underscore');

const sumThis = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumWithFor(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
}

console.log(sumWithFor(sumThis));

function sumWithWhile(data) {
  let total = 0;
  let key = 0;
  while (key < data.length) {
    total += data[key];
    key++;
  }
  return total;
}

console.log(sumWithWhile(sumThis));

function sumWithRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  const list = data;
  // eslint-disable-next-line no-shadow
  function add(list, i) {
    if (i === list.length - 1) {
      return list[i];
    }
    return list[i] + add(list, i + 1);
  }
  return add(list, 0);
}

console.log(sumWithRecursion(sumThis));

function sumWithUnderscore(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

console.log(sumWithUnderscore(sumThis));
