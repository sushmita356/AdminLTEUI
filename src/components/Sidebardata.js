import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";

import DashboardIcon from "@material-ui/icons/Dashboard";
import { Image } from "react-bootstrap";

const Sidebardata = [
  {
    title: "Alexander Pierce",
    icon: (
      <Image
        className="userImg"
        src="https://cdn.pixabay.com/photo/2019/03/15/09/49/girl-4056684_960_720.jpg"
        roundedCircle
      />
    ),
    link: "",
  },
  {
    title: "dashboard",
    icon: <FaTachometerAlt />,
    link: "/dashboard",
  },
  {
    title: "widgets",
    icon: <FaTh />,
    link: "/widgets",
  },
  {
    title: "charts",
    icon: <FaChartPie />,
    link: "/charts",
  },
  {
    title: "ui elements",
    icon: <DashboardIcon />,
    link: "/uiElements",
  },
  {
    title: "forms",
    icon: <FaPencilAlt />,
    link: "/forms",
  },
  {
    title: "tablets",
    icon: <FaTable />,
    link: "/tablets",
  },
  {
    title: "calender",
    icon: <FaRegCalendarAlt />,
    link: "/calender",
  },
  {
    title: "mailbox",
    icon: <FaEnvelope />,
    link: "/mailbox",
  },
  {
    title: "examples",
    icon: <FaFolder />,
    link: "/examples",
  },
  {
    title: "multilevel",
    icon: <FaShare />,
    link: "/multilevel",
  },
  {
    title: "documentation",
    icon: <FaBook />,
    link: "/documentation",
  },
];
export default Sidebardata;
