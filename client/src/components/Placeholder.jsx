import PropTypes from "prop-types";
// placeholder component should take letter as prop for now but in future it should be specific to the user's profile picture
const Placeholder = ({ letter }) => {
  return (
    <>
      <div className="avatar placeholder">
        <div className="bg-info text-neutral-content rounded-full w-24">
          <span className="text-3xl">{letter}</span>
        </div>
      </div>
    </>
  );
};

Placeholder.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default Placeholder;
