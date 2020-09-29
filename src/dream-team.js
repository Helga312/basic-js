const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = ''
  let trimMembers = []
  let sortMembers = []

  if (members) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        trimMembers[i] = members[i].trim().toUpperCase()
      } else continue

      sortMembers = trimMembers.sort()
    }
  } else return false

  for (i = 0; i < trimMembers.length; i++) {
    if (trimMembers[i]) {
      dreamTeam = `${dreamTeam}${trimMembers[i][0].toUpperCase()}`
    } else continue
  }

  if (dreamTeam) {
    return dreamTeam
  } else return false


};
