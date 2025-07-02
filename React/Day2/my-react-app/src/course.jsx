import './App.css'
import React from "react"

class Course extends React.Component{
  render(){
   
    return (
      <div>
        <h1>Title:{this.props.course.title} </h1>
        <p>Rating : {this.props.course.rating}</p>
        <p>Price : {this.props.course.price}</p>
      </div>
    );
  }
}

export default Course;