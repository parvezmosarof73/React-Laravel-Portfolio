import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube, faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection justify-content-center">
                    <Row>
                        <Col la={3} md={3} sm={6} className="p-5">
                            <h5 className="serviceNameTitle">Follow Me</h5>
                            <Link className="footerSocialIcon" to=""><FontAwesomeIcon icon={faFacebook} /> Facebook</Link>
                            <br/>
                            <Link className="footerSocialIcon" to=""><FontAwesomeIcon icon={faYoutube} /> YouTube</Link>
                            <br/>
                            <Link className="footerSocialIcon" to=""><FontAwesomeIcon icon={faGithub} /> Github</Link>
                        </Col>
                        <Col la={3} md={3} sm={6} className="p-5">
                            <h5 className="serviceNameTitle">Address</h5>
                            <p className="m-0">Room: #215, Madar Bux Hall, Rajshahi University, Rajshahi-6205</p>
                            <p className="m-0"><FontAwesomeIcon icon={faEnvelope} /> ParvezMosarof@gmail.com</p>
                            <p className="m-0"><FontAwesomeIcon icon={faPhone} /> +880 1788-638056</p>
                        </Col>
                        <Col la={3} md={3} sm={6} className="p-5">
                            <h5 className="serviceNameTitle">Information</h5>
                            <Link className="footerLink" to="/about">About Me</Link>
                            <br/>
                            <a className="footerLink" href="">My Resume</a>
                            <br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>
                        <Col la={3} md={3} sm={6} className="p-5">
                            <h5 className="serviceNameTitle">Legal</h5>
                            <Link className="footerLink" to="/refund">Refund Policy</Link>
                            <br/>
                            <Link className="footerLink" to="/terms-condition">Terms & Condition</Link>
                            <br/>
                            <Link className="footerLink" to="/privacy-policy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightText" href="">MDPARVEZ.COM &copy; 2022-2023; All Right Reserved.</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;