import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="text-uppercase serviceMainTitle">Our Courses</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="w-100" src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?w=1380&t=st=1673625418~exp=1673626018~hmac=239b21fada7f42b4e0ba289a27da5fe10ca58c3819e511f9096d2816384bd793" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">Some quick example text to build on the card title and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a className="text-justify courseButton" href="">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="w-100" src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?w=1380&t=st=1673625418~exp=1673626018~hmac=239b21fada7f42b4e0ba289a27da5fe10ca58c3819e511f9096d2816384bd793" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">Some quick example text to build on the card title and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a className="text-justify courseButton" href="">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="w-100" src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?w=1380&t=st=1673625418~exp=1673626018~hmac=239b21fada7f42b4e0ba289a27da5fe10ca58c3819e511f9096d2816384bd793" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">Some quick example text to build on the card title and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a className="text-justify courseButton" href="">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row className="p-2">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="w-100" src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?w=1380&t=st=1673625418~exp=1673626018~hmac=239b21fada7f42b4e0ba289a27da5fe10ca58c3819e511f9096d2816384bd793" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">Some quick example text to build on the card title and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a className="text-justify courseButton" href="">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;