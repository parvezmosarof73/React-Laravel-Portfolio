import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../assets/images/web.svg';
import mobileLogo from '../../assets/images/mobile.svg';
import graphicLogo from '../../assets/images/graphics.svg';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="text-uppercase serviceMainTitle">My Services</h1>
                    <Row>
                        <Col xl={4} lg={4} md={6} sm={12}>
                            <div className="serviceCard">
                                <img src={webLogo} alt=""/>
                                <h2 className="serviceNameTitle">Web Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates.</p>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12}>
                            <div className="serviceCard">
                                <img src={mobileLogo} alt=""/>
                                <h2 className="serviceNameTitle">Mobile Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates.</p>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12}>
                            <div className="serviceCard">
                                <img src={graphicLogo} alt=""/>
                                <h2 className="serviceNameTitle">Graphic Design</h2>
                                <p className="serviceDescription p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;