import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topFixedBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center text-uppercase">
                                    <h1 className="topTitle">Software Engineer</h1>
                                    <h4 className="topSubTitle">Mobile & Web Application</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;