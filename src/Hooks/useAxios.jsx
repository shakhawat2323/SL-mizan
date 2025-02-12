import axios from "axios";

export const axiosSecore = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  return axiosSecore;
};

export default useAxios;
