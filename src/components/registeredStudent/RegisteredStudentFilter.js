import React from "react";
import './RegisteredStudentFilter.css';

function RegisteredStudentFilter(props){

    const handleDropDownFilter = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <div className="registrations-filter">
            <div className="registrations-filter__control">
                <label>Filter by Course Name</label>
                <select onChange={handleDropDownFilter}>
                    {props.courses.map( (course,index) => {
                        return(
                            <option value={course.name} key={course.id}>{course.displayName}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default RegisteredStudentFilter;