const students = require('./students');
const faculties = require('./faculties');
const events = require('./events');

const app = {
  init: function() {
    console.log('University Management App');
    console.log('Students:', students.getStudents());
    console.log('Faculties:', faculties.getFaculties());
    console.log('Events:', events.getEvents());
  }
};

app.init();
