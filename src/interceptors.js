import axios from "axios";

export default {
  setupInterceptors: history => {
    axios.interceptors.request.use(
      async config => {
        const token = sessionStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Token ${token}`;
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        if (401 === error.response.status) {
          history.push("/signin");
        }
        if (403 === error.response.status) {
          history.push("/signin");
        }
      }
    );
  }
};
