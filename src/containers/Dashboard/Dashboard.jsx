import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOADED, ERROR, LOADING } from "../../constants/statusTypes";
import Hotel from "../../components/Hotels/Hotel";
import { fetchHotels } from "../../actions/hotelActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { hotels } = useSelector(state => state.hotelReducer);
  const { favorites } = useSelector(state => state.favoritesReducer);
  const { reviews } = useSelector(state => state.reviewReducer);

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          dispatch(fetchHotels());
        }}
      >
        Load hotels
      </button>
      {hotels.status === LOADED ? (
        <div>
          {hotels.data.map(hotel => {
            return (
              <Hotel
                hotel={hotel}
                key={hotel.id}
                favorites={favorites}
                reviews={reviews}
              />
            );
          })}
        </div>
      ) : hotels.status === LOADING ? (
        <div>Loading....</div>
      ) : hotels.status === ERROR ? (
        <div>There was an error loading Hotels</div>
      ) : null}
    </div>
  );
};

export default Dashboard;
