import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NotFound = () => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>Page not Found</title>
      </Helmet>
      <Container className="py-5 main-container">
        <Row>
          <Col className="pt-4">
            <article className="not-found container">
              <h1>404!</h1>
              <p className="pt-4 pb-2">Content not found.</p>
              <Link to="/">Return to Home</Link>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  </HelmetProvider>
);

export default NotFound;