import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOADED, LOADING } from "../../constants/statusTypes";
import { fetchFavorites } from "../../actions/favoritesActions";
import Hotel from "../../components/Hotels/Hotel";
import { ERROR } from "jest-validate/build/utils";

const Favorites = () => {
  const favorites = useSelector(state => state.favoritesReducer.favorites);
  const { reviews } = useSelector(state => state.reviewReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites.status !== LOADED) {
      dispatch(fetchFavorites());
    }
  }, [favorites.status, dispatch]);

  return (
    <div className="wrapper">
      {favorites.status === LOADED ? (
        <div>
          {favorites.data.map(hotel => {
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
      ) : favorites.status === LOADING ? (
        <div>Loading....</div>
      ) : favorites.status === ERROR ? (
        <div>There was an error loading Hotels</div>
      ) : null}
    </div>
  );
};

export default Favorites;
