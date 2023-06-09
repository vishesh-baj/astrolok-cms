import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const HomePage = () => {
  const sidebarToggle = useSelector((x) => x.appConfig.sidebarOpen);

  return (
    <div className="flex">
      <Sidebar />

      <div
        className={`bg-red-500 w-screen`}
      >
        HomePage
      </div>
    </div>
  );
};

export default HomePage;
