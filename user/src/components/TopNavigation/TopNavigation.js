import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import whiteLogo from '../../assets/images/navlogo.svg';
import blueLogo from '../../assets/images/navlogoScroll.svg';
import { Link } from "react-router-dom";

class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant:"dark",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            title:props.title,
        }
    }
    
    onScroll=()=>{
        if (window.scrollY>100) {
            this.setState({
                navVariant:'light',
                navBarTitle:'navTitleScroll',
                navBarLogo:[blueLogo],
                navBarBack:'navBackgroundScroll',
                navBarItem:'navItemScroll',

            });
        }else if (window.scrollY<100) {
            this.setState({
                navVariant:'dark',
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
                <title>{this.state.title}</title>
                <Navbar variant={this.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Container fluid={true}>
                        <Navbar.Brand className={this.state.navBarTitle} href="/"><img src={this.state.navBarLogo}/> Parvez Mosarof</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link>
                                    <Link className={this.state.navBarItem} to="/">HOME</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className={this.state.navBarItem} to="/service">SERVICE</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className={this.state.navBarItem} to="/courses">COURSE</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className={this.state.navBarItem} to="/projects">PORTFOLIO</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className={this.state.navBarItem} to="/about">ABOUT</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className={this.state.navBarItem} to="/contact">CONTACT</Link>
                                </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;