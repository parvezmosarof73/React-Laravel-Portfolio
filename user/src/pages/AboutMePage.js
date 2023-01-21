import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class AboutMePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pageTitle="About Me"/>
                <AboutMe/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutMePage;