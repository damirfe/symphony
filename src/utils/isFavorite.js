export const isFavorite = (hotelId, favorites) => {
  return (
    favorites &&
    favorites.data &&
    favorites.data.some(fav => fav.id === hotelId)
  );
};
