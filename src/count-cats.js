const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let numberCats = 0
  
    for (let i = 0; i < backyard.length; i++) { // перебор вложенных массивов
      for (let j = 0; j < backyard[i].length; j++) { // перебор элементов вложенных массивов
        if (backyard[i][j] === '^^') {
          numberCats ++
        } else continue
      }
    }
    return numberCats
};
