import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import ws from "../../svg/medium.png";

const Layout = ({ children }) => {
  const title =
    'Prime Sender | Free Whatsapp Software to grow business';
  const description =
    'Send unlimited free whatsapp messages and engage your clients. A tool for business owners for bulk messaging and broadcasting along with attachments to saved and unsaved contacts.';
  return (
    <>
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
        <Header />
      <main className="text-gray-900">
          {children}
      </main>
        <Footer />
    </>
  );
};

export default Layout;
