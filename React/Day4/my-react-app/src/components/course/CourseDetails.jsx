import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../../db/courses.json";
import Rating from "../Rating/rating";
const CourseDetails = () => {
  const { id } = useParams(); //should be same as given in App.jsx while defining the

  const course = coursesData.courses.find((c) => String(c.id) === String(id));

  return (
    <div className="card" style={{ padding: 40 }}>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1>{course.title}</h1>
            <img
              src={course.imageUrl}
              alt={course.title}
              style={{ maxWidth: 400 }}
            />
          </div>
        
        
          <div class="col">
            <h5>Price: ₹{course.price}</h5>
            <h5>Likes: {course.likes}</h5>
            {/* <p className="card-text">{ratings}</p> */}
            <Rating coursedetails={course}  />
            <p>{course.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
