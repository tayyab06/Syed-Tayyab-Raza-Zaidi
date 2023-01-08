class Student1 {
    constructor(id, name, dob) {
      this.id = id;
      this.name = name;
      this.dob = dob;
    }
    
    enroll() {
      console.log(`${this.name} has enrolled in the course.`);
    }
  }
  
  module.exports = Student1;