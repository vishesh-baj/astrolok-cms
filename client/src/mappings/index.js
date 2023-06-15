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
    text: "Consultation",
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

// maps the navbar
export const navbarMapping = [
  {
    type: "dropdown",
    label: "Courses",
    itemsArray: ["Course One", "Course Two", "Course Three"],
  },
  {
    type: "link",
    label: "Consultation",
    link: "/user-consultation-list",
  },
  {
    type: "link",
    label: "Sessions",
    link: "/user-sessions",
  },
  {
    type: "link",
    label: "Booking List",
    link: "/user-booking-list",
  },
  {
    type: "link",
    label: "Upcomming Events",
    link: "/user-upcoming-events",
  },
  {
    type: "link",
    label: "Top Astrologers",
    link: "/user-top-astrologers",
  },
];
