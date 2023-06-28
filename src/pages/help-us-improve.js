import React, {useState,useEffect} from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

function HelpUsImprove() {
    const [userTrialDays,setUserTrialDays] = useState(null);
    const [userNumber,setUserNumber] = useState(null);

    const getTrialDays = () => {
        const urlParams = typeof window !== 'undefined' ? window.location.search : '';
        const params = new URLSearchParams(urlParams);
        if(params.size > 0){
            const trialDays = params.get('trialDays');
            const number = params.get('number');
            setUserTrialDays(trialDays);
            setUserNumber(number);
            if (trialDays || number) {
                window.history.replaceState(null, '', window.location.pathname);
            }
        }
    };

    useEffect(() => {
        getTrialDays();
        if(userTrialDays!==null && userNumber!==null){
            trackCustomEvent({
                category: 'Extension',
                action: 'Extension Uninstallation',
                label: userNumber,
                value: Number(userTrialDays)
              });
        }
    }, [userTrialDays]);

    const title =
        'Help us Improve | Prime Sender';
    const description =
        'Submit your feedback to help us improve Prime Sender';
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
            <SmallHeader />
            <section className="container mx-auto px-8" >
                <h1 style={{ fontSize: '28px', textAlign: 'center', margin: '24px 0px' }}>Help us Improve</h1>
                <p style={{ textAlign: 'center', marginBottom: '36px' }}>
                    We strive to give you the best service possible but maybe there are certain things we need to catch up on.
                </p>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdAACp4FEHgEkv3o1T1fMMsY76pKv3KUUqp5wV5LT3gTEuhmQ/viewform?embedded=true" height="1080" style={{ margin: 'auto', width: '100%', maxWidth: '840px' }} 
                frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                <p style={{ marginTop: '40px' }}>
                    <strong>If you had a change of heart somehow and want to know how Prime Sender works quickly in 3 steps, here :</strong><br />
                    <br />
                    1. Enter the numbers you want to send the message to, separated by comma<br />

                    2. Enter the message that you'd like to send. You could also add an attachment.<br />
                    Click on 'Add Attachment' >> Click on 'Image/Video/Document' >> Select the file you'd like to send >> The first message would be sent to you itself >> Once it is sent, open the extension and click on 'Send Message'. The messages along with the file will be sent one by one.<br />

                    3.Download the delivery report by clicking on 'Delivery Report' to view the delivery status of the messages and the attachment sent
                </p>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default HelpUsImprove;