import React from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from '../svg/medium.png';
import a1 from '../svg/1a.png';
import a2 from '../svg/1b.png';
import b1 from '../svg/2a.png';
import b2 from '../svg/2b.png';
import c1 from '../svg/3a.png';
import c2 from '../svg/3b.png';
import c3 from '../svg/3c.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';

function HowToUse() {
    const title =
        'How to use Prime Sender';
    const description =
        'How to use Whatsapp tool to broadcast messages and get better engagement with customers.';
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
                <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>How to Use</h1>
                <iframe
                    className="youtube-iframe"
                    style={{height: '364px',
                        width: '100%',
                        maxWidth: '640px',
                        margin: 'auto',
                        padding: '24px'}}
                    src="https://drive.google.com/file/d/1P7R7I-53Pn6GCG9O1sPAU5YLo5l6938Z/preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Prime Sender Demo"
                ></iframe>
                <div style={{fontSize: '16px'}}>
                Prime Sender is a free chrome extension for Web WhatsApp which allows businesses to connect with their customers efficiently. It is extremely easy to use.
                <br/><br/>
                Here's how to use it :<br/><br/><br/>

                    <strong>1. Enter the numbers you want to send the message to</strong><br/><br/>
                 <img src={a1} alt="." />
                    <br/>You can either directly enter the numbers separated by comma or upload a csv of numbers. The format of the numbers include the country code without '+'.  Here's how a template of csv looks like :<br/>
                <img src={a2} alt="." />


                    <br/>Here 91 is the country code of India. The heading of the column should be 'Contact Numbers'.<br/>
                    Download template file from <a href="/temp-excel-file">here</a><br/><br/><br/>

                    <strong>2. Enter the message that you'd like to send</strong><br/><br/>

                    <img src={b1} alt="." />

                    <br/>There are options for text formatting as well. You could add an attachment like an image, video or a document.<br/><br/>

                    <img src={b2} alt="." />


                    <br/>Click on 'Add Attachment'  >>  Click on 'Image/Video/Document'  >>  Select the file you'd like to send >>   The first message would be sent to you itself   >>   Once it is sent, open the extension and click on 'Send Message'. The messages along with the file will be sent one by one.<br/><br/><br/>

                    <strong>3. Download the delivery report by clicking on 'Delivery Report' to view the delivery status of the messages and the attachment sent</strong><br/><br/>



                    <strong>Additional features</strong><br/><br/>

                1. Option to download contacts from a group - You can download all the unknown contacts from a group you are a part of by opening the group and clicking on 'Download Group Contacts' on the extension<br/><br/>

                    <img src={c1} alt="." />


                    <br/>2. Option to add a time gap between messages - You can choose to send your messages to your contacts at an interval. Enter the gap in seconds you want between messages sent to consecutive contacts.<br/><br/>

                    <img src={c2} alt="." />

                    <br/>3. Option to 'Live Chat' with our representative<br/><br/>

                    <img src={c3} alt="." />
                <br/><br/>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default HowToUse;