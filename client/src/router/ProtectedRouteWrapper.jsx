import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from "./paths";
// this is the private route, wrap any component as child to make it protected
const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  let auth = { token };
  return auth.token ? <Outlet /> : <Navigate to={PATHS.login} />;
};
export default PrivateRoute;
