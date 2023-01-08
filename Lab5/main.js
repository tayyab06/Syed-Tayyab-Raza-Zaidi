// Create a new course
const course = new Course(1, 'Math', 3);

// Create a new university
const university = new University('SSUET');

// Create a new student
const student = new Student('John', 20);

// Add the course to the student's courses
student.addCourse(course);

// Set the university for the student
student.belongsToUniversity(university);
