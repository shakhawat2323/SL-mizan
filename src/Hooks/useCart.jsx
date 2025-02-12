import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const axiosSecore = useAxios();

  const { data: cart = [] } = useQuery({
    querykey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecore.get("/cards");
      return res.data;
    },
  });
  return [cart];
};
export default useCart;
