const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!(members instanceof Object)) return false;

  let dreamTeam = [];
  let length = members.length;

  for (let i = 0; i < length; i++) {
    if (typeof members[i] === "string") {
      let trimMembers = members[i].trim();
      dreamTeam.push(trimMembers[0].toUpperCase());
    }
  }

  return dreamTeam.sort().join("");

};
