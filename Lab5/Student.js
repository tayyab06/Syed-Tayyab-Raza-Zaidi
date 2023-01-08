class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Add a property called university of type University class
    university = null;
  
    // Add a property called courses of an array of Course class
    courses = [];
  
    // Add a method called addCourse accepting Course class object and set that onto courses property
    addCourse(course) {
      this.courses.push(course);
    }
  
    // Add a method called belongsToUniversity accepting University class object and set that onto university property
    belongsToUniversity(university) {
      this.university = university;
    }
  }
  