import axios from "axios";

const token = localStorage.getItem("NVL_TK");

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    console.log("sarting web request")
    document.querySelector('.MuiLinearProgress-root').style.display = "block"

    console.log("Configuration Axios",config)
    
    if(config.method === "post"){      
      let userRaw = localStorage.getItem("user")
      let user = JSON.parse(userRaw);
      config.data = {...config.data, UtilisateurId: user.Id}
    }

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.baseURL = "https://localhost:44328/api"
    //config.baseURL = "https://localhost:5001/api";
    return config;
  },
  error => {
    Promise.reject(error)
});

//Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    document.querySelector('.MuiLinearProgress-root').style.display = "none"
    console.log("request success   response")
    return response
  },
  (error) => {
    document.querySelector('.MuiLinearProgress-root').style.display = "none"
    console.log("request error response")

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