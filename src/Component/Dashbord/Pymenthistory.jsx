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
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Price</th>
                <th>Trangaction ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((pyments, index) => (
                <tr key={pyments._id}>
                  <th>{index + 1}</th>
                  <td>$ {pyments.price}</td>
                  <td>{pyments.transactionId}</td>

                  <td>{pyments.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pymenthistory;
