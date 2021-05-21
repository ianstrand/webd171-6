import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Blog = ({ posts }) => (
  <HelmetProvider>
  	<div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Container className="py-5 main-container">
        <Row>
          <Col className="pt-4">
            <h1>This is our blog.</h1>
            <Link to="/blog">Blog</Link>
            <article className="py-5 posts container">
              <h1>Posts</h1>
                <ul>
                	{posts.length < 1 && ( <li key="empty">No posts yet!</li> )}
              	  	{posts.map(post => ( 
              	  		<li key={post.id}> 
              	  			<Link to={`/post/${post.slug}`}>{post.title}</Link>
              	    	</li>
              	    ))}
                </ul>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  </HelmetProvider>
);

export default Blog;