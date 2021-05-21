import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Contact = () => (
  <HelmetProvider>
  <div className="pb-5">
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <Container className="py-5 main-container">
      <Row>
        <Col className="pt-4">
			    <h1>This is our contact page.</h1>
			    <Link to="/contact">Contact</Link>
		 	  </Col>
		  </Row>
	  </Container>
  </div>
  </HelmetProvider>
);

export default Contact;