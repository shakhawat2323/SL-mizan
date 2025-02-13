import axios from "axios";

const axiospublic = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiospublic = () => {
  return axiospublic;
};

export default useAxiospublic;
