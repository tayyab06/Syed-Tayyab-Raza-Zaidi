// RegularStudent.js
const Student = require('./Student1');

class RegularStudent extends Student {
  constructor(id, name, dob, lab) {
    super(id, name, dob);
    this.lab = lab;
  }
  
  attendLab() {
    console.log(`${this.name} is attending the ${this.lab} lab.`);
  }
}

module.exports = RegularStudent;
