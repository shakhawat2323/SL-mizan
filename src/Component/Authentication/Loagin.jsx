import { NavLink } from "react-router-dom";

const Loagin = () => {
  const Loginformdata = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
  };
  return (
    <div className="">
      <div className="hero w-11/12 mx-auto min-h-screen">
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
            <form onSubmit={Loginformdata} className="card-body">
              <div className="form-control">
                <label className="fieldset-label text-xl font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label text-xl font-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <div>
                  <a className="link link-hover text-xl font-bold">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="form-control text-center mt-6">
                <button className="btn btn-neutral px-30  mt-4 ">Login</button>
              </div>
            </form>
            <div className="text-center mb-5">
              <span>
                Don't have an account?{" "}
                <NavLink className="text-blue-500 font-bold" to="/signup">
                  Sign Up
                </NavLink>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loagin;
