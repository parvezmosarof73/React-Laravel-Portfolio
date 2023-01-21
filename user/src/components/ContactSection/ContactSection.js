import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="serviceNameTitle">Quick Connect</h5>

                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Your Name:</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription">Email Address:</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription">Your Massage:</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button className="mt-2" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>

                        <Col lg={6} md={6} sm={12} >
                            <h5 className="serviceNameTitle mb-3">Discuss Now</h5>
                            <p className="serviceDescription m-0">Room: #215, Madar Bux Hall, Rajshahi University, Rajshahi-6205</p>
                            <p className="serviceDescription m-0"><FontAwesomeIcon icon={faEnvelope} /> ParvezMosarof@gmail.com</p>
                            <p className="serviceDescription m-0"><FontAwesomeIcon icon={faPhone} /> +880 1788-638056</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;