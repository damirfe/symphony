import axios from "axios";

export async function get(url, data = {}, headers = {}) {
  const response = await axios.get(url, { headers });
  return { body: response.data };
}

export async function put(url, data = {}, headers = {}) {
  const response = await axios.put(url, data, { headers });
  return { body: response.data };
}

export async function post(url, data = {}, headers = {}) {
  const response = await axios.post(url, data, { headers });
  return { body: response.data };
}

export async function del(url, data = {}, headers = {}) {
  const response = await axios.delete(url, { params: data, headers });
  return { body: response.data };
}

export function makeApiCall(
  _apiCall,
  startActionType,
  successActionType,
  errorActionType
) {
  return function(params) {
    return async dispatch => {
      const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;

      startActionType && dispatch({ ...params, type: startActionType });
      try {
        const data = await _apiCall(apiBaseUrl, {
          ...params
        });
        successActionType &&
          dispatch({ ...params, data, type: successActionType });
        return data;
      } catch (error) {
        errorActionType &&
          dispatch({ ...params, error, type: errorActionType });
      }
    };
  };
}
