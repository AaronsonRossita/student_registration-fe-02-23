import React from "react";
import "./RegisteredStudentList.css"
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList(props){

    console.log(props.course.startDate)

    return(
        <ul className="registrations-list">
            {props.registeredStudents.map( (student) => {
                return(
                    <li><RegisteredStudent student={student} course={props.course}/></li>
                )
            })}
        </ul>
    )
}

export default RegisteredStudentList;