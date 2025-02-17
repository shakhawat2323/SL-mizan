import axios from "axios";

const axiospublic = axios.create({
  baseURL: "https://server-mocha-eight-19.vercel.app",
});
const useAxiospublic = () => {
  return axiospublic;
};

export default useAxiospublic;
