import { getfavorites, postfavorites } from "../constants/apiConstants";
import { post, get } from "./request";

export async function fetchFavorites(baseUrl) {
  const url = `${baseUrl}${getfavorites}`;
  const { body } = await get(url);
  return body;
}

export async function postFavorites(baseUrl, { data }) {
  const url = `${baseUrl}${postfavorites}`;
  const { body } = await post(url, data);
  return body;
}
