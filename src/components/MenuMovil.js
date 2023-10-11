import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BsFillHouseFill,
  BsCameraVideoFill,
  BsCardImage,
  BsFilePersonFill,
  BsFillCaretRightSquareFill,
  BsFillPostcardHeartFill,
  BsFillEnvelopeAtFill,
} from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function MenuMovil() {
  return (
    <>
      <Navbar
        sticky="top"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary d-sm-block d-md-none d-lg-none nav-color-movil">
        <Container>
          <Navbar.Brand href="#home">Santo Súbito</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#hero">
              <BsFillHouseFill />
            </Nav.Link>
            <Nav.Link href="#canonizacion">
              <BsFillPostcardHeartFill />
            </Nav.Link>
            <Nav.Link href="#biografia">
              <BsFilePersonFill />
            </Nav.Link>
            <Nav.Link href="#galeria">
              <BsCardImage />
            </Nav.Link>
            <Nav.Link href="#videos">
              <BsFillCaretRightSquareFill />
            </Nav.Link>
            <Nav.Link href="#testimonio">
              <BsCameraVideoFill />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div></div>
    </>
  );
}
