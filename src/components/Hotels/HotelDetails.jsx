import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelDetails } from "../../actions/hotelActions";
import Hotel from "./Hotel";
import { LOADED, LOADING } from "../../constants/statusTypes";
import { ERROR } from "jest-validate/build/utils";

const HotelDetails = ({ match }) => {
  const dispatch = useDispatch();
  const hotelDetails = useSelector(state => state.hotelReducer.hotelDetails);
  const { reviews } = useSelector(state => state.reviewReducer);
  const { favorites } = useSelector(state => state.favoritesReducer);

  useEffect(() => {
    dispatch(fetchHotelDetails({ hotelId: match.params.id }));
  }, [dispatch, match.params.id]);

  return (
    <div className="wrapper">
      <h1>Hotel Details</h1>

      {hotelDetails.status === LOADED ? (
        <Hotel
          hotel={hotelDetails.data}
          key={hotelDetails.id}
          reviews={reviews}
          favorites={favorites}
        />
      ) : hotelDetails.status === LOADING ? (
        <div>Loading....</div>
      ) : hotelDetails.status === ERROR ? (
        <div>There was an error loading Hotels</div>
      ) : null}
    </div>
  );
};

export default HotelDetails;
