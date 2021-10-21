import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {Technology:'Html', Projects:100},
                {Technology:'CSS', Projects:70},
                {Technology:'Javascript', Projects:50},
                {Technology:'SQL', Projects:100},
                {Technology:'Bootstrap', Projects:85},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:95},
                {Technology:'PHP', Projects:90},
                {Technology:'Laravel', Projects:100},
            ]
        }
    }
    render() {
        var blue="rgba(0,115,230,0.8)";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="text-uppercase serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify serviceDescription">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus inventore quo repellendus voluptates. Culpa dolore facere facilis illo nulla odit quia voluptatum? Alias dolore doloribus eius inventore vitae voluptates.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;