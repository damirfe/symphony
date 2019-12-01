import { get } from "./request";
import { getreview } from "../constants/apiConstants";

export async function fetchReviews(baseUrl, { hotelId }) {
  const url = `${baseUrl}${getreview(hotelId)}`;
  const { body } = await get(url);
  return body;
}
