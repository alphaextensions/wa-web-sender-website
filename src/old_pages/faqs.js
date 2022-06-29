import React from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from "../svg/medium.png";
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';

function FAQs() {
    const title =
        'FAQs | Web Sender';
    const description =
        'FAQs and Features of Web Sender';
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
                    <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>FAQs</h1>

                    <div style={{fontSize: '20px;'}}>
                        <strong>Does it work in WhatsApp’s Desktop App?</strong><br/>

                        No, it is a chrome extension and it works only on WhatsApp web on Google Chrome (Mac, Windows, and Linux).
                    </div><br/><br/>

                    <div style={{fontSize: '20px;'}}>
                        <strong>Does it Work in my Country?</strong><br/>

                        Every country in the world can use the extension.
                    </div><br/><br/>

                    <div style={{fontSize: '20px;'}}>
                        <strong>How to Send Clickable Links in through WAS?</strong><br/>

                        You can send a clickable link to anyone who<br/>
                        - Either has your number saved in his phone book<br/>
                        - Or has replied to you at least once on WhatsApp.<br/>
                    </div><br/><br/>

                    <div style={{fontSize: '20px;'}}>
                        <strong>How to Correctly Format the Numbers Column in CSV File?</strong><br/>

                        1.Select the numbers column -> Right Click -> Click on ‘Format Cells’.<br/>
                        2.Go to the ‘Number‘ category -> Go to ‘Decimal Places‘ box<br/>
                        3.Change it ‘0’ and click ‘OK’.<br/>
                        4.Verify that the numbers are now coming correctly<br/>
                    </div><br/><br/>

                    <div style={{fontSize: '20px;'}}>
                        <strong>How to send an attachment?</strong><br/>

                        1. Click on 'Add Attachment' and select the type of attachment<br/>

                        2. Select the file you want to send<br/>

                        3. Your personal whatsapp number chat would open up - send the file in the chat.<br/>

                        4. Now open the extension and click on 'Send Message'. Your file will be sent one by one to all the contacts<br/>
                    </div><br/><br/>

                    <div style={{fontSize: '20px;'}}>
                        <strong>Can I send message to people in a group separately without saving their contacts?</strong><br/>

                        Yes, you can. Here's how:<br/>

                        ​

                        1. Open the respective group and click on the extension<br/>

                        2. Click on 'Download Group Contacts' and an excel of contact numbers will be downloaded<br/>

                        3. Upload this csv and enter the message you want to send in the extension. Send!<br/>
                    </div><br/><br/>

                    <div style={{fontSize: '20px;'}}>
                        <strong>How to input numbers in an excel file?</strong><br/>

                        Add the heading as 'Contact Numbers'(without the quotes) and fill in the contact numbers along with the country code(without +) below it one by one.
                        Here is a <a href="https://docs.google.com/spreadsheets/d/1sqbZx8sbIoZBFV4lZk5LJpyirCj0_gr5pqEdZs5aGfk/edit?usp=sharing">link</a> to a sample excel file
                    </div><br/><br/>
                </section>
                <Footer/>
            </React.Fragment>
    );
}

export default FAQs;
