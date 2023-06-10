import Banner from "../../assets/banner.svg";
import AstrolokIcon from "../../assets/astrolokLogo.png";
import GoogleIcon from "../../assets/googleIcon.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* left  */}
      <aside className="hidden md:flex w-3/4 h-screen bg-gray-50 justify-center items-center">
        <img className="w-1/2 " src={Banner} alt="asatrolok banner" />
      </aside>
      {/* right */}
      <aside className="flex flex-col gap-4  w-[40%]  h-screen p-4">
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
            <button className="btn text-xs  w-1/2">
              <img src={GoogleIcon} alt="google icon" />
              Signin with Google
            </button>
            <button className="btn text-xs   w-1/2">
              <img src={FacebookIcon} alt="google icon" />
              Signin with FB
            </button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400">
          _____or sign in with_____
        </div>
        <form className="w-full">
          {/* username input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex justify-between gap-2 ">
              <input
                className="checkbox checkbox-primary checkbox-sm bg-white"
                type="checkbox"
              />

              <span>Remember this device</span>
            </div>
            <div>
              <span className="text-blue-600 cursor-pointer">
                Forget Password?
              </span>
            </div>
          </div>

          <button className="btn btn-primary mt-4 w-full bg-blue-600 border-none hover:bg-blue-300 hover:text-white">
            Login
          </button>
        </form>
        <div className="w-full text-center">
          new to Astrolok?{" "}
          <span className="text-blue-600">create an account</span>
        </div>
      </aside>
    </div>
  );
};

export default LoginPage;
