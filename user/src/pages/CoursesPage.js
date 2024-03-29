import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/AllCourses/AllCourses";

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses"/>
                <PageTop pageTitle="All Courses"/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesPage;