import React from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';

function FeatureRequest() {
    const title =
        'Feature Request | Web Sender';
    const description =
        'Submit your request for adding new features to Web Sender';
    return (
        <React.Fragment>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="title" property="og:title" content={title} />
                <meta name="description" content={description} />
                <link rel="icon" type="image/png" href={ws} />
                <meta name="image" property="og:image" content={ws} />
                <meta name="image" content={ws} />
            </Helmet>
            <SmallHeader/>
            <section className="container mx-auto px-8" >
                <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>Feature Request</h1>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScexPaMhkIuM4j_8qo1FRA40BUatLfeGZVD_SKF9Gcbgla1fw/viewform?embedded=true"
                    height="760" style={{margin: 'auto', width: '100%', maxWidth: '840px'}} frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                </iframe>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default FeatureRequest;