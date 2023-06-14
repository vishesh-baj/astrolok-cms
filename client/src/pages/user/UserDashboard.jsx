const UserDashboard = () => {
  return (
    <div>
      <div className="flex gap-4 w-[100%]  rounded-lg py-8">
        <div className="w-2/3 h-[30vh] bg-[#EBF3FE] rounded-lg p-[30px]">
          <div className="flex gap-4 items-center">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="text-sm">VB</span>
              </div>
            </div>
            <h2 className="font-semibold">Welcome back Vishesh Bajpayee</h2>
          </div>
        </div>

        <div className="w-1/3 h-[30vh] bg-rose-600 rounded-lg p-4">b</div>
      </div>
    </div>
  );
};

export default UserDashboard;
