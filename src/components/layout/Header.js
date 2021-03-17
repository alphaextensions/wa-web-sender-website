import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
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
          <AnchorLink className="px-4" href="#features">
            Features
          </AnchorLink>
          <AnchorLink className="px-4" href="#services">
            Services
          </AnchorLink>
          <a className="px-4" href="/faqs">
            FAQs
          </a>
          <a className="px-4" href="https://wawebsender.blogspot.com">
            Blogs
          </a>
        </div>
        <div className="hidden md:block">
          <Button className="text-sm" link="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia">Get Started</Button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
