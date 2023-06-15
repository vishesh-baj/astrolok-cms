import PropTypes from "prop-types";

const Dropdown = ({ label, itemsList }) => {
  return (
    <div className="dropdown dropdown-bottom  dropdown-hover">
      <label className="btn m-1 lowercase font-light">{label}</label>
      <ul className="z-10 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {itemsList.map((item, idx) => {
          return (
            <li key={idx}>
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Dropdown;
