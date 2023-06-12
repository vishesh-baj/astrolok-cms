import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

const useAuth = () => {
  // get item from localstorage
  let user;
  const _user = localStorage.getItem("user");
  console.log("USER IN USE AUTH", _user);
  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }
  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

// protected routes
const ProtectedRoute = ({ roleRequired }) => {
  const { auth, role } = useAuth();

  // if the role required is there or not
  if (roleRequired) {
    console.log("ROLE REQUIRED: ", roleRequired, role);
    return auth ? (
      roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to={PATHS.permissionDenied} />
      )
    ) : (
      <Navigate to={PATHS.login} />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to={PATHS.login} />;
  }
};

ProtectedRoute.propTypes = {
  // Assuming roleRequired is a string
  roleRequired: PropTypes.string,
};

export default ProtectedRoute;
