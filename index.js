const express = require("express");
const app = express();
const port = 3000;

// controllers
const {
  fetchAllStudents,
  fetchStudentById,
  fetchStudentByName,
  fetchStudentsByCourse,
  fetchStudentsByAge,
  fetchStudentByNameAndCourse,
  deleteStudentById,
  addStudentDetails,
} = require("./controllers/student.controller");

// module.exports
app.use(express.json());

// search all students
// endpoint : http://localhost:3000/s1/students
app.get("/s1/students", (_, res) => {
  let response = fetchAllStudents();
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// search student by id
// endpoint : http://localhost:3000/s1/students/1
app.get("/s1/students/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let response = fetchStudentById(id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "id not found" });
  }
});

// endpoint : http://localhost:3000/s1/students/name/Teena Patel
app.get("/s1/students/name/:name", (req, res) => {
  let name = req.params.name;
  let response = fetchStudentByName(name);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "student name not found" });
  }
});

// endpoint : http://localhost:3000/s1/students/course/Python
app.get("/s1/students/course/:course", (req, res) => {
  let course = req.params.course;
  let response = fetchStudentsByCourse(course);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "course not found" });
  }
});

// endpoint : http://localhost:3000/s1/students/age/20
app.get("/s1/students/age/:age", (req, res) => {
  let age = parseInt(req.params.age);
  let response = fetchStudentsByAge(age);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "age not found" });
  }
});

// endpoint : http://localhost:3000/s1/students/name_course?name=Lily Wilson&course=Rust
app.get("/s1/students/name_course", (req, res) => {
  let name = req.query.name;
  let course = req.query.course;
  let response = fetchStudentByNameAndCourse(name, course);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "not found name and course" });
  }
});

// endpoint : http://localhost:3000/s1/students/delete/1
app.post("/s1/students/delete/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let response = deleteStudentById(id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "student not found" });
  }
});

// endpoint : http://localhost:3000/s1/students/new
// sample data : {"id":16,"name":"Johny Johnson","age":40,"course":"Java and Springboot"} , put it on body
app.post("/s1/students/new", (req, res) => {
  let newStudent = req.body;
  let response = addStudentDetails(newStudent);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "student not added" });
  }
});

module.exports = { app, port };
