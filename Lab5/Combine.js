const RegularStudent = require('./RegularStudent');
const ExecutiveStudent = require('./ExecutiveStudent');

const regularStudent = new RegularStudent(1, 'John', '01/01/2000', 'Physics');
console.log(regularStudent); // RegularStudent { id: 1, name: 'John', dob: '01/01/2000', lab: 'Physics' }
regularStudent.enroll(); // John has enrolled in the course.
regularStudent.attendLab(); // John is attending the Physics lab.

const executiveStudent = new ExecutiveStudent(2, 'Jane', '01/01/1995', 'Business');
console.log(executiveStudent); // ExecutiveStudent { id: 2, name: 'Jane', dob: '01/01/1995', theory: 'Business' }
executiveStudent.enroll(); // Jane has enrolled in the course.
executiveStudent.attendTheory(); // Jane is attending the Business theory class.
