import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

// const openLink = function(link) {
//   window.open(link);
// };
//
// const open_link = ({link}) => {
//   window.open(link);
// };

const Button = ({ children, className = '', size, link }) => {
  return (
    <a
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        rounded
        text-white
    `}
      href={link}
    >
      {children}
    </a>
  );
};

export default Button;
