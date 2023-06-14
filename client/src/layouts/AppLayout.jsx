import PropTypes from "prop-types";
import { Navbar, Sidebar } from "../components/";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow">
        {/* AppBar */}
        <Navbar />

        {/* Page content */}
        <div className={`p-4`}>{children}</div>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
