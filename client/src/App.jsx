// import { buildRoutes } from "./utilities";
// import { routes } from "./router/routes";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages";
import Sidebar from "./components/Sidebar";
// import { PATHS } from "./router/paths";
// main app
const App = () => {
  return (
    <div className="font-body">
      <Sidebar/>
      <Routes>
        <Route element={<LoginPage />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
