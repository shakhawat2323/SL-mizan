import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import Signup from "../../../public/img/SignupLogo.png";
import { toast } from "react-toastify";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import useAxiospublic from "../../Hooks/useAxiospublic";

const SignUP = () => {
  const axiospublic = useAxiospublic();
  const Naviget = useNavigate();
  const { Crateanewuser, GoogleLogin, LogOut, updateprofile } = useAuth();
  const Capchardata = useRef(null);
  const [disabled, setDisbale] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const Signpuform = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.fullname.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    const Capchar = form.Capchar.value;
    const User = { name, photo, email, password, cpassword, Capchar };
    console.log(User);
    Crateanewuser(email, password).then((result) => {
      toast("successfully Sign up", {
        position: "top-center",
        autoClose: 1000,
      });
      updateprofile(name, photo).then((result) => {
        const userinfo = {
          name: name,
          photo: photo,
          email: email,
          password: password,
        };
        axiospublic.post("/user", userinfo).then((result) => {
          console.log(result.data);
          toast("successfully Profile update", {
            position: "top-center",
            autoClose: 1000,
          });
        });

        toast("successfully Profile update", {
          position: "top-center",
          autoClose: 1000,
        });
        form.reset();
      });
      console.log(result.user);
      Naviget("/login");
      form.reset();
      LogOut();
    });
  };

  const GoogleLogins = () => {
    GoogleLogin().then((result) => {
      const userinfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
      };
      axiospublic.post("/user", userinfo).then((result) => {
        toast("successfully Data Add", {
          position: "top-center",
          autoClose: 1000,
        });
      });

      console.log(result.data);
      Naviget("/");
    });
  };

  const Capcharverifyhandal = () => {
    const Userdataverify = Capchardata.current.value;
    if (validateCaptcha(Userdataverify)) {
      setDisbale(false);
    } else {
      setDisbale(true);
    }
  };
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center py-2 mt-5">Sign Up now!</h1>
      <div className="hero md:flex min-h-screen">
        <div className="hero-content ">
          <div className="text-center lg:text-left">
            <img src={Signup} alt="" />
          </div>
          <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={Signpuform} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="cpassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
                <label className="label mt-3 mb-3">
                  <LoadCanvasTemplate />
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    ref={Capchardata}
                    placeholder="Capchar"
                    name="Capchar"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={Capcharverifyhandal}
                    type="button"
                    className="btn btn-soft hover:bg-black hover:text-white"
                  >
                    Verify
                  </button>
                </div>
              </div>
              <div className="form-control mt-3 text-center">
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="border w-11/12 mx-auto border-[#E7E7E8] mb-1"></div>

            <div className="text-center mb-5 flex flex-col">
              <button
                onClick={GoogleLogins}
                className="btn bg-white w-11/12 mx-auto hover:bg-blue-600 hover:text-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <span className="text-center mt-2 ">
                Already have an account?{" "}
                <NavLink to="/login" className="text-blue-500 font-bold ">
                  Sign In
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
