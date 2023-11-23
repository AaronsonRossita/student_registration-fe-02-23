
import { useEffect, useState } from 'react';
import './App.css';
import { getAllCourses, getAllStudents } from './services/api';

function App() {

  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllCourses()
      .then( (res) => console.log(res.data))
      .catch( (err) => console.log(err.message))
    getAllStudents()
      .then( (res) => console.log(res.data))
      .catch( (err) => console.log(err.message))
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
