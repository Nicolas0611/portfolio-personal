import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();
const portfolioApi = axios.create({
  baseURL: VITE_API_URL,
});

console.log(VITE_API_URL);
//tODO CONFIGURAR INTERCEPTORES
portfolioApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };
  return config;
});
export default portfolioApi;
