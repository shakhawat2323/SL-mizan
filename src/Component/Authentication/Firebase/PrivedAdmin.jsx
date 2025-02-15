import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../Dashbord/useAdmin";

const PrivedAdmin = ({ children }) => {
  const { user, loding } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();
  if (loding || isAdminLoading) {
    return (
      <div className="text-center mt-32 text-5xl">
        <span className="loading loading-spinner text-error"></span>;
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivedAdmin;
