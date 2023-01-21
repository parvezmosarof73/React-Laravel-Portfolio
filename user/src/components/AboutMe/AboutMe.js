import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutMe extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h4 className="serviceNameTitle">Who I Am</h4>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda corporis cupiditate debitis, dolor ducimus earum eius eos et ex nemo obcaecati officiis perspiciatis qui quisquam quod sequi voluptas.</p>

                            <h4 className="serviceNameTitle">My Mission</h4>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda corporis cupiditate debitis, dolor ducimus earum eius eos et ex nemo obcaecati officiis perspiciatis qui quisquam quod sequi voluptas.</p>

                            <h4 className="serviceNameTitle">My Vision</h4>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda corporis cupiditate debitis, dolor ducimus earum eius eos et ex nemo obcaecati officiis perspiciatis qui quisquam quod sequi voluptas.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutMe;