import { buildRoutes } from "./utilities";
import { routes } from "./router/routes";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { PATHS } from "./router/paths";

const App = () => {
  return (
    <div className="font-body">
      <Routes>
        {buildRoutes(routes)}
        <Route element={<HomePage />} path={PATHS.home} />
      </Routes>
    </div>
  );
};

export default App;
