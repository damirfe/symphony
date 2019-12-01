import { post } from "./request";
import { signup, signin } from "../constants/apiConstants";

export async function signUp(baseUrl, { data }) {
  const url = `${baseUrl}${signup}/`;
  const { body } = await post(url, data);
  return body;
}

export async function signIn(baseUrl, { data }) {
  const url = `${baseUrl}${signin}`;
  const { body } = await post(url, data);
  sessionStorage.setItem("token", body.token);
  return body;
}
