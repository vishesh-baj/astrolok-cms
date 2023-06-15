import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleDarkMode } from "../features/appConfig/AppSlice";
import { HiMenu, HiX } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { Dropdown } from "../components";
import { navbarMapping } from "../mappings";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((x) => x.appConfig.sidebarOpen);
  const darkMode = useSelector((x) => x.appConfig.darkMode);
  // toggle app drawer
  const toggleDrawer = () => {
    dispatch(toggleSidebar());
  };

  // toggle darkmode
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
    console.log("CLICKED ON DARK MODE", darkMode);
  };

  return (
    <>
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
            <button
              className="tooltip tooltip-info tooltip-bottom"
              data-tip="search"
            >
              <GoSearch className="w-8 cursor-pointer" />
            </button>

            {navbarMapping?.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <Dropdown
                    key={item.label}
                    label={item.label}
                    itemsList={item.itemsArray}
                  />
                );
              } else {
                return (
                  <div
                    key={item.label}
                    className="flex justify-center items-center"
                  >
                    <Link
                      to={item.link}
                      className="btn btn-ghost text-black  font-light lowercase"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          {/* right side */}
          <div
            className=" flex gap-4 justify-center
          "
          >
            <button
              className="tooltip tooltip-info tooltip-bottom"
              data-tip="darkmode"
            >
              {!darkMode ? (
                <MdOutlineDarkMode onClick={handleDarkMode} />
              ) : (
                <FiSun onClick={handleDarkMode} />
              )}
            </button>
            <button
              data-tip="cart"
              className="tooltip tooltip-info tooltip-bottom"
            >
              <AiOutlineShopping />
            </button>

            <button
              data-tip="Notification"
              className="relative tooltip-info tooltip-bottom"
            >
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
    </>
  );
};

export default Navbar;
