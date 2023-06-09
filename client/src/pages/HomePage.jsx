import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";


const HomePage = () => {

  const sidebarToggle = useSelector((x) => x.appConfig.sidebarOpen);

  return (
    <div className="flex">
      <Sidebar />

      <div
        className={`bg-red-500 ${
          sidebarToggle === true
            ? "w-[80%] sm:w-640px md:w-768px lg:w-1024px"
            : "w-[93%] sm:w-640px md:w-768px lg:w-1024px"
        }`}
      >
        HomePage
      </div>
    </div>
  );
};

export default HomePage;
