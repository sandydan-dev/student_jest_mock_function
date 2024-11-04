const students = [
  { id: 1, name: "Jackey Khanna", age: 17, course: "Python" },
  { id: 2, name: "Maya Patel", age: 19, course: "Angular" },
  { id: 3, name: "Sophia Kim", age: 18, course: "Django" },
  { id: 4, name: "Alex Chen", age: 22, course: "React" },
  { id: 5, name: "Teena Patel", age: 24, course: "Angular" },
  { id: 6, name: "Ethan Lee", age: 26, course: "Vue.js" },
  { id: 7, name: "Sophia Kim", age: 28, course: "Django" },
  { id: 8, name: "Benjamin Hall", age: 30, course: "Ruby on Rails" },
  { id: 9, name: "Emma Taylor", age: 27, course: "Flutter" },
  { id: 10, name: "Oliver Brown", age: 29, course: "Swift" },
  { id: 11, name: "Isabella Martin", age: 31, course: "Kotlin" },
  { id: 12, name: "William Davis", age: 32, course: "Go" },
  { id: 13, name: "Lily Wilson", age: 33, course: "Rust" },
  { id: 14, name: "James White", age: 34, course: "PHP" },
  { id: 15, name: "Sarah Johnson", age: 35, course: "C++" },
];

// search all students
function fetchAllStudents() {
  return students;
}

// find student by id
function fetchStudentById(id) {
  return students.find((student) => student.id === id);
}

// find student name
function fetchStudentByName(name) {
  //   return students.find((student) => student.name === name);
  let result = students.filter((std) => std.name === name);
  if (result.length > 0) {
    return result[0];
  } else {
    return null;
  }
}

function fetchStudentsByCourse(course) {
  return students.find((student) => student.course === course);
}

function fetchStudentsByAge(age) {
  let result = students.filter((std) => std.age >= age);
  return result;
}
// find student by name and course
function fetchStudentByNameAndCourse(name, course) {
  if (typeof name === "string" && typeof course === "string") {
    let result = students.filter(
      (std) => std.name === name && std.course === course
    );
    return result;
  } else {
    return null;
  }
}

// delete student
function deleteStudentById(id) {
  let result = students.filter((std) => std.id !== id);
  return result;
  //   return students.filter((student) => student.id !== id);
}

// adding new student data
function addStudentDetails(studentList) {
  let newStudent = { id: students.length + 1, ...studentList };
  students.push(newStudent);
  return newStudent;
}

module.exports = {
  fetchAllStudents,
  fetchStudentById,
  fetchStudentByName,
  fetchStudentsByCourse,
  fetchStudentsByAge,
  fetchStudentByNameAndCourse,
  deleteStudentById,
  addStudentDetails,
};
