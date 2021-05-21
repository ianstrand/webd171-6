import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = ({objects}) => {

	return (
		<footer className="text-muted text-center">
			<Container>
			    <Row className="justify-content-center pt-4 mb-2">
			        <Col md={2} className="mb-3">
			            <h6 className="text-uppercase font-weight-bold"> <Link to={objects[0].link}>{objects[0].title}</Link> </h6>
			        </Col>
			        <Col md={2} className="mb-3">
			            <h6 className="text-uppercase font-weight-bold"> <Link to={objects[1].link}>{objects[1].title}</Link> </h6>
			        </Col>
			        <Col md={2} className="mb-3">
			            <h6 className="text-uppercase font-weight-bold"> <Link to={objects[2].link}>{objects[2].title}</Link> </h6>
			        </Col>
			        <Col md={2} className="mb-3">
			            <h6 className="text-uppercase font-weight-bold"> <Link to={objects[3].link}>{objects[3].title}</Link> </h6>
			        </Col>
			    </Row>
			    <Row className="justify-content-center mb-4">
			        <Col md={8} className="mt-3">
			            <p>It is a lot of fun to work with react-bootstrap! This example is created for WEBD171, for the Fall 2020 class session.</p>
			        </Col>
			    </Row>
			    <hr />
			</Container>
			<div className="footer-copyright pt-4 pb-5">
				<Link to={objects[0].link}>&copy; 2020 My Site for WEBD171</Link>
			</div>
		</footer>
	);
}

export default Footer;