import React, { useState, useEffect } from "react";
import { fetchReviews } from "../../actions/reviewActions";
import { useDispatch } from "react-redux";
import { LOADED } from "../../constants/statusTypes";
import { filterReviews } from "../../utils/filterReviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isFavorite } from "../../utils/isFavorite";
import { postFavorite } from "../../actions/favoritesActions";
import { formatDate } from "../../utils/formatDate";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { formatImageUrl } from "../../utils/imgUrlFormater";
import { fetchFavorites } from "../../actions/favoritesActions";

const Hotel = ({ hotel, favorites, reviews }) => {
  const [comments, setComments] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      reviews.status === LOADED &&
      reviews.data.length > 0 &&
      hotel.id === reviews.hotelId
    ) {
      setComments(true);
    }
    return () => {
      setComments(false);
    };
  }, [hotel.id, reviews]);

  const addToFavorites = value => {
    dispatch(
      postFavorite({ data: { hotel_id: hotel.id, is_favorite: value } })
    );
    dispatch(fetchFavorites());
  };

  return (
    <div className="hotel-container">
      <div className="hotel-content">
        <div className="image-container">
          <img
            className="hotel-image"
            src={formatImageUrl(hotel.image)}
            alt="hotel"
          ></img>
        </div>
        <div className="hotel-description">
          <div>
            <div onClick={() => {}}>
              <Link
                target="_blank"
                to={`/details/${hotel.id}`}
                onClick={() => {}}
              >
                <h4>{hotel.name}</h4>
              </Link>
            </div>

            <p>
              {hotel.city} - {hotel.country}
            </p>
          </div>
          <div className="hotel-favorite">
            {isFavorite(hotel.id, favorites) ? (
              <button onClick={() => addToFavorites(false)}>
                <FontAwesomeIcon
                  style={{ color: "red" }}
                  icon={["fas", "heart"]}
                />
              </button>
            ) : (
              <button onClick={() => addToFavorites(true)}>
                <FontAwesomeIcon
                  style={{ color: "grey" }}
                  icon={["fas", "heart"]}
                />
              </button>
            )}
          </div>
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={hotel.stars}
            editing={false}
          />
          <div>{hotel.description}</div>
          <div style={{ fontSize: 25 }}>{hotel.price} €</div>
          <div>
            <div>({formatDate(hotel.date)})</div>
            {comments ? (
              <button onClick={() => setComments(false)}>Close reviews</button>
            ) : (
              <button
                onClick={() => {
                  dispatch(fetchReviews({ hotelId: hotel.id }));
                }}
              >
                Show reviews
              </button>
            )}
          </div>
        </div>
      </div>
      {reviews.status === LOADED && comments
        ? filterReviews(reviews, hotel.id)
        : null}
    </div>
  );
};

export default Hotel;
