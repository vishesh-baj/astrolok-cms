import Banner from "../../assets/banner.svg";
import AstrolokIcon from "../../assets/astrolokLogo.png";
import GoogleIcon from "../../assets/googleIcon.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations";
import { API_WRAPPER } from "../../api";

// login page
const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema()) });

  const onSubmit = async (data) => {
    console.log("LOGIN DATA: ", data);
    const res = await API_WRAPPER.post("/api/login", { ...data, role: "user" });
    console.log("RESPONSE: ", res.data);
    if (res?.data) {
      localStorage.setItem("user", JSON.stringify({ role: "USER" }));
    }
    navigate(PATHS.userDashboard);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="flex absolute -top-16 left-5 justify-center items-center p-4 mt-16">
        <div className="w-28 h-16">
          <img className="image-full" src={AstrolokIcon} alt="astrolok logo" />
        </div>
      </div>
      {/* left  */}
      <aside className="hidden md:flex w-3/4 h-screen bg-gray-50 justify-center items-center">
        <img className="w-1/2 " src={Banner} alt="asatrolok banner" />
      </aside>

      {/* right */}
      <aside className="flex flex-col justify-center gap-4 w-screen  md:w-[40%]  h-screen px-8 md:px-16">
        <div className="px-4">
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="font-bold">Welcome to Asttrolok</h3>
            <h4 className="text-gray-400 text-xs">Your Admin Dashboard</h4>
          </div>
          {/* login buttons */}
          <div className="flex justify-between gap-4">
            <button className="btn lowercase flex text-[10px] font-light w-1/2">
              <img src={GoogleIcon} alt="google icon" />
              Signin with Google
            </button>
            <button className="btn lowercase text-[10px] font-light w-1/2">
              <img src={FacebookIcon} alt="google icon" />
              Signin with FB
            </button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400">
          _____or sign in with_____
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* username input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Username</span>
            </label>
            <input
              {...register("userName")}
              name="userName"
              type="text"
              className="input input-bordered border-2 w-full"
            />
            <p className="text-rose-600">{errors.userName?.message}</p>
          </div>
          {/* password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              className="input input-bordered border-2 w-full"
            />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex justify-between gap-2 ">
              <p className="text-rose-600">{errors.password?.message}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-4">
              <input
                name="password"
                className="checkbox checkbox-info checkbox-sm bg-white"
                type="checkbox"
              />
              <span className="text-[14px]">Remember this device</span>
            </div>
            <Link
              to={PATHS.forgetPassword}
              className="text-[14px]  text-blue-600 cursor-pointer"
            >
              Forget Password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4 w-full bg-blue-600 border-none hover:bg-blue-300 hover:text-white"
          >
            Login
          </button>
        </form>
        <div className="w-full text-center">
          new to Astrolok?{" "}
          <Link to={PATHS.signupPage} className="text-blue-600">
            create an account
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default LoginPage;
