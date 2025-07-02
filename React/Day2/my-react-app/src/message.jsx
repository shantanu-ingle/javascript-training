//create a mesage component that displays Hello in h1 tag

import './App.css'
import React from "react"

class Message extends React.Component{
  render(){
   
    return (
      <div>
        <h1>{this.props.msgDetails.msg} </h1>
        <p>From : {this.props.msgDetails.from}</p>
        <p>To : {this.props.msgDetails.to}</p>
      </div>
    );
  }
}

export default Message;