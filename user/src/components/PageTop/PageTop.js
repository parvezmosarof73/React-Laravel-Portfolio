import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPageSection p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="topPageTitle">{this.props.pageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;