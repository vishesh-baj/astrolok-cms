const Button = ({ buttonText, buttonHandler }) => {
  return (
    <button onClick={() => buttonHandler()} className="btn btn-primary">
      {buttonText}
    </button>
  );
};

export default Button;
