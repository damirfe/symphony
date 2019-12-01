export const formatImageUrl = img => {
  return img.startsWith("/")
    ? `${process.env.REACT_APP_API_URL}${img.substring(1)}`
    : img;
};
