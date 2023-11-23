
import { useEffect, useState } from 'react';
import './App.css';
import { getAllCourses, getAllStudents, registerStudent } from './services/api';
import NewStudent from './components/newStudent/NewStudent';
import { normalizeCourseName } from './components/utils/courseUtils';
import Registration from './components/registeredStudent/Registration';

function App() {

  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllCourses()
      .then( (res) => {
        const courses = res.data.map( (course) => {
          const courseName = normalizeCourseName(course.name);
          return ({...course, displayName: courseName})
        })
        setCourses(courses);
      })
      .catch( (err) => console.log(err.message))
    getAllStudents()
      .then( (res) => {
        const students = res.data.map( (student) => {
          const studentName = student.firstName + " " + student.lastName;
          return( {...student, name: studentName})
        })
        setStudents(students);
      })
      .catch( (err) => console.log(err.message))
  },[])

  const handleStudentRegistration = (student) => {
    console.log(student)
    registerStudent(student)
      .then( (res) => console.log("student was created with id:" + res.data))
      .catch( (err) => console.log(err.message))
    setStudents( (prevStudents) => {
      return([...prevStudents, student])
    })
  }

  return (
    <div className="App">
      <NewStudent courses={courses} register={handleStudentRegistration}/>
      <Registration courses={courses} registeredStudents={students}/>
    </div>
  );
}

export default App;
