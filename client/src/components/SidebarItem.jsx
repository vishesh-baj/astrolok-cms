import PropTypes from "prop-types";
const SidebarItem = ({ Icon, text, itemExpanded }) => {
  return (
    <li className="flex btn btn-info mx-2">
      <Icon />
      {itemExpanded && <span>{text}</span>}
    </li>
  );
};
SidebarItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  itemExpanded: PropTypes.bool.isRequired,
};

export default SidebarItem;
