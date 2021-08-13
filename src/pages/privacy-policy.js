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
                    •	Not being sold to third parties, outside of the <a href="https://developer.chrome.com/docs/webstore/program_policies/#limited_use">approved use cases</a><br/>
                    •	Not being used or transferred for purposes that are unrelated to the item's core functionality<br/>
                    •	Not being used or transferred to determine creditworthiness or for lending purposes<br/><br/>

                    <strong>Are my conversations or contacts exposed to any third parties?</strong><br/>
                    No, the excel sheet of numbers you upload directly reflects all the data onto the extension without saving anything. Your conversations are completely secure as per WhatsApp guidelines and as far as the data part is concerned, it is covered in the previous question<br/><br/>

                    For users reaching us via WA Web Sender - Sheet Add-on on Google Marketplace, we do not store any of the data on the spreadsheet. When you upload a copy of you spreadsheet on our extension, the data is reflected on the extension. Even after your usage of the extension, we do not store any data from the sheet.

                    <strong>What all data do we collect?</strong><br/>
                    We just need minimal data for tracking purpose to resolve bugs if any, on the extension, to update the user and for basic analytics. We collect your email and the events performed on the extension. All this information is not sold to any third parties<br/><br/>
                </p>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default PrivacyPolicy;