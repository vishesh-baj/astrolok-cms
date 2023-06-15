// import { Navigate, Route, Routes } from "react-router-dom";
// import { LoginPage, ForgetPasswordPage, SignupPage } from "./pages";
// import { PATHS } from "./router/paths";

import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLAyout";
import { UserDashboard, UserProfile } from "./pages";
import { PATHS } from "./router/paths";
import { useSelector } from "react-redux";

const App = () => {
  const darkMode = useSelector((x) => x.appConfig.darkMode);
  return (
    <div
      data-theme={`${darkMode ? "dark" : "light"}`}
      className="font-plus-jakarta-sans"
    >
      <AppLayout>
        <Routes>
          <Route
            path={PATHS.root}
            element={<Navigate to={PATHS.userDashboard} />}
          />
          <Route path={PATHS.userDashboard} element={<UserDashboard />} />
          <Route path={PATHS.userProfile} element={<UserProfile />} />
        </Routes>
      </AppLayout>

      {/* <Routes>
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />
        <Route element={<LoginPage />} path={PATHS.login} />
        <Route element={<SignupPage />} path={PATHS.signupPage} />
        <Route element={<ForgetPasswordPage />} path={PATHS.forgetPassword} />
      </Routes> */}
    </div>
  );
};

export default App;
