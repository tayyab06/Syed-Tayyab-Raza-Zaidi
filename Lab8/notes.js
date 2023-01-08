const Class = (function() {
    const Class = {};
  
    Class.name = 'Physics 101';
  
    const Teacher = (function() {
      const teacher = {};
  
      teacher.name = 'John';
      teacher.age = 35;
  
      return teacher;
    })();
  
    const Notes = (function() {
      const notes = {};
  
      notes.names = ['Chapter 1', 'Chapter 2', 'Chapter 3'];
      notes.getNote = function(index) {
        return notes.names[index];
      };
  
      return notes;
    })();
  
    const Lecture = (function() {
      const lecture = {};
  
      lecture.topics = ['Forces', 'Energy', 'Momentum'];
      lecture.getTopic = function(index) {
        return lecture.topics[index];
      };
  
      return lecture;
    })();
  
    Class.Teacher = Teacher;
    Class.Notes = Notes;
    Class.Lecture = Lecture;
  
    return Class;
  })();
  
  console.log(Class.name); // Physics 101
  console.log(Class.Teacher.name); // John
  console.log(Class.Notes.getNote(1)); // Chapter 2
  console.log(Class.Lecture.getTopic(0)); // Forces
  