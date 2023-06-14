import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/appConfig/AppSlice";
import { HiMenu, HiX } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((x) => x.appConfig.sidebarOpen);
  const toggleDrawer = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div>
      <nav className=" p-4">
        <div className="flex justify-between items-center">
          {/* left side */}
          <div className="flex gap-4">
            <button
              className=" text-gray-500 focus:outline-none"
              onClick={toggleDrawer}
            >
              {isExpanded ? (
                <HiX className="w-8" />
              ) : (
                <HiMenu className="w-8" />
              )}
            </button>
            <button>
              <GoSearch className="w-8 cursor-pointer" />
            </button>

            <div className="dropdown dropdown-bottom  dropdown-hover">
              <label tabIndex={0} className="btn m-1 lowercase font-light">
                Courses
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Course One </a>
                </li>
                <li>
                  <a>Course Two</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-ghost text-black lowercase font-light">
                Consultation
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-ghost text-black lowercase font-light">
                Sessions
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-ghost text-black lowercase font-light">
                Booking List
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-ghost text-black lowercase font-light">
                Upcoming events
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-ghost text-black lowercase font-light">
                Top Astrologers
              </button>
            </div>
          </div>
          {/* right side */}
          <div
            className=" flex gap-4 justify-center ityems-center
          "
          >
            <button>
              <AiOutlineShopping />
            </button>
            <button className="relative">
              <BsBell />
              <div className="badge badge-primary badge-xs badge-info absolute top-0 left-2"></div>
            </button>

            <div className="avatar placeholder cursor-pointer">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span>VB</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
