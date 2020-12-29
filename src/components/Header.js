import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "./user.jpg";

import { Navbar, Nav, Col, Image } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className="name" href="#home">
          AdminLTE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <FontAwesomeIcon className="menubarIcon" icon={faBars} />
          </Nav>
          <Nav className="headerIcons">
            <FontAwesomeIcon className="iconInHeader" icon={faEnvelope} />
            <FontAwesomeIcon className="iconInHeader" icon={faBell} />
            <FontAwesomeIcon className="iconInHeader" icon={faFlag} />
            <Col xs={2}>
              <Image
                className="userImg"
                src="https://cdn.pixabay.com/photo/2019/03/15/09/49/girl-4056684_960_720.jpg"
                roundedCircle
              />
            </Col>
            <Navbar.Text className='username'>
              {'Alexander'}
            </Navbar.Text>

            <FontAwesomeIcon className="iconInHeader" icon={faCogs} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
