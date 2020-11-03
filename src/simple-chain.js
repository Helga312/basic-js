const chainMaker = {
  string: "",
  getLength() {
    return this.string.split("~~").length;
  },
  addLink(value) {
    if (
      value === false ||
      value ||
      value === 0 ||
      value == undefined ||
      value.toString() === "NaN"
    ) {
      chainMaker.string === ""
        ? (this.string = `( ${value} )`)
        : (this.string = `${this.string}~~( ${value} )`);
    } else {
      chainMaker.string === ""
        ? (this.string = `( )`)
        : (this.string = `${this.string}~~( )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      typeof position !== "number" ||
      position !== Number.parseInt(position, 10) ||
      position > this.string.split("~~").length
    ) {
      this.string = "";
      throw new Error("Wrong position!");
    } else {
      this.string = this.string.split("~~");
      this.string.splice(position - 1, 1);
      this.string = this.string.join("~~");
      return this;
    }
  },
  reverseChain() {
    this.string = this.string.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    let result = this.string;
    this.string = "";
    return result;
  }
};

module.exports = chainMaker;
