const SidebarItem = ({ Icon, text, itemExpanded }) => {
  return (
    <li className="flex btn btn-info mx-2">
      <Icon />
      {itemExpanded && <span>{text}</span>}
    </li>
  );
};

export default SidebarItem;
