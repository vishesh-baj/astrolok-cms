import React, { useState } from "react";
import { HiMenu, HiX, HiHome, HiBriefcase, HiUserCircle } from "react-icons/hi";

const PersistentNavigationDrawer = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleDrawer = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white ${
          isExpanded ? "w-64" : "w-16"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Sidebar content */}
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white px-4 py-2"
              >
                <HiHome className="mr-2" />
                {isExpanded && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white px-4 py-2"
              >
                <HiBriefcase className="mr-2" />
                {isExpanded && <span>Projects</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white px-4 py-2"
              >
                <HiUserCircle className="mr-2" />
                {isExpanded && <span>Profile</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-grow">
        {/* AppBar */}
        <nav className="bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Dashboard</div>
            <button
              className=" text-gray-500 focus:outline-none"
              onClick={toggleDrawer}
            >
              {isExpanded ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>

        {/* Page content */}
        <div className={`p-4 ${isExpanded ? "ml-64" : "ml-16"}`}>
          <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default PersistentNavigationDrawer;
