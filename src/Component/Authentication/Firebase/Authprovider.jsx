import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "./firebase.config";
import useAxiospublic from "./../../../Hooks/useAxiospublic";

export const Authcontext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const axiospublic = useAxiospublic();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  console.log(user);

  const Crateanewuser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Signinsuer = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    return signOut(auth);
  };

  const GoogleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };

  const updateprofile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoding(false);
      if (currentuser) {
        const userinfo = {
          email: currentuser.email,
        };
        console.log(userinfo);
        axiospublic.post("/jwt", userinfo).then((res) => {
          console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    loding,
    Crateanewuser,
    Signinsuer,
    LogOut,
    GoogleLogin,
    updateprofile,
  };
  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
