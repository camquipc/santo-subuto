import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillHouseFill, BsCameraVideoFill, BsCardImage, BsFilePersonFill, BsFillCaretRightSquareFill, BsFillPostcardHeartFill, BsFillEnvelopeAtFill } from "react-icons/bs";
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function MenuMovil() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar bg="light" data-bs-theme="light" key={expand} expand={expand}
                    className="bg-body-tertiary  d-sm-block d-md-none d-lg-none" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#hero"> <BsFillHouseFill /> Inicio</Nav.Link>
                                    <Nav.Link href="#canonizacion"><BsFillPostcardHeartFill /> Canonización</Nav.Link>
                                    <Nav.Link href="#biografia"> <BsFilePersonFill /> Biografía</Nav.Link>
                                    <Nav.Link href="#galeria"> <BsCardImage /> Galería</Nav.Link>
                                    <Nav.Link href="#videos"> <BsFillCaretRightSquareFill /> Videos</Nav.Link>
                                    <Nav.Link href="#testimonio"> <BsCameraVideoFill />  Testimonio</Nav.Link>

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}



