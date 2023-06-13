import Banner from "../../assets/banner.svg";
import AstrolokIcon from "../../assets/astrolokLogo.png";
import GoogleIcon from "../../assets/googleIcon.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../validations";
import { API_WRAPPER } from "../../api";

// signup page specific to user
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema()) });

  const onSubmit = async (data) => {
    if (data["confirmPassword"]) {
      try {
        const response = await API_WRAPPER.post("/api/register", {
          name: data?.name,
          email: data?.email,
          mobile: data?.number,
          password: data?.password,
          role: "user",
        });
        console.log("REGISTER RESPONSE: ", response);
      } catch (error) {
        console.log(error);
      }
    }
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
      <aside className="flex flex-col justify-center gap-4  w-[40%]  h-screen px-16 ">
        <div className="px-4">
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="font-bold">Welcome to Asttrolok</h3>
            <h4 className="text-gray-400 text-xs">Your Admin Dashboard</h4>
          </div>
          {/* login buttons */}
          <div className="flex justify-between gap-2">
            <button className="btn lowercase text-[9px]  w-1/2 cursor-pointer font-light">
              <img src={GoogleIcon} alt="google icon" />
              Signin with Google
            </button>
            <button className="btn lowercase text-[9px] w-1/2 cursor-pointer font-light">
              <img src={FacebookIcon} alt="google icon" />
              Signin with FB
            </button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400">
          _____or signup with_____
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* username input */}
          <div>
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              {...register("name")}
              name="name"
              type="text"
              className="input input-bordered input-md w-full"
            />
            <p className="text-rose-600">{errors.name?.message}</p>
          </div>
          {/* user email */}
          <div>
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              {...register("email")}
              name="email"
              type="email"
              className="input input-bordered input-md w-full"
            />
            <p className="text-rose-600">{errors.email?.message}</p>
          </div>

          {/* user number */}
          <div>
            <label htmlFor="number" className="label">
              <span className="label-text font-bold">Phone</span>
            </label>
            <input
              {...register("number")}
              name="number"
              className="input input-bordered input-md w-full"
              type="tel"
              pattern="[0-9]*"
            />
            <p className="text-rose-600">{errors.number?.message}</p>
          </div>
          {/* user password */}
          <div>
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              {...register("password")}
              name="password"
              type="password"
              className="input input-bordered input-md w-full"
            />
            <p className="text-rose-600">{errors.password?.message}</p>
          </div>
          {/* user confirm password */}
          <div>
            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              {...register("confirmPassword")}
              name="confirmPassword"
              type="password"
              className="input input-bordered input-md w-full"
            />
            <p className="text-rose-600">{errors.confirmPassword?.message}</p>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4 w-full bg-blue-600 border-none hover:bg-blue-300 hover:text-white"
          >
            Signup
          </button>
        </form>
        <div className="w-full text-center">
          Already have an Account?{" "}
          <Link to={PATHS.login} className="text-blue-600">
            Signup
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SignupPage;
