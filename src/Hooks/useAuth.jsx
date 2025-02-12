import { useContext } from "react";
import { Authcontext } from "../Component/Authentication/Firebase/Authprovider";

const useAuth = () => {
  const AuthContext = useContext(Authcontext);
  return AuthContext;
};

export default useAuth;
