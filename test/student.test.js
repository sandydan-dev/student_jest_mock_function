const {
  fetchAllStudents,
  fetchStudentById,
  fetchStudentByName,
  fetchStudentsByCourse,
  fetchStudentsByAge,
  fetchStudentByNameAndCourse,
  deleteStudentById,
  addStudentDetails,
} = require("../controllers/student.controller");

// define mock function
jest.mock("../controllers/student.controller.js", () => ({
  ...jest.requireActual("../controllers/student.controller.js"),
  fetchAllStudents: jest.fn(),
  fetchStudentById: jest.fn(),
  fetchStudentByName: jest.fn(),
  fetchStudentsByCourse: jest.fn(),
  fetchStudentsByAge: jest.fn(),
  fetchStudentByNameAndCourse: jest.fn(),
  deleteStudentById: jest.fn(),
  addStudentDetails: jest.fn(),
}));

const { app } = require("../index");

// require http server to handle mock functions
const http = require("http");

// define server name variable to handle server
let server;

// define server port variable to handle server port
// it start the server before test
beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

// it close the server after all server test completed
afterAll((done) => {
  server.close(done);
});

// describe mock functions

describe("student functions", () => {
  // clear all mock function  before each test or reset all function
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // fetch all student details
  test("get all students data", () => {
    let mockStudent = [
      { id: 1, name: "Jackey Khanna", age: 17, course: "Python" },
      { id: 2, name: "Maya Patel", age: 19, course: "Angular" },
      { id: 3, name: "Sophia Kim", age: 18, course: "Django" },
    ];
    // if  mock function is called then it will return mock data
    fetchAllStudents.mockReturnValue(mockStudent);
    let result = fetchAllStudents();
    expect(result).toEqual(mockStudent); // it check if the return value matches the mock
    expect(fetchAllStudents).toHaveBeenCalled(); // this check if function was called
  });

  // fetch  student by id
  test("get student data by id", () => {
    let mockStudent = {
      id: 1,
      name: "Jackey Khanna",
      age: 17,
      course: "Python",
    };

    // if mock function is called then it will return mock data
    fetchStudentById.mockReturnValue(mockStudent);
    let result = fetchStudentById(mockStudent);
    expect(result).toEqual(mockStudent);
    expect(fetchStudentById).toHaveBeenCalledWith(mockStudent);
  });

  // fetch student by name
  test("get student by name", () => {
    let mockStudent = [
      { id: 1, name: "Jackey Khanna", age: 17, course: "Python" },
      { id: 2, name: "Maya Patel", age: 19, course: "Angular" },
    ];

    // mock function is called, then return it mock data by name
    fetchStudentByName.mockReturnValue(mockStudent);
    let result = fetchStudentByName("Maya Patel");
    expect(result).toEqual(mockStudent);
    expect(fetchStudentByName).toHaveBeenCalledWith("Maya Patel");
  });

  // fetch student by course name
  test("should be return student course name", () => {
    let mockStudent = [
      { id: 1, name: "Jackey Khanna", age: 17, course: "Python" },
      { id: 2, name: "Maya Patel", age: 19, course: "Angular" },
    ];
    fetchStudentsByCourse.mockReturnValue(mockStudent);
    let result = fetchStudentsByCourse("Python");
    expect(result).toEqual(mockStudent);
    expect(fetchStudentsByCourse).toHaveBeenCalledWith("Python");
  });

  // fetch student by age is greater than given specific value
  test("should be return student age greater than 18", () => {
    let mockStudent = [
      { id: 1, name: "Jackey Khanna", age: 17, course: "Python" },
      { id: 2, name: "Maya Patel", age: 19, course: "Angular" },
      { id: 3, name: "Sophia Kim", age: 18, course: "Django" },
    ];
    fetchStudentsByAge.mockReturnValue(mockStudent);
    let result = fetchStudentsByAge(18);
    expect(result).toEqual(mockStudent);
    expect(fetchStudentsByAge).toHaveBeenCalledWith(18);
  });

  // fetch student by name and course name
  test("should be return student name and course name", () => {
    let mockStudent = [
      { id: 1, name: "Jackey Khanna", age: 17, course: "Python" },
      { id: 2, name: "Maya Patel", age: 19, course: "Angular" },
      { id: 3, name: "Sophia Kim", age: 18, course: "Django" },
    ];

    fetchStudentByNameAndCourse.mockReturnValue(mockStudent);
    let result = fetchStudentByNameAndCourse("Jackey Khanna", "Python");
    expect(result).toEqual(mockStudent);
    expect(fetchStudentByNameAndCourse).toHaveBeenCalledWith(
      "Jackey Khanna",
      "Python"
    );
  });

  // delete student by id
  test("should be delete student by id", () => {
    let mockStudent = [
      { id: 1, name: "Jackey Khanna", age: 17, course: "Python" },
      { id: 2, name: "Maya Patel", age: 19, course: "Angular" },
    ];
    deleteStudentById.mockReturnValue(mockStudent);
    let result = deleteStudentById(1);
    expect(result).toEqual(mockStudent);
    expect(deleteStudentById).toHaveBeenCalledWith(1);
  });

  // add new student details
  test("should be add new student details", () => {
    let mockStudent = {
      id: 16,
      name: "Johny Johnson",
      age: 40,
      course: "Java and Springboot",
    };
    addStudentDetails.mockReturnValue(mockStudent);
    let result = addStudentDetails(mockStudent);
    expect(result).toEqual(mockStudent);
    expect(addStudentDetails).toHaveBeenCalledWith(mockStudent);
  });
});
