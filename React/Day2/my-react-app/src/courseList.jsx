import './App.css'
import React from "react"
import Course from './course';
class CourseList extends React.Component{
  render(){
   var courses= [
    {title:"DBMS", rating: 8, price: 200},
    {title:"CN", rating: 7, price: 100},
    {title:"OS", rating: 8, price: 300},

   ]
    return (
      <div><h1>List of courses</h1>
        {courses.map(c=>(
        <Course course={c}/>
      ))}
      </div>
    );
  }
}

export default CourseList;