import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";

class ProjectsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Projects"/>
                <PageTop pageTitle="All Projects"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectsPage;