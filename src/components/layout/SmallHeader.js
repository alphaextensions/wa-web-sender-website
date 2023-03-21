import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';


//header for pages other than index

const SmallHeader = () => (
  <header className="sticky top-0 bg-white shadow" style={{zIndex: "100"}}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <a href="/" className="flex items-center text-2xl" style={{ color: '#000' }}>
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        <div style={{color:'#009a88'}}>
        Prime Sender
        </div>
      </a>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex mt-4 sm:mt-0">
          {/* <a className="px-4" href="/how-to-use">
                        How to Use
                    </a>
                    <a className="px-4" href="/">
                        Main Menu
                    </a>
                    <a className="px-4" href="/faqs">
                        FAQs
                    </a> */}
          {/* <a className="px-3" href="/">How to Use</a> */}
          <a
            className="px-3"
            href="/"
            onClick={() => {
              localStorage.setItem('howToUse', 1);
            }}
          >
            How to Use
          </a>
          <a className="px-3" href="/pricing">
            Pricing
          </a>
          <a className="px-4" href="/blog">
            Blogs
          </a>
        </div>
        <div className="hidden md:block">
          <Button
            className="text-sm"
            link="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia"
          >
            Download Now
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default SmallHeader;
