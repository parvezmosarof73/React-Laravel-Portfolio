import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="w-100" src="https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?w=1380&t=st=1673621967~exp=1673622567~hmac=a22a1aa83bb393f823b06d98570fbb00a768330e53664c3341cc36cefcf6f104" alt=""/>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceNameTitle">Project Title</h2>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate dolor illum magni quia, quod? Accusantium amet aperiam blanditiis earum inventore itaque neque, odit possimus recusandae reiciendis rem veniam voluptas!</p>
                            <ul>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            </ul>
                            <Button variant="primary"><Link className="link-style" to="">Live Preview</Link></Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;