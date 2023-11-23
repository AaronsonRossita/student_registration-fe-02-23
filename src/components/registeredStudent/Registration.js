import React, { useState } from "react";
import "./Registration.css";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentList from "./RegisteredStudentList";

function Registration(props){

    const [filterCourse, setFilterCourse] = useState(1);

    const handleFilterChange = (chosenCourse) => {
        const courseToFilter = props.courses.find( (course) => {
            return course.name.toString() === chosenCourse.toString()
        })
        setFilterCourse(courseToFilter);
    }

    const filteredRegistereStudents = props.registeredStudents.filter( (student) => {
        return student.courseId === filterCourse.id
    })

    return(
        <div className="registrations card">
            <RegisteredStudentFilter courses={props.courses} onChangeFilter={handleFilterChange}/>
            <RegisteredStudentList course={filterCourse} registeredStudents={filteredRegistereStudents}/>
        </div>
    )
}

export default Registration;