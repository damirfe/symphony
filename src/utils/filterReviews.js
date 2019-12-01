import React from "react";
import Review from "../components/Reviews/Review";

export const filterReviews = (reviews, hotelId) => {
  if (hotelId === reviews.hotelId) {
    return (
      <div className="hotel-reviews">
        {reviews.data.map(review => {
          return <Review review={review} key={review.id} />;
        })}
      </div>
    );
  }

  return true;
};
