const Student = (function() {
    const student = {};
  
    student.name = 'John';
    student.age = 25;
  
    const Courses = (function() {
      const courses = {};
  
      courses.names = ['Math', 'Physics', 'Biology'];
      courses.enroll = function(course) {
        courses.names.push(course);
      };
  
      return courses;
    })();
  
    const Result = (function() {
      const result = {};
  
      result.marks = [90, 80, 70];
      result.average = function() {
        const total = result.marks.reduce((acc, mark) => acc + mark, 0);
        return total / result.marks.length;
      };
  
      return result;
    })();
  
    student.Courses = Courses;
    student.Result = Result;
  
    return student;
  })();
  
  console.log(Student.name); // John
  console.log(Student.Courses.names); // ['Math', 'Physics', 'Biology']
  console.log(Student.Result.average()); // 80
  