import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const Pymenthistory = () => {
  const { user } = useAuth();
  const axiosSecore = useAxios();
  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user.email],
    queryFn: async () => {
      const res = await axiosSecore.get(`/payment/${user.email}`);

      return res.data;
    },
  });
  console.log(payment);

  return (
    <div>
      <h1>
        this is a <div>{payment.length}</div>{" "}
      </h1>
    </div>
  );
};

export default Pymenthistory;
