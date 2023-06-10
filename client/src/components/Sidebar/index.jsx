// import {routes}  from "../../router/routes";
import { toggleSidebar } from "../../features/appConfig/AppSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarToggle = useSelector((x) => x.appConfig.sidebarOpen);
  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`duration-300 ease-in-out bg-gray-500 ${
        sidebarToggle === true
          ? "h-screen w-[20%] sm:w-640px md:w-768px lg:w-1024px"
          : "h-screen w-[7%] sm:w-640px md:w-768px lg:w-1024px"
      }`}
    >
      <div onClick={handleClick} className="cursor-pointer">
        side
      </div>
    </div>
  );
};

export default Sidebar;
