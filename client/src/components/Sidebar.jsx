import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
import { sidebarMapping } from "../mappings";
import AstrolokLogo from "../assets/astrolokLogo.png";

// sidebar
const Sidebar = () => {
  const isExpanded = useSelector((x) => x.appConfig.sidebarOpen);
  return (
    <>
      {/* Sidebar */}
      <aside
        className={` text-white ${
          isExpanded ? "w-64  border-r-[1px]" : "w-0 md:w-16"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center  justify-center  px-8 py-4">
          <img
            className={`${isExpanded ? "w-[30-vw]" : "w-full"}`}
            src={AstrolokLogo}
            alt="asttrolok logo"
          />
        </div>

        {/* Sidebar content */}
        <nav>
          <ul className="flex flex-col gap-4 space-y-2 mt-12">
            {sidebarMapping?.map(({ Icon, text, navlink }) => {
              return (
                <li className="flex justify-center pl-6" key={text}>
                  <SidebarItem
                    Icon={Icon}
                    text={text}
                    itemExpanded={isExpanded}
                    link={navlink}
                  />
                </li>
              );
            })}
          </ul>
          <h1>user profile button</h1>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
