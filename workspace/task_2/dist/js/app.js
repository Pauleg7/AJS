"use strict";

var characters = [{
  name: 'мечник',
  health: 10
}, {
  name: 'маг',
  health: 100
}, {
  name: 'маг',
  health: 0
}, {
  name: 'лучник',
  health: 0
}];
var alive = characters.filter(function (item) {
  return item.health > 0;
});