import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, ForgetPasswordPage, SignupPage } from "./pages";
import { PATHS } from "./router/paths";
// import MainRoutes from "./router/routes";
// main app
const App = () => {
  return (
    <div className="font-body">
      <Routes>
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />
        <Route element={<LoginPage />} path={PATHS.login} />
        <Route element={<SignupPage />} path={PATHS.signupPage} />
        <Route element={<ForgetPasswordPage />} path={PATHS.forgetPassword} />
      </Routes>
    </div>
  );
};

export default App;
