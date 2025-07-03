import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Course = (props) => {
  const [currLikes, setCurrLikes] = useState(props.coursedetails.likes);
  const navigate = useNavigate();

  const incrementLikes = (e) => {
    e.stopPropagation(); // Prevent card click
    setCurrLikes(currLikes + 1);
  };

  const handleCardClick = () => {
    navigate("/course-details", { state: { course: props.coursedetails } });
  };

  let ratings = [];
  for (let index = 0; index < props.coursedetails.rating; index++) {
    ratings.push(
      <i
        className="fa-solid fa-star"
        key={index}
        style={{ color: "orange" }}
      ></i>
    );
  }

  return (
    <div className="col-md-3 my-1">
      <div className="card" style={{ cursor: "pointer" }} >
        <Link to ="/course-details">
        <img
          src={props.coursedetails.imageUrl}
          className="card-img-top"
          alt={props.coursedetails.title}
          height="175px"
        />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <p className="card-text">{ratings}</p>
          <p className="card-text">₹.{props.coursedetails.price}</p>
          <button
            className="btn btn-primary"
            onClick={incrementLikes}
          >
            {currLikes} <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
