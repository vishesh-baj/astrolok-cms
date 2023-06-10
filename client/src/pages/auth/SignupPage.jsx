import Banner from "../../assets/banner.svg";
import AstrolokIcon from "../../assets/astrolokLogo.png";
import GoogleIcon from "../../assets/googleIcon.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
const SignupPage = () => {
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
            <h3 className="font-semibold">Welcome to Asttrolok</h3>
            <h4 className="text-gray-400 text-xs">Your Admin Dashboard</h4>
          </div>
          {/* login buttons */}
          <div className="flex justify-between gap-2">
            <button className="btn text-[9px]  w-1/2 cursor-pointer">
              <img src={GoogleIcon} alt="google icon" />
              Signin with Google
            </button>
            <button className="btn text-[9px] w-1/2 cursor-pointer">
              <img src={FacebookIcon} alt="google icon" />
              Signin with FB
            </button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400">
          _____or signup with_____
        </div>
        <form className="w-full">
          {/* username input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          {/* password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary mt-4 w-full bg-blue-600 border-none hover:bg-blue-300 hover:text-white">
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
