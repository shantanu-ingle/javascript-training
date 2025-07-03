import React from "react";
import ListOfCourses from "../listofcourses/courseList";
import FMessage from "../functional/message.functional";
import Counter from "../functional/counter";
import Posts from "../posts/posts";
// class App extends React.Component {
//   render() {
//     // return <ListOfCourses />;
//     return(
//       <div>
//         <FMessage msg = "Hello"/>
//         <FMessage msg = "Hola"/>

//       </div>
//     )
//   }
// }

import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import CourseDetails from "../course/CourseDetails";

function App() {
  return (
    // <div>
    //   {/* <FMessage msg = "Hello"/>
    //   <FMessage msg = "Hola"/>
    //   <Counter /> */}
    //   {/* <Posts/> */}
    //   <ListOfCourses/>
    // </div>
    <BrowserRouter>
    <Link to = "/" >Course</Link>|
    <Link to = "/posts">Posts</Link>|
    <Link to = "/counter">Counter</Link>
      <Routes>
        <Route path="/" Component={ListOfCourses} />
        <Route path="/posts" Component={Posts} />
        <Route path= "/counter" Component= {Counter}/>
        <Route path= "/course-details" Components= {CourseDetails}/>
        <Route path ="*" element={
          <img src ="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg"></img>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
