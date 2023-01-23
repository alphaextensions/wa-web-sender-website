import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import ws from "../../svg/medium.png";

const Layout = ({ children }) => {
  const title =
    'Prime Sender | Free Software to grow business';
  const description =
    'The highest rated business extension on google chrome store to enhance your buisness by broadcasting messages along with attachments.';
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
