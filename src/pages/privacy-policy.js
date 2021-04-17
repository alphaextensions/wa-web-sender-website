import React from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';


function PrivacyPolicy() {
    const title =
        'Privacy Policy | WA Web Sender';
    const description =
        'Privacy Policy for WA Web Sender';
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
                <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>Privacy Policy</h1>
                <p>
                    <strong>Is it safe to use the extension?</strong><br/>
                    Chrome store extension codes are reviewed manually by Google team, if an extension is danger on user privacy, or goes against the terms of use, they would take it down immediately. Yes, It is safe.<br/><br/>

                    <strong>Is my phone number exposed to any third parties?</strong><br/>
                    •	Not being sold to third parties, outside of the /approved use cases/<br/>
                    •	Not being used or transferred for purposes that are unrelated to the item's core functionality<br/>
                    •	Not being used or transferred to determine creditworthiness or for lending purposes<br/><br/>

                    <strong>Are my conversations or contacts exposed to any third parties?</strong><br/>
                    No, the excel sheet of numbers you upload directly reflects all the data onto the extension without saving anything. Your conversations are completely secure as per WhatsApp guidelines and as far as the data part is concerned, it is covered in the previous question
                </p>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default PrivacyPolicy;