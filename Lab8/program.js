function Program() {}

Program.prototype.run = function() {
  console.log('Running program');
};

function TeacherProgram() {}

TeacherProgram.prototype = new Program();
TeacherProgram.prototype.release = function() {
  console.log('Releasing program');
};

function StudentProgram() {}

StudentProgram.prototype = new Program();
StudentProgram.prototype.debug = function() {
  console.log('Debugging program');
};

const teacherProgram = new TeacherProgram();
console.log(teacherProgram.run); // logs 'function'
console.log(teacherProgram.release); // logs 'function'
console.log(teacherProgram.debug); // logs 'undefined'

const studentProgram = new StudentProgram();
console.log(studentProgram.run); // logs 'function'
console.log(studentProgram.release); // logs 'undefined'
console.log(studentProgram.debug); // logs 'function'
