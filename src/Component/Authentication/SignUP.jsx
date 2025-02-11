import React, { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const SignUP = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const Signpuform = (e) => {
    e.preventDefault();
    const form = e.terget;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    const Capchar = form.Capchar.value;
    const User = { name, photo, email, password, cpassword, Capchar };
    console.log(User);
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="hero  min-h-screen">
        <div className="hero-content ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={Signpuform} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
                <input
                  type="text"
                  placeholder="Capchar"
                  name="Capchar"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6 text-center">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
