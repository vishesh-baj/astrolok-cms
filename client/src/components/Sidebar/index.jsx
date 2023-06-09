import { routes } from "../../router/routes";
import { toggleSidebar } from "../../features/appConfig/AppSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarToggle = useSelector((x) => x.appConfig.sidebarOpen);
  const handleClick = () => {
  
    dispatch(toggleSidebar());
    // console.log("sidebarToggle", sidebarToggle);
      
  };
  // className={`bg-red-500 ${isActive ? 'text-white' : 'text-gray-500'}`}sm:w-[920px]
  return (


    <div
      className={`transition ease-in-out duration-600 delay-[200ms]  bg-gray-500 ${sidebarToggle === true ? "h-screen w-[20%] sm:w-640px md:w-768px lg:w-1024px"  : "h-screen w-[7%] sm:w-640px md:w-768px lg:w-1024px"}`}
    >
      <div onClick={handleClick}>side</div>

      {/* {routes.map((elem) => {
        // return <h5 style={{ marginTop: "2%" }}>{elem.identifier}</h5>;
      })} */}
    </div>



  );
};

export default Sidebar;
