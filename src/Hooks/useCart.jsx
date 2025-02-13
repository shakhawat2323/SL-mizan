import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const axiosSecore = useAxios();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    // querykey: ["cart", user?.email],
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecore.get(`/cards?email=${user.email}`);

      return res.data;
    },
  });
  return [cart, refetch];
};
export default useCart;
