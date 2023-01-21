import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsCondition from "../components/TermsCondition/TermsCondition";

class TermsConditionPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Conditions"/>
                <PageTop pageTitle="Terms & Conditions"/>
                <TermsCondition/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsConditionPage;