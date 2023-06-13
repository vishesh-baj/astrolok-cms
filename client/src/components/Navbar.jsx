import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/appConfig/AppSlice";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((x) => x.appConfig.sidebarOpen);
  const toggleDrawer = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <div className="flex items-center justify-between">
          <button
            className=" text-gray-500 focus:outline-none"
            onClick={toggleDrawer}
          >
            {isExpanded ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
