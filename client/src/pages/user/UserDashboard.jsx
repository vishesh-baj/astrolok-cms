import DashboardBanner from "../../assets/dashboardBanner.png";

// user dashboard
const UserDashboard = () => {
  return (
    <div className="mx-auto">
      {/* First Row */}
      <div className="flex gap-4 w-[100%] py-8">
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
                <p>Number of Courses</p>
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
        <div className="flex gap-2 w-1/3 h-auto rounded-lg">
          <div className="flex flex-col justify-center items-center w-1/2 shadow-lg ">
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="text-2xl font-semibold">$1204</span>
            <span>Fund Remaining</span>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 shadow-lg">
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="text-2xl font-semibold">$580</span>
            <span>Fund Spend</span>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex gap-4">
        {/* left side */}
        <div className="w-2/3 flex gap-2">
          <div className="flex justify-between items-center w-1/2 p-4 shadow-lg rounded-lg">
            <div>
              <h2 className="text-xl">Fund Update</h2>
              <p className="text-gray-300 text-sm">Overview Fund</p>
            </div>
            <span className="loading loading-ring loading-lg text-info"></span>
          </div>
          <div className="flex justify-between items-center w-1/2 p-4 shadow-lg rounded-lg">
            <div>
              <h2 className="text-xl">Fund Overview</h2>
              <p className="text-gray-300 text-sm">Every Month</p>
            </div>
            <span className="loading loading-ring loading-lg text-info"></span>
          </div>
        </div>
        {/* right side */}
        <div className="w-1/3 flex">
          <div className="w-1/2 h-auto shadow-lg flex flex-col justify-center items-center cursor-pointer">
            <span className="loading loading-ring loading-lg text-info"></span>
            <h2>Growth</h2>
          </div>
          <div className="w-1/2 h-auto shadow-lg flex flex-col justify-center items-center cursor-pointer">
            <span className="loading loading-ring loading-lg text-info"></span>
            <h2>Expenses</h2>
          </div>
        </div>
      </div>

      {/* third row */}
      <div className="flex gap-4 w-full bg-base-100 py-4 mt-4 rounded-lg">
        {/* all consultation code */}
        <div className="p-4 flex bg-teal-100 rounded-lg justify-between w-full">
          <h2 className="text-xl">Latest Courses</h2>
          <span className="loading loading-ring loading-lg text-info"></span>
        </div>
      </div>

      {/* forth row */}
      <div className="flex gap-4 mt-4">
        <div className="w-full flex gap-4 justify between">
          <div className="flex justify-between p-4 w-1/2 h-auto bg-teal-50">
            <div>
              <h4>Yearly Funds</h4>
              <p className="text-sm text-gray-300 mt-4">Your yearly funds</p>
            </div>
            <span className="loading loading-ring loading-lg text-info"></span>
          </div>
          <div className="flex justify-between p-4 w-1/2 h-auto bg-teal-50">
            <div>
              <h4>Payment Gateways</h4>
              <p className="text-sm text-gray-300">your payment gateways</p>
            </div>
            <span className="loading loading-ring loading-lg text-info"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
