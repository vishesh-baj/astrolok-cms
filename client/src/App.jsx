// import { buildRoutes } from "./utilities";
// import { routes } from "./router/routes";
import { Route, Routes } from "react-router-dom";
import { ForgetPasswordPage } from "./pages";
// import { PATHS } from "./router/paths";
// main app
const App = () => {
  return (
    <div className="font-body">
      <Routes>
        <Route element={<ForgetPasswordPage />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
