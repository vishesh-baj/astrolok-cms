import Banner from "../../assets/banner.svg";
import AstrolokIcon from "../../assets/astrolokLogo.png";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "../../validations";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgetPasswordSchema()) });
  const onSubmit = (data) => console.log("LOGIN DATA: ", data);

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
      <aside className="flex flex-col justify-center gap-4  w-[40%]  h-screen px-16">
        <div className="px-4">
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="font-semibold">Forgot your password?</h3>
            <h4 className="text-gray-400 text-xs">
              Please add email address associated with your account and we will
              email you a link to reset your password
            </h4>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* username input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email Address</span>
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <p className="text-rose-600">{errors.email?.message}</p>
          </div>

          <div>
            <button className="btn btn-primary mt-4 w-full bg-blue-600 border-none hover:bg-blue-300 hover:text-white">
              Forgot Password
            </button>
            <Link
              to={PATHS.login}
              className="btn btn-primary mt-4 w-full bg-blue-200 border-none text-blue-400 hover:bg-blue-300 hover:text-white"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default ForgotPassword;
