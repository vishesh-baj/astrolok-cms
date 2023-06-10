import Banner from "../../assets/banner.svg";
import AstrolokIcon from "../../assets/astrolokLogo.png";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";

const ForgotPassword = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* left  */}
      <aside className="hidden md:flex w-3/4 h-screen bg-gray-50 justify-center items-center">
        <img className="w-1/2 " src={Banner} alt="asatrolok banner" />
      </aside>
      {/* right */}
      <aside className="flex flex-col gap-4  w-[40%]  h-screen px-16">
        <div className="flex justify-center items-center p-4 mt-16">
          <img
            className="image-full w-[12rem] h-[4rem]"
            src={AstrolokIcon}
            alt="astrolok logo"
          />
        </div>

        <div className="px-4">
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="font-semibold">Forgot your password?</h3>
            <h4 className="text-gray-400 text-xs">
              Please add email address associated with your account and we will
              email you a link to reset your password
            </h4>
          </div>
        </div>

        <form className="w-full">
          {/* username input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
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
