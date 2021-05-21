import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const Header = ({objects}) => {

  return (
    <>
      <div className="navbar-content">
        <Navbar bg="light" expand>
          <Navbar.Brand href={objects[0].link}>My Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={objects[0].link}>{objects[0].title}</Nav.Link>
              <Nav.Link href={objects[1].link}>{objects[1].title}</Nav.Link>
              <Nav.Link href={objects[2].link}>{objects[2].title}</Nav.Link>
              <Nav.Link href={objects[3].link}>{objects[3].title}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <h1>
                  <Link to="/">My Site</Link>
                </h1>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </>
    );
  }

export default Header;