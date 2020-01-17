import React from 'react';
import PropTypes from 'prop-types';

const FormRow = ({ children }) => {
  return (
    <div className="flex flex-wrap mt-6 -mx-2 sm:mt-3 sm:flex-no-wrap">
      {children}
    </div>
  );
};

FormRow.propTypes = {
  children: PropTypes.node,
};

export default FormRow;
