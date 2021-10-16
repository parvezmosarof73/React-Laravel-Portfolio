import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";

class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
        }
    }
    
    onScroll=()=>{
        if (window.scrollY>100) {
            this.setState({navBarTitle:'navTitleScroll'});
        }else if (window.scrollY<100) {
            this.setState({navBarTitle:'navTitle'});
        }
    };

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }



    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid={true}>
                        <Navbar.Brand className={this.state.navBarTitle} href="#">Parvez Mosarof</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="#">HOME</Nav.Link>
                                <Nav.Link href="#">SERVICE</Nav.Link>
                                <Nav.Link href="#">COURSE</Nav.Link>
                                <Nav.Link href="#">PORTFOLIO</Nav.Link>
                                <Nav.Link href="#">ABOUT</Nav.Link>
                                <Nav.Link href="#">CONTACT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;