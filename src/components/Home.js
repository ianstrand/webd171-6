import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = ({objects}) => {
  
  const [atxt] = useState('Please visit our about page!');
  const [btxt] = useState('Please visit our blog!');
  const [ctxt] = useState('Please visit our contact page!');

  return (
    <HelmetProvider>
      <div className="main-container pb-5">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Container className="pb-5">
          <Row>
            <Col className="pt-4">
              <h3 className="py-5">Welcome to our website!</h3>
              <Jumbotron>
                <h2>Title for {objects[2].title}</h2>
                <p>{btxt}</p>
                <p> 
                  <Link className="btn btn-primary" to={objects[2].link}>{objects[2].title}</Link> 
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>{objects[1].title}</Card.Header>
                <Card.Body>
                  <Card.Title>Title for {objects[1].title}</Card.Title>
                  <Card.Text>{atxt}</Card.Text>
                  <Link className="btn btn-primary" to={objects[1].link}>{objects[1].title}</Link> 
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>{objects[3].title}</Card.Header>
                <Card.Body>
                  <Card.Title>Title for {objects[3].title}</Card.Title>
                  <Card.Text>{ctxt}</Card.Text>
                  <Link className="btn btn-primary" to={objects[3].link}>{objects[3].title}</Link> 
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </HelmetProvider>
  );
}

export default Home;