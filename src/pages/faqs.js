import React from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from "../svg/medium.png";

function FAQs() {
    const title =
        'WA Web Sender | Free Whatsapp Software | Send messages on whatsapp to your customers and grow your business. Simple and completely free';
    const description =
        'Chrome Extension for sending WhatsApp bulk messages and engage your clients. A perfect tool for all business owners. Send WhatsApp messages along with attachments to saved and unsaved contacts for free.';
    return (
            <React.Fragment>
                <Helmet>
                    <html lang="en" />
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta name="title" property="og:title" content={title} />
                    <meta name="description" content={description} />
                    <meta name="description" property="og:description" content={description} />
                    <link rel="icon" type="image/png" href={ws} />
                    <meta name="image" property="og:image" content={ws} />
                    <meta name="image" content={ws} />
                </Helmet>
                <header className="sticky top-0 bg-white shadow">
                    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
                        <a href="/" className="flex items-center text-2xl" style={{color: '#000'}}>
                            <div className="w-12 mr-3">
                                <LogoIcon />
                            </div>
                            WA Web Sender
                        </a>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <div className="flex mt-4 sm:mt-0">
                                <a className="px-4" href="/">
                                    Main Menu
                                </a>
                                <a className="px-4" href="/faqs">
                                    FAQs
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <Button className="text-sm" link="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia">Get Started</Button>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="container mx-auto px-8" >
                    <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>FAQs</h1>
                    <div style={{fontSize: '20px'}}>
                        <strong>What are the FREE features?</strong>
                        <p>
                        Here are the things that you can do with the free version of the WA Web Sender without paying a single penny.<br/>
                        1.Send WhatsApp messages <strong>without saving numbers.</strong><br/>
                        2.Send <strong>unlimited</strong> WhatsApp messages<br/>
                        3.<strong>Send attachments</strong> like images, documents, etc for free to any number of contacts<br/>
                        4.Upload excel sheet of numbers and send to <strong>any country</strong><br/>
                        5.No software installation needed, just a simple chrome extension.<br/>
                        6.Download <strong>delivery report</strong> for free<br/>
                        7.Extremely simple to use<br/>
                        </p>
                    </div><br/><br/>

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
            </React.Fragment>
    );
}

export default FAQs;