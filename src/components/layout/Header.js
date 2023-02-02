import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { Link } from "react-scroll";


//header for index page

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <a href="/" className="flex items-center text-2xl" style={{ color: '#000' }}>
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        <div style={{color:'#62d9c7'}}>
        Prime Sender
        </div>
      </a>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex mt-4 sm:mt-0">
          {/* <a className="px-3" href="/how-to-use">
            How to Use
          </a>
          <AnchorLink className="px-3" href="#features">
            Features
          </AnchorLink>
          <AnchorLink className="px-3" href="#services">
            Services
          </AnchorLink>
          <a className="px-3" href="/faqs">
            FAQs
          </a> */}
          <Link className="px-3 howToUse" to="HowToUse" spy={true} smooth={true} offset={110} duration={500} style={{cursor:"pointer"}}>
            How to Use
          </Link>
          <a className="px-3" href="/pricing">
            Pricing
          </a>
          <a className="px-3" href="/blog">
            Blogs
          </a>
          {/* <a className="px-3" href="https://primesender.blogspot.com/">
            Blogs
          </a> */}
        </div>
        <div className="hidden md:block">
          <Button
            className="text-sm"
            link="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia?src=web-head"
          >
            Download Now
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
