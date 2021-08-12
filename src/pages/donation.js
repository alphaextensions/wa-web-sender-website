import React, {Component} from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';

let razorpay = `
<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HjwCyDK6jHiKUN" async> </script> </form>
`;

function Donation() {
    const title =
        'Doation | WA Web Sender';
    const description =
        'Donation for WA Web Sender';
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
                <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>Donation</h1>
                <p>
                    Our extension has been free since inception. We believe features like sending personalized messages, adding attachments are extremely essential for businesses to grow.
                    We strive hard to give you the best service along with customer support.
                    Thanks for showing us your support ❤️
                </p>
                <div style={{width: '160px', margin: '24px auto'}}
                    dangerouslySetInnerHTML={{ __html: razorpay }}
                />
                <div style={{fontSize: '10px', textAlign: 'center'}}>Not able to Donate <a href="https://web.whatsapp.com/send?phone=919175419148&text=Hi,+I+am+not+able+to+donate" target="_blank">Contact Us</a></div>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default Donation;