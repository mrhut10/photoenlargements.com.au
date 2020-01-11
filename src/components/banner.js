import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ children }) => {
  return (
    <article className="py-6 mt-12 text-2xl font-bold text-center uppercase bg-black font-display text-gold">
      {children}
    </article>
  );
};

Banner.propTypes = {
  children: PropTypes.node,
};

export default Banner;
