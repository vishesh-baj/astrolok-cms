import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const SidebarItem = ({ Icon, text, link, itemExpanded }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? " btn  bg-[#5D87FF] hover:bg-[#a1b9fb] text-white w-full"
          : "btn bg-white border-none w-full"
      }
      to={link}
    >
      <Icon />
      {itemExpanded && <span className="lowercase">{text}</span>}
    </NavLink>
  );
};

SidebarItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  itemExpanded: PropTypes.bool.isRequired,
};

export default SidebarItem;
