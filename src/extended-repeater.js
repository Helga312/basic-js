const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = "";
  let addition = "";

  str === null ? (str = "null") : (str = str.toString());
  options.separator === null ? (options.separator = "null") : options.separator;
  options.addition === null ? (options.addition = "null") : options.addition;
  options.additionSeparator === null
    ? (options.additionSeparator = "null")
    : options.additionSeparator;

  typeof options.separator === "boolean"
    ? (options.separator = options.separator.toString())
    : options.separator;
  typeof options.addition === "boolean"
    ? (options.addition = options.addition.toString())
    : options.addition;
  typeof options.additionSeparator === "boolean"
    ? (options.additionSeparator = options.additionSeparator.toString())
    : options.additionSeparator;

  options.repeatTimes ? options.repeatTimes : (options.repeatTimes = 1);
  options.separator
    ? (options.separator = options.separator.toString())
    : (options.separator = "");
  options.addition
    ? (options.addition = options.addition.toString())
    : (options.addition = "");
  options.additionRepeatTimes
    ? options.additionRepeatTimes
    : (options.additionRepeatTimes = 1);
  options.additionSeparator
    ? (options.additionSeparator = options.additionSeparator.toString())
    : (options.additionSeparator = "");

  for (let add = 1; add <= options.additionRepeatTimes; add++) {
    if (options.additionSeparator && add !== options.additionRepeatTimes) {
      addition = `${addition}${options.addition}${options.additionSeparator}`;
    } else if (add === options.additionRepeatTimes) {
      addition = `${addition}${options.addition}`;
    } else {
      addition = `${addition}${options.addition}|`;
    }
  }

  for (let countStr = 1; countStr <= options.repeatTimes; countStr++) {
    if (countStr !== options.repeatTimes && options.separator) {
      string = `${string}${str}${addition}${options.separator}`;
    } else if (countStr === options.repeatTimes) {
      string = `${string}${str}${addition}`;
    } else {
      string = `${string}${str}${addition}+`;
    }
  }
  return string;
};
