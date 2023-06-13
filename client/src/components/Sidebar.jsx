import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
import { sidebarMapping } from "../mappings";

const Sidebar = () => {
  const isExpanded = useSelector((x) => x.appConfig.sidebarOpen);
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-blue-50 text-white ${
          isExpanded ? "w-64" : "w-0 md:w-16"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Sidebar content */}
        <nav>
          <ul className="flex flex-col gap-4 space-y-2 mt-12">
            {sidebarMapping?.map(({ Icon, text }) => {
              return (
                <SidebarItem
                  key={text}
                  Icon={Icon}
                  text={text}
                  itemExpanded={isExpanded}
                />
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
