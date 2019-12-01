import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
  return (
    <div className="review-container">
      <div className="review-icon">
        <FontAwesomeIcon icon={["fas", "user"]} size="2x" />
      </div>
      <div className="review-body">
        <div className="review-header">
          <h4>Name: {review.author.first_name}</h4>
          {review.positive ? (
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={["fas", "thumbs-up"]}
              size="2x"
            />
          ) : (
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={["fas", "thumbs-down"]}
              size="2x"
            />
          )}
        </div>
        <p>{review.message}</p>
      </div>
    </div>
  );
};

export default Review;
