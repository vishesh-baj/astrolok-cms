import UserProfileBanner from "../../assets/userProfileBanner.png";
const UserProfile = () => {
  return (
    <div>
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
    </div>
  );
};

export default UserProfile;
