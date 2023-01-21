import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class RefundPolicy extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda corporis cupiditate debitis, dolor ducimus earum eius eos et ex nemo obcaecati officiis perspiciatis qui quisquam quod sequi voluptas.</p>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda corporis cupiditate debitis, dolor ducimus earum eius eos et ex nemo obcaecati officiis perspiciatis qui quisquam quod sequi voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae blanditiis deleniti esse eveniet facilis fuga fugiat hic iste nisi nostrum numquam perferendis quae quasi saepe sit, sunt, vel voluptatum.</p>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda corporis cupiditate debitis, dolor ducimus earum eius eos et ex nemo obcaecati officiis perspiciatis qui quisquam quod sequi voluptas.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundPolicy;