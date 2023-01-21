import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class Review extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 4000,
            vertical: true,
        };
        return (
            <Fragment>
                <Container className="text-center w-50">
                    <h1 className="text-uppercase serviceMainTitle">Client Says</h1>
                    <Row className="text-center">
                        <Col>
                            <Slider {...settings}>
                                <div>
                                    <Row className="justify-content-center">
                                        <Col lg={8} md={8} sm={10}>
                                            <img className="reviewImg" src="https://as2.ftcdn.net/v2/jpg/03/26/98/51/1000_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt=""/>
                                            <h3 className="reviewTitle pt-2">Parvez Mosarof</h3>
                                            <p className="reviewDescription">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.Duis mollis, est</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row className="justify-content-center">
                                        <Col lg={8} md={8} sm={10}>
                                            <img className="reviewImg" src="https://as2.ftcdn.net/v2/jpg/03/26/98/51/1000_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt=""/>
                                            <h3 className="reviewTitle pt-2">Parvez Mosarof</h3>
                                            <p className="reviewDescription">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.Duis mollis, est</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row className="justify-content-center">
                                        <Col lg={8} md={8} sm={10}>
                                            <img className="reviewImg" src="https://as2.ftcdn.net/v2/jpg/03/26/98/51/1000_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt=""/>
                                            <h3 className="reviewTitle pt-2">Parvez Mosarof</h3>
                                            <p className="reviewDescription">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.Duis mollis, est</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Review;