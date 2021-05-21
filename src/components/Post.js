import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Post = ({ post }) => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <Container className="py-5 main-container">
        <Row>
          <Col className="pt-4">
            <article className="post container">
    	        <h1>{post.title}</h1>
    	        <div className="py-4">{post.content}</div>
    	        <Link to="/blog">Return to Blog</Link>
            </article>
          </Col>
  		  </Row>
  	  </Container>
    </div>
  </HelmetProvider>
);

export default Post;