import { Navbar, Sidebar } from "../components/";
const PersistentNavigationDrawer = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow">
        {/* AppBar */}
        <Navbar />

        {/* Page content */}
        <div className={`p-4`}>
          <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default PersistentNavigationDrawer;

