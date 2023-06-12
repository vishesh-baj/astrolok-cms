import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  // get item from localstorage
  let user;
  const _user = localStorage.getItem("user");
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

const ProtectedRoutes = ({ roleRequired }) => {
  const { auth, role } = useAuth();

  // if the role required is there or not
  if (roleRequired) {
    return auth ? (
      roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

ProtectedRoutes.propTypes = {
  roleRequired: PropTypes.string, // Assuming roleRequired is a string
};

export default ProtectedRoutes;
