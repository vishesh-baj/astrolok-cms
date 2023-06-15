import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ Icon, text, link, itemExpanded }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? " btn  bg-[#5D87FF] hover:bg-[#a1b9fb] text-white"
          : "btn bg-white border-none"
      }
      to={link}
    >
      <Icon />
      {itemExpanded && <span className="lowercase font-light">{text}</span>}
    </NavLink>
  );
};

// sidebar specific props
SidebarItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  itemExpanded: PropTypes.bool.isRequired,
};

export default SidebarItem;
