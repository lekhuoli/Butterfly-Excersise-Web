import React, { useEffect } from "react";
import StarRatings from "react-star-ratings";

function Rating() {
  const [rating, setRating] = React.useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = "#2ce6ce";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });
  const changeRating = (newRating, name) => {
    setRating(newRating);
  };
  return (
    <div className="question-wrapper">
      <span className="dialog-arrow"></span>
      <div className="question-container">
        <div className="question-content">
          <h4 className="text-blue">Question</h4>
          <h3 className="question-options">
            My direct manager gives me necessary support and clear objectives.
          </h3>
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={changeRating}
            numberOfStars={10}
            name="rating"
          />
          <div className="option-help-text">
            <p>Disagree</p>
            <p>Agree</p>
          </div>
          <div className="form">
            <label htmlFor="comments">Comments: </label>
            <br />
            <textarea className="form-control" name="comment" />
          </div>
          <div className="form-group question-comment">
            <button className="btn-submit ">Add Comments</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
