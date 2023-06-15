import UserProfileBanner from "../../assets/userProfileBanner.png";
import { Placeholder } from "../../components";
const UserProfile = () => {
  return (
    <>
      {/* header */}
      <header className="w-full h-auto py-8 px-8 bg-blue-100 rounded-lg mt-8">
        <div className="w-full flex justify-between relative">
          {/* left side */}
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl">User Profile</h4>
            <p className="text-sm">Account Settings</p>
          </div>
          {/* right side */}
          <div className="absolute right-0 -top-28">
            {/* Image */}
            <img src={UserProfileBanner} alt="user profile banner" />
          </div>
        </div>
      </header>

      <section className="mt-12 w-full flex justify-center mx-auto ">
        <div className="w-3/4 flex flex-wrap gap-4 bg-base-100 p-8  rounded-lg">
          {/* first row */}
          <div className="flex gap-4 w-full">
            <div className="p-4 shadow-lg rounded-lg w-1/2 h-auto bg-base-100">
              <h4 className="text-xl">Change Profile</h4>
              <p className="text-sm text-gray-400">
                Change you profile picture from here
              </p>
              <div className="w-full h-auto flex flex-col gap-4 justify-center items-center mt-4">
                <Placeholder letter="VB" />
                <div className="flex gap-4">
                  <button className="btn btn-primary"> upload</button>
                  <button className="btn btn-outline btn-error">Reset</button>
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    Allowed JPG, GIF, PNG, Max size 800K
                  </p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="p-4 shadow-lg rounded-lg w-1/2 h-auto bg-base-100">
              <h4 className="text-xl">Change Password</h4>
              <p className="text-sm text-gray-400">
                To change your password please confirm here
              </p>
              <div className="mt-4">
                {/* current password */}
                <div className="form-control w-full">
                  <label htmlFor="currentPassword" className="label">
                    <span className="label-text">Current Password</span>
                  </label>
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                  />
                </div>
                {/* new password */}
                <div className="form-control w-full">
                  <label htmlFor="currentPassword" className="label">
                    <span className="label-text">New Password</span>
                  </label>
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                  />
                </div>

                {/* confirm password */}
                <div className="form-control w-full">
                  <label htmlFor="currentPassword" className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    className="input input-sm border  border-3 border-gray-400"
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="w-full rounded-lg shadow-lg p-4">
            <div>
              <h4 className="text-xl">Person Details</h4>
              <p className="text-sm text-gray-400">
                To change your personal detail, edit and save from here
              </p>
            </div>
            {/* first row of personal details */}
            <div className="w-full flex gap-4">
              <div className="form-control w-full">
                <label htmlFor="currentPassword" className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="currentPassword" className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                />
              </div>
            </div>
            {/* second row for personal details */}
            <div className="w-full flex gap-4">
              <div className="form-control w-full">
                <label htmlFor="currentPassword" className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="currentPassword" className="label">
                  <span className="label-text">Currency</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                />
              </div>
            </div>
            {/* third row for personal details */}
            <div className="w-full flex gap-4">
              <div className="form-control w-full">
                <label htmlFor="currentPassword" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="currentPassword" className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  className="input input-sm border  border-3 border-gray-400"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                />
              </div>
            </div>
            {/* fourth row for personal details */}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
