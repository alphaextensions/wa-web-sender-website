import React from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';


function TermsOfService() {
    const title =
        'Terms of Service | Web Sender';
    const description =
        'Terms of Service for Web Sender';
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
                <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>Terms of Service</h1>
                <p>
                    We strongly encourage you to use it correctly.<br/><br/>
                    Web Sender marketing features are not intended to mass message people or spam them, it is intended to send congratulations, greetings and special invitation messages to family, friends and people you know, please use responsibly. <br/><br/>
                    If you decide to misuse these features, you might put your WhatsApp account at risk of permanently getting blocked.<br/><br/>
                    We have the sole right to update/change/remove the pricing plans for the extension according to our necessity.<br/><br/>

                    We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).<br/><br/>

                    We provide a trial with the premium services. So once the premium service is purchased, we do not allow refunds.<br/><br/>

                    We have the sole right to update/change the Terms of Service for the extension according to our necessity.<br/><br/>
                </p>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default TermsOfService;