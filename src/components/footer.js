import React from 'react';

const Footer = () => {
  return (
    <footer className="relative px-10 text-white bg-black">
      <div className="w-full max-w-6xl">
        © {new Date().getFullYear()}, Built with{' '}
        <a
          href="https://www.gatsbyjs.org"
          className="font-semibold hover:text-teal-600"
        >
          Gatsby
        </a>
      </div>
    </footer>
  );
};

export default Footer;
