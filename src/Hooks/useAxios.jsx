import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecore = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  const { LogOut } = useAuth();
  const navigate = useNavigate();
  axiosSecore.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");

      const datass = (config.headers.authorization = `Beares ${token}`);
      console.log(datass);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecore.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;

      console.log("status error in the interceptor", status);
      if (status === 401 || status === 403) {
        await LogOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecore;
};

export default useAxios;
