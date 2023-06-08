import { PATHS } from "./paths";
import {
  HomePage,
  AstrologerPage,
  AdminPage,
  LoginPage,
  SignupPage,
  UserPage,
} from "../pages";

export const routes = [
  {
    identifier: "home",
    path: PATHS.home,
    redirectPath: PATHS.errorPage,
    Element: HomePage,
  },
  {
    identifier: "astrologer",
    path: PATHS.astrologer,
    redirectPath: PATHS.errorPage,
    Element: AstrologerPage,
  },
  {
    identifier: "admin",
    path: PATHS.admin,
    redirectPath: PATHS.errorPage,
    Element: AdminPage,
  },
  {
    identifier: "user",
    path: PATHS.user,
    redirectPath: PATHS.errorPage,
    Element: UserPage,
  },

  {
    identifier: "login",
    path: PATHS.login,
    redirectPath: PATHS.errorPage,
    Element: LoginPage,
  },
  {
    identifier: "signup",
    path: PATHS.signup,
    redirectPath: PATHS.errorPage,
    Element: SignupPage,
  },
];
