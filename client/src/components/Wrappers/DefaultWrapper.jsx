// can be used when we need to center the content inside
const DefaultWrapper = (children) => {
  return (
    <div className="px-4 py-2 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default DefaultWrapper;
