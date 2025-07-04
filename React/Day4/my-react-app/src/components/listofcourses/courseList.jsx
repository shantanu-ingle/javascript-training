import React from "react";
import Course from "../course/course";
import axios from "axios"
import { useEffect,useState } from "react";
const ListOfCourses = (props) => {
  const [courses, setCourses]= useState([])

  useEffect(()=>{
    axios.get("http://localhost:3500/courses")
    .then(res => setCourses(res.data))
    
  },[]);
  return (
    <div className="row">
      {courses.map(course => (
        <Course coursedetails={course} key={course.id} />
      ))}
    </div>
  );
};

export default ListOfCourses;
