import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://dr-radfar.ir/API/",
});

apiRequest.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)


apiRequest.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error); 
    }
  );



export default apiRequest
