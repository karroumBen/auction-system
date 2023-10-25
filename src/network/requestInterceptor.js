import axios from 'axios';

(() => {
  axios.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    if(accessToken) {
      config.headers.Authorization = ` bearer ${accessToken}`;
    }
  
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
})();