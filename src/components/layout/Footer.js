import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-16 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="mailto:extensionsalpha@gmail.com">Email: primesenderextension@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Support</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="/feature-request">Feature Request</a>
          </li>
          <li>
            <a href="/help-us-improve">Help us Improve</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Legal</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
