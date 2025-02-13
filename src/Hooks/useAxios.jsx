import axios from "axios";

const axiosSecore = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  return axiosSecore;
};

export default useAxios;
