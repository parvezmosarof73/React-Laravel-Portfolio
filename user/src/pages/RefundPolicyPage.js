import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";

class RefundPolicyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy"/>
                <RefundPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPolicyPage;