import React, {Component, Fragment} from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutMePage from "../pages/AboutMePage";
import ContactPage from "../pages/ContactPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import TermsConditionPage from "../pages/TermsConditionPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/service" element={<ServicePage/>}/>
                    <Route path="/courses" element={<CoursesPage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/about" element={<AboutMePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/refund" element={<RefundPolicyPage/>}/>
                    <Route path="/terms-condition" element={<TermsConditionPage/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
                    <Route path="/project-details" element={<ProjectDetailsPage/>}/>

                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;