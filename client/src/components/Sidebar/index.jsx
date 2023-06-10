import {routes}  from "../../router/routes";
import { toggleSidebar } from "../../features/appConfig/AppSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarToggle = useSelector((x) => x.appConfig.sidebarOpen);
  const handleClick = () => {
    dispatch(toggleSidebar());
  };

<<<<<<< HEAD
=======
    //  console.log("sidebarToggle", routes);

  // className={`bg-red-500 ${isActive ? 'text-white' : 'text-gray-500'}`}sm:w-[920px]
>>>>>>> 3e34ad6922b9a312be177c466be6a907301aa435
  return (
    <div
      className={`duration-300 ease-in-out bg-gray-500 ${
        sidebarToggle === true
          ? "h-screen w-[20%] sm:w-640px md:w-768px lg:w-1024px"
          : "h-screen w-[7%] sm:w-640px md:w-768px lg:w-1024px"
      }`}
    >
<<<<<<< HEAD
      <div onClick={handleClick}>side</div>
=======
      <div onClick={handleClick} className="cursor-pointer">
        side
      </div>

      {/* {routes.map((elem) => {
        return <h5 style={{ marginTop: "2%" }}>{elem.identifier}</h5>;
      })} */}
>>>>>>> 3e34ad6922b9a312be177c466be6a907301aa435
    </div>
  );
};

export default Sidebar;
