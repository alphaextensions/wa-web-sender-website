import React from 'react';
import { Helmet } from 'react-helmet';
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';
import Pricing from '../components/pricing/pricing';



function TransactionSucess() {
    const title =
        'Success | Web Sender';
    const description =
        'Success for Web Sender';
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
                <div style={{fontSize: '30px'}}>
                    Congrats! You have successfully purchased WS Premium
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default TransactionSucess;
