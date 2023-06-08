import { Outlet, Navigate, useLocation } from "react-router-dom";
import { PATHS } from "./paths";
// for reverse login routing
const ReverseAuthRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (location.pathname === PATHS.login && token) {
    return <Navigate to={PATHS.home} />;
  }
  return <Outlet />;
};
export default ReverseAuthRoute;

