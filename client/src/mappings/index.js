import {
  HiHome,
  HiBriefcase,
  HiUserCircle,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { BsTelephone, BsViewList } from "react-icons/bs";

// maps the sidebar
export const sidebarMapping = [
  {
    Icon: HiHome,
    text: "Dashboard",
    navLink: "/user-dashboard",
  },
  {
    Icon: HiBriefcase,
    text: "Birth Details",
    navlink: "/birth-details",
  },
  {
    Icon: HiUserCircle,
    text: "Consultation List",
    navlink: "consultation-list",
  },
  {
    Icon: HiOutlineDocumentReport,
    text: "Course List",
    navlink: "course-list",
  },
  {
    Icon: BsTelephone,
    text: "User Profile",
    navlink: "user-profile",
  },
  {
    Icon: BsViewList,
    text: "User Reports",
    navlink: "user reports",
  },
];
