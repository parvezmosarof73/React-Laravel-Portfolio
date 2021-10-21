import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import whiteLogo from '../../assets/images/navlogo.svg';
import blueLogo from '../../assets/images/navlogoScroll.svg';

class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem"
        }
    }
    
    onScroll=()=>{
        if (window.scrollY>100) {
            this.setState({
                navBarTitle:'navTitleScroll',
                navBarLogo:[blueLogo],
                navBarBack:'navBackgroundScroll',
                navBarItem:'navItemScroll',

            });
        }else if (window.scrollY<100) {
            this.setState({
                navBarTitle:'navTitle',
                navBarLogo:[whiteLogo],
                navBarBack:'navBackground',
                navBarItem:'navItem',

            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }



    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant="dark">
                    <Container fluid={true}>
                        <Navbar.Brand className={this.state.navBarTitle} href="#"><img src={this.state.navBarLogo}/> Parvez Mosarof</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarItem} href="#">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">SERVICE</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">COURSE</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">ABOUT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#">CONTACT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;