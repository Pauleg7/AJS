'use strict';

var points = [74989, 74990, 84990, 62000, 58480, 61800];

points.sort(function(a, b) {
  return a - b;
})

function maxPoint (points) {
  return points.slice(-1)[0];
}

function topPoints (points, amount) {
  var arrPoints = points.slice(-amount);
  var summ = 0;

  for (var i =0; i < arrPoints.length; i++) {
    summ += arrPoints[i];
  }

  return (summ / amount).toFixed(2);
}

console.log('Самый лучший балл:' + maxPoint(points));
console.log('Средний балл игроков из топ-3:' + topPoints(points, 3));
