import React, { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 ${
          sidebarOpen ? "hidden" : "block"
        }`}
      >
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-xl font-semibold">Logo</h1>
        </div>
        {/* Other sidebar items */}
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow">
          {/* Navbar content */}
          <div className="p-4">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={handleToggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {sidebarOpen ? (
                  <path d="M4 6h16M4 12h8m-8 6h16" />
                ) : (
                  <path d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Main content area */}
        <main className="flex-1 p-4">{/* Content goes here */}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
