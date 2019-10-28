import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const buttonSize = {
  small: `py-1 px-4`,
  medium: `py-2 px-6`,
  large: `py-3 px-12`,
};

const ButtonLink = ({ to, text, size = `medium` }) => {
  return (
    <Link
      to={to}
      className={`${buttonSize[size]} bg-gold font-display inline-block rounded text-black`}
    >
      {text}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
};

export default ButtonLink;
