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
import { FaAngleLeft } from "react-icons/fa";
import {FaCircleNotch} from 'react-icons/fa';

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
    pull:''
  },
  {
    title: "dashboard",
    icon: <FaTachometerAlt />,
    link: "/dashboard",
    pull:<FaAngleLeft/>

  },
  {
    title: "widgets",
    icon: <FaTh />,
    link: "/widgets",
    pull:''

  },
  {
    title: "charts",
    icon: <FaChartPie />,
    link: "/charts",
    pull:<FaAngleLeft/>

  },
  {
    title: "ui elements",
    icon: <DashboardIcon />,
    link: "/uiElements",
    pull:<FaAngleLeft/>

  },
  {
    title: "forms",
    icon: <FaPencilAlt />,
    link: "/forms",
    pull:<FaAngleLeft/>

  },
  {
    title: "tablets",
    icon: <FaTable />,
    link: "/tablets",
    pull:<FaAngleLeft/>

  },
  {
    title: "calender",
    icon: <FaRegCalendarAlt />,
    link: "/calender",
    pull:''

  },
  {
    title: "mailbox",
    icon: <FaEnvelope />,
    link: "/mailbox",
    pull:''

  },
  {
    title: "examples",
    icon: <FaFolder />,
    link: "/examples",
    pull:<FaAngleLeft/>

  },
  {
    title: "multilevel",
    icon: <FaShare />,
    link: "/multilevel",
    pull:<FaAngleLeft/>

  },
  {
    title: "documentation",
    icon: <FaBook />,
    link: "/documentation",
    pull:''

  },
  {
    title: "important",
    icon: <FaCircleNotch />,
    link: "/important",
    pull:''

  },
  {
    title: "warning",
    icon: <FaCircleNotch />,
    link: "/warning",
    pull:''

  },
  {
    title: "Information",
    icon: <FaCircleNotch />,
    link: "/Information",
    pull:''

  },
];
export default Sidebardata;
