import { gethotels, gethoteldetails } from "../constants/apiConstants";
import { get } from "./request";

export async function fetchHotels(baseUrl) {
  const url = `${baseUrl}${gethotels}`;
  const { body } = await get(url);
  return body;
}

export async function fetchHotelDetails(baseUrl, { hotelId }) {
  const url = `${baseUrl}${gethoteldetails(hotelId)}`;
  const { body } = await get(url);
  return body;
}
