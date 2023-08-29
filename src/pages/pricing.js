import React from 'react';
import { Helmet } from 'react-helmet';
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';
import Pricing from '../components/pricing/pricing';



function PricingPage() {
    const title =
        'Pricing | Prime Sender';
    const description =
        'Pricing for Prime Sender';
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
                    <Pricing />
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default PricingPage;
