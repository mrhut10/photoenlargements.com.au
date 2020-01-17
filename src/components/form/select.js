import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  labelVisible,
  label,
  id,
  name,
  value,
  children,
  handleChange,
}) => {
  return (
    <label htmlFor={id} className="w-full px-2">
      <span className={`${labelVisible ? 'text-sm font-semibold' : 'sr-only'}`}>
        {label}
      </span>
      <div className={`${labelVisible ? 'mt-1' : ''} relative`}>
        <select
          className="w-full px-3 py-1 border-2 border-white rounded-none appearance-none bg-brand-blue focus:border-brand-orange focus:outline-none"
          id={id}
          name={name}
          onChange={handleChange}
          required
          value={value}
        >
          {children}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center text-white pointer-events-none">
          <svg
            className="w-5 h-5 mr-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </label>
  );
};

Select.propTypes = {
  labelVisible: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  handleChange: PropTypes.func,
};

export default Select;
