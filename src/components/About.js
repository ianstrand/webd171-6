import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const About = () => (
  <HelmetProvider>
    <div className="pb-5">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container className="py-5 main-container">
        <Row>
          <Col className="pt-4">
    			   <h1>This is our about page.</h1>
    			   <Link to="/about">About</Link>
    			 </Col>
    		</Row>
    	</Container>
    </div>
  </HelmetProvider>
);

export default About;