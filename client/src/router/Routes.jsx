import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { PATHS } from "./paths";

import {
  // user
  UserDashboard,
  LoginPage,
  SignupPage,
  PermissionDenied,
  UserBirthDetails,
  UserConsultationList,
  UserCourseList,
  UserProfile,
  UserWallet,
  //   astrologer
  AstrologerAccount,
  AstrologerAvailablity,
  AstrologerBlog,
  AstrologerChargeAmount,
  AstrologerConsultationFees,
  AstrologerDashboard,
  AstrologerGoLive,
  AstrologerProfile,
  AstrologerReports,
  //   admin
  AdminAstrologerList,
  AdminCms,
  AdminCommissionFees,
  AdminDashboard,
  AdminProducts,
  AdminProfile,
  AdminRatings,
  AdminReports,
  AdminServices,
  AdminUsersList,
} from "../pages";

// main
export const MainRoutes = () => {
  <Routes>
    {/* protected routes */}
    <Route path={PATHS.root} element={<ProtectedRoute />}>
      <Route
        path={PATHS.root}
        element={<Navigate replace to={PATHS.userDashboard} />}
      />

      {/* all user routes */}
      <Route element={<ProtectedRoute roleRequired="USER" />}>
        {/* user dashboard */}
        <Route path={PATHS.userDashboard} element={UserDashboard} />
        {/* user birth details */}
        <Route path={PATHS.userBirthDetails} element={<UserBirthDetails />} />
        {/* user consultation list */}
        <Route
          path={PATHS.userConsultationList}
          element={<UserConsultationList />}
        />
        {/* user course list  */}
        <Route path={PATHS.userCourseList} element={<UserCourseList />} />
        {/* user profile */}
        <Route path={PATHS.userProfile} element={<UserProfile />} />
        {/* user wallet */}
        <Route path={PATHS.userWallet} element={<UserWallet />} />
        {/* user signup */}
        <Route path={PATHS.signupPage} element={<SignupPage />} />
      </Route>
    </Route>

    {/* all astrologer routes  */}
    <Route element={<ProtectedRoute roleRequired={"ASTROLOGER"} />}>
      {/* astrologer account */}
      <Route path={PATHS.astrologerAccount} element={<AstrologerAccount />} />
      {/* astrologer availablity */}
      <Route
        path={PATHS.astrologerAvailablity}
        element={<AstrologerAvailablity />}
      />
      {/* astrologer blog */}
      <Route path={PATHS.astrologerBlog} element={<AstrologerBlog />} />
      {/* astrologer charge amount */}
      <Route
        path={PATHS.astrologerChargeAmount}
        element={<AstrologerChargeAmount />}
      />
      {/* astrologer consulation fees */}
      <Route
        path={PATHS.astrologerConsultationFees}
        element={<AstrologerConsultationFees />}
      />

      {/* astrologer dashboard */}
      <Route
        path={PATHS.astrologerDashboard}
        element={<AstrologerDashboard />}
      />
      {/* astrologer go live */}
      <Route path={PATHS.astrologerGoLive} element={<AstrologerGoLive />} />
      {/* astrologer profile */}
      <Route path={PATHS.astrologerProfile} element={<AstrologerProfile />} />
      {/* astrologer reports  */}
      <Route path={PATHS.astrologerReports} element={<AstrologerReports />} />
    </Route>
    {/* all admin routes */}
    <Route element={<ProtectedRoute roleRequired={"ADMIN"} />}>
      {/* admin astrologer list */}
      <Route
        path={PATHS.adminAstrologerList}
        element={<AdminAstrologerList />}
      />
      {/* admin astrologer cms */}
      <Route path={PATHS.adminAstrologerCms} element={<AdminCms />} />
      {/* admin commission fees */}
      <Route
        path={PATHS.adminCommissionFees}
        element={<AdminCommissionFees />}
      />
      {/* admin dashboard */}
      <Route path={PATHS.adminDashboard} element={<AdminDashboard />} />
      {/* admin products */}
      <Route path={PATHS.adminProducts} element={<AdminProducts />} />
      {/* admin profile */}
      <Route path={PATHS.adminProfile} element={<AdminProfile />} />
      {/* admin ratings */}
      <Route path={PATHS.adminRatings} element={<AdminRatings />} />
      {/* admin reports */}
      <Route path={PATHS.adminReports} element={<AdminReports />} />
      {/* admin revenues */}
      <Route path={PATHS.adminReports} element={<AdminReports />} />
      {/* admin services */}
      <Route path={PATHS.adminServices} element={<AdminServices />} />
      {/* admin user list */}
      <Route path={PATHS.adminUserList} element={<AdminUsersList />} />
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path={PATHS.login} element={<PublicRoute />}>
      <Route path={PATHS.login} element={<LoginPage />} />
    </Route>

    {/** Permission denied route */}
    <Route path={PATHS.permissionDenied} element={<PermissionDenied />} />
  </Routes>;
};
