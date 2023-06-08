import { Navigate, Route } from "react-router-dom";
export const hasAccess = (role, page) => {
  // Define the access rules based on user role
  const accessRules = {
    admin: ["admin", "astrologer", "users"],
    astrologer: ["astrologer"],
    user: ["user"],
  };

  // Check if the user role has access to the given page
  return accessRules[role] && accessRules[role].includes(page);
};

export const buildRoutes = (data) => {
  // need to be provided from BE
  const userRole = "admin";
  data?.map(({ identifier, path, redirectPath, Element }) => {
    return (
      <Route key={identifier} path={path}>
        {hasAccess(userRole, identifier) ? (
          <Element />
        ) : (
          <Navigate to={redirectPath} />
        )}
      </Route>
    );
  });
};
