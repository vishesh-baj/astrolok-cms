const ForgetPassword = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* left  */}
      <aside className="hidden md:flex w-3/4 h-screen bg-red-300">
        left side
      </aside>
      {/* right */}
      <aside className=" w-screen md:w-1/4 bg-rose-200 h-screen">
        right side
      </aside>
    </div>
  );
};

export default ForgetPassword;
