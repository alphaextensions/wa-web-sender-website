import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import ws from "../../svg/medium.png";

const Layout = ({ children }) => {
  const title =
    'WA Web Sender | Free Whatsapp Software | Send messages on whatsapp to your customers and grow your business. Simple and completely free';
  const description =
    'Chrome Extension for sending WhatsApp bulk messages and engage your clients. A perfect tool for all business owners. Send WhatsApp messages along with attachments to saved and unsaved contacts for free.';
  return (
    <>
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
      <Header />
      <main className="text-gray-900">
        {children}
        {/*<div*/}
        {/*  style={{*/}
        {/*    width: '80px',*/}
        {/*    height: '80px',*/}
        {/*    right: 0,*/}
        {/*    bottom: 0,*/}
        {/*    background: '#000',*/}
        {/*    position: 'fixed',*/}
        {/*    display: 'block'*/}
        {/*  }}*/}
        {/*/>*/}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
