// import { Navigate, Route, Routes } from "react-router-dom";
// import { LoginPage, ForgetPasswordPage, SignupPage } from "./pages";
// import { PATHS } from "./router/paths";

import AppLayout from "./layouts/AppLAyout";
const App = () => {
  return (
    <div data-theme="light" className="font-body">
      <AppLayout>
        <h1 className="text-2xl font-bold">Welcome to the Dashboardsdd!</h1>
        <p>This is the main content area.</p>
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
