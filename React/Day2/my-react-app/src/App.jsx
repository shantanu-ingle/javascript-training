import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"
import Message from "./message"
import CourseList from './courseList'
class App extends React.Component{
  render(){
  //    var messageOne = { msg :"Hello", from : "Peter", to:"Parker"};
  //    var messageTwo = { msg : "Hey" ,from : "Tony" ,to : "Stark"};
  //    var messageThree = {msg : "Hi" ,from : "Steve" ,to : "Rogers"};
// var messages = [
//   { msg :"Hello", from : "Peter", to:"Parker"},
//  { msg : "Hey" ,from : "Tony" ,to : "Stark"},
//    {msg : "Hi" ,from : "Steve" ,to : "Rogers"}
//   ];
    return (<div>
      {/* <Message msgDetails= {messageOne}/>
<Message msgDetails= {messageTwo}/>
<Message msgDetails= {messageThree}/> */}
      {/* <Message msg = "Hey" from = "Tony" to = "Stark"/>
      <Message msg = "Hi" from = "Steve" to = "Rogers"/> */}
{/* 
      {messages.map(m=>(
        <Message msgDetails={m}/>
      ))} */}
      <CourseList/>
    </div>);
  }
}

export default App;