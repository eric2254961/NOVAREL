import axios from "axios";

const token = localStorage.getItem("NVL_TK");

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error)
});

//Add a response interceptor
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url === "https://localhost:44328/auth/token") {
    document.location.href = "https://localhost:44328/";
    return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) { 
    originalRequest._retry = true;
    const refreshToken = token;
    return axios.post('/auth/token', {
      "token": refreshToken
    })
    .then(res => {
      if (res.status === 201) {
        let responseToken = res.data
        localStorage.setItem("NVL_TK", responseToken);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + responseToken;
        return axios(originalRequest);
      }
    })
  }
  return Promise.reject(error);
});

export default axios;