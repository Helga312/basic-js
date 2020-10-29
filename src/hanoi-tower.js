const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  result.turns = 2 ** disksNumber - 1;

  let speed = turnsSpeed / 3600;
  result.seconds = Math.floor(result.turns / speed)

  return result;

};
