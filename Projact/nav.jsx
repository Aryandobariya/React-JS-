import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal"; // Import the Bootstrap Modal component
import Mapcom from "./Map";

function NavScrollExample(props) {
  const [showModel, setShowModel] = useState(false);

  function toggleModel() {
    setShowModel((prevShowModel) => !prevShowModel);
  }

  function fun1() {
    props.setMapcom(!props.mapcom);
  }
  function fun2() {
    props.setMapcom(!props.mapcom);
  }

  function getSearchText(e) {
    console.log("===", e.target.value);
    props.setserchTaxt(e.target.value);
  }
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <h1>boAt</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-3 my-lg-0 d-flex gap-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">MENU</Nav.Link>
            {/* Replace the button with a Bootstrap Modal opener */}
            {/* <Nav.Link href="#action2">hh</Nav.Link> */}
            <NavDropdown title="CATEGORIES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={() => fun1()}>
                Neckbands
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={() => fun2()}>
                Airdopes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Smartwatches</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={props.serchTaxt}
              onChange={(e) => getSearchText(e)}
            />
            <button className="btn btn-sm " onClick={toggleModel}>
              <h3>
                <i className="fa-solid fa-cart-shopping"></i>
              </h3>
            </button>

            {/* <button variant="outline-success">Search</button> */}
          </Form>
        </Navbar.Collapse>
      </Container>

      {/* Use Bootstrap Modal */}
      <Modal show={showModel} onHide={toggleModel}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* {ch} Display the content conditionally */}</Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default NavScrollExample;
