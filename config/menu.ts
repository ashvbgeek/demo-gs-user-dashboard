/*
 * Main and demo navigation arrays
 */

import {
  MdDashboard,
  MdOutlineDashboard,
  MdLaptopMac,
  MdOutlinePeopleAlt,
  MdPeopleAlt,
} from "react-icons/md";
import { RiSettings3Fill, RiSettings3Line } from "react-icons/ri";
import {
  AiFillMail,
  AiOutlineMail,
  AiOutlineCheckSquare,
  AiFillCheckSquare,
} from "react-icons/ai";
import { BsBriefcaseFill, BsBriefcase } from "react-icons/bs";

const menu = [
  {
    name: "Dashboard",
    to: "/",
    icon: MdOutlineDashboard,
    filledIcon: MdDashboard,
    permissions: [],
  },
  {
    name: "Inbox",
    to: "/inbox",
    icon: AiOutlineMail,
    filledIcon: AiFillMail,
    permissions: [],
    isComingSoon: true,
  },
  {
    name: "Tasks",
    to: "/tasks",
    icon: AiOutlineCheckSquare,
    filledIcon: AiFillCheckSquare,
    permissions: [],
    isComingSoon: true,
  },
  {
    name: "Jobs",
    to: "/jobs",
    icon: BsBriefcase,
    filledIcon: BsBriefcaseFill,
    permissions: [],
  },
  {
    name: "Candidates",
    to: "/candidates",
    icon: MdOutlinePeopleAlt,
    filledIcon: MdPeopleAlt,
    permissions: [],
  },
  {
    name: "Career Page",
    to: "/career",
    icon: MdLaptopMac,
    filledIcon: MdLaptopMac,
    permissions: [],
  },
  {
    name: "Settings",
    icon: RiSettings3Line,
    filledIcon: RiSettings3Fill,
    sub: [
      {
        name: "My Account",
        to: "/settings/my-account",
        permissions: [],
      },
      {
        name: "User Access",
        to: "/settings/manage-access",
        isComingSoon: true,

        permissions: [],
      },
      {
        name: "Company Settings",
        to: "/settings/company-setting",
        permissions: [],
      },
      {
        name: "Notification Center",
        to: "/settings/notification-center",
        isComingSoon: true,
        permissions: [],
      },

      {
        name: "Billing & Payments",
        to: "/settings/billings-and-payments",
        isComingSoon: true,
        permissions: [],
      },
    ],
  },
];

export default menu;
