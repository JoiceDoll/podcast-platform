import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});

export default api;
// api.interceptors.request.use(
//   (config: any) => {
//     config.headers.authorization! = `Bearer ${localStorage.getItem(
//       'authToken',
//     )}`;

//     return config;
//   },
//   (error) => Promise.reject(error),
// );
