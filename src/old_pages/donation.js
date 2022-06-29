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
        'Donation | Web Sender';
    const description =
        'Donation for Web Sender';
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
                <div style={{width: '160px', margin: '24px auto 8px'}}
                    dangerouslySetInnerHTML={{ __html: razorpay }}
                />
                <div style={{fontSize: '10px', textAlign: 'center'}}>For Indian Users</div>
                <div style={{clear: "both"}}></div>
                <div style={{width: '160px', margin: '24px auto 8px'}}>
                    <a href="https://paypal.me/wawebsender" target="_blank" style={{display: 'inline-block', border: '1px solid black',padding: '12px 24px'}}><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"/></a>
                </div>
                <div style={{clear: "both"}}></div>
                <div style={{fontSize: '10px', textAlign: 'center'}}>For International Users</div>
                <div style={{clear: "both"}}></div>
                <div style={{fontSize: '10px', textAlign: 'center', marginTop: '24px'}}>Not able to Donate <a href="https://web.whatsapp.com/send?phone=919175419148&text=Hi,+I+am+not+able+to+donate" target="_blank">Contact Us</a></div>
                <div style={{fontSize: '10px', textAlign: 'center', marginTop: '32px', fontWeight: 'bold'}}><i>Note : Donation is completely optional. It does not enable any extra features. Our software is completely free</i></div>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default Donation;