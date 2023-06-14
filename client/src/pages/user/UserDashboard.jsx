import DashboardBanner from "../../assets/dashboardBanner.png";

const UserDashboard = () => {
  return (
    <div>
      <div className="flex gap-4 w-[100%]  rounded-lg py-8">
        <div className=" flex justify-between w-2/3 h-auto bg-[#EBF3FE] rounded-lg p-[30px]">
          {/* content */}
          <div className="flex flex-col gap-3 items-center justify-around">
            <div className="flex gap-4 items-center">
              {/* avatar */}
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span className="text-sm">VB</span>
                </div>
              </div>
              {/* heading */}
              <h2 className="font-semibold">Welcome back Vishesh Bajpayee</h2>
            </div>
            <div className="flex gap-4">
              <div>
                <span className="text-3xl text-semibold">35+</span>
                <p>Number of Courses</p>vishesh
              </div>
              <div>
                <span className="text-3xl text-semibold">30+</span>
                <p>Number of Consultation</p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="w-1/2">
            <img src={DashboardBanner} alt="dashboard banner" />
          </div>
        </div>
        <div className="w-1/3 h-[30vh] bg-rose-600 rounded-lg p-4">b</div>
      </div>
    </div>
  );
};

export default UserDashboard;
