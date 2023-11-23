import React, { useState } from "react";
import "./NewStudent.css"
import StudentForm from "./StudentForm";

function NewStudent(props){

    const [isEditing, setIsEditing] = useState(false);

    const handleNewStudentView = () => {
        setIsEditing(!isEditing);
    }

    return(
        <div className="new-registration">
            {isEditing ? 
                <StudentForm 
                    courses={props.courses} 
                    cancel={handleNewStudentView} 
                    register={props.register}
                /> : 
                <button onClick={handleNewStudentView}>Register Student</button>}
        </div>
    )
}

export default NewStudent;