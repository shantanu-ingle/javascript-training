import React from "react";
import { useLocation } from "react-router-dom";

const CourseDetails = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) {
    return <div>No course details found.</div>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{course.title}</h1>
      <img src={course.imageUrl} alt={course.title} style={{ maxWidth: 400 }} />
      <h3>Price: ₹{course.price}</h3>
      <h3>Likes: {course.likes}</h3>
      <h3>Rating: {course.rating}</h3>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
