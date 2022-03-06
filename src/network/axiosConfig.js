import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    "Accept-language": "en",
    // "X-api-key": "jhghfygftydt",
  },
  params:{
    "api_key":"325eda172d12c2952710ea34d3148a06"
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);
    
    config.headers["Authorization"] = "jjujugygyfyfy";
    // config.params["api_key"] = "jjujugygvvhyfyfy";
  return config
},
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
