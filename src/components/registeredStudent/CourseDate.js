import React from "react";
import "./CourseDate.css";

function CourseDate(props){

    return(
        <div className="registration-date">
            {props.date.replaceAll("-"," / ")}
        </div>
    )
}

export default CourseDate