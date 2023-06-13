import { Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  ForgetPasswordPage,
  SignupPage,
  UserDashboard,
} from "./pages";
import { PATHS } from "./router/paths";

const App = () => {
  return (
    <div className="font-body">
      <Routes>
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />
        <Route element={<LoginPage />} path={PATHS.login} />
        <Route element={<SignupPage />} path={PATHS.signupPage} />
        <Route element={<ForgetPasswordPage />} path={PATHS.forgetPassword} />
        <Route element={<UserDashboard />} path={PATHS.userDashboard} />
      </Routes>
    </div>
  );
};

export default App;
