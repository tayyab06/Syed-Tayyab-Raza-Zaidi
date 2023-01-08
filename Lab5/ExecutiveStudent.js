// ExecutiveStudent.js
const Student = require('./Student1');

class ExecutiveStudent extends Student {
  constructor(id, name, dob, theory) {
    super(id, name, dob);
    this.theory = theory;
  }
  
  attendTheory() {
    console.log(`${this.name} is attending the ${this.theory} theory class.`);
  }
}

module.exports = ExecutiveStudent;
