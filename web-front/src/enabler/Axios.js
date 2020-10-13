import axios from "axios";
import LoadingBarRx from "../reducer/Loading";
import { useDispatch } from 'react-redux'

const token = localStorage.getItem("NVL_TK");
//const dispatch = useDispatch()

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    console.log("sarting web request")
    //dispatch({ type: LoadingBarRx.EventShow })

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.baseURL = "https://localhost:44328/api"
    return config;
  },
  error => {
    Promise.reject(error)
});

//Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    console.log("request success   response")
    //dispatch({ type: LoadingBarRx.EventHide })
    return response
  },
  (error) => {
    console.log("request error response")
    //dispatch({ type: LoadingBarRx.EventHide })

    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === "https://localhost:44328/auth/token") {
      document.location.href = "https://localhost:44328/";
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post('/auth/token', {
        "token": token
      })
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          let responseToken = res.data.token
          localStorage.setItem("NVL_TK", responseToken);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + responseToken;
          return axios(originalRequest);
        }
      })
    }
  return Promise.reject(error);
});

export default axios;