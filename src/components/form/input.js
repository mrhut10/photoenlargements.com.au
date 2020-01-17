import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  labelVisible,
  label,
  id,
  name,
  required = false,
  type = 'text',
  placeholder,
  value,
  autoComplete,
  margin,
  handleChange,
}) => {
  return (
    <label
      htmlFor={id}
      className={`w-full px-2${margin ? ' mt-3 sm:mt-0' : ''}`}
    >
      <span className={`${labelVisible ? 'text-sm font-semibold' : 'sr-only'}`}>
        {label}
        {required && <span className="ml-1 text-red-700">*</span>}
      </span>
      <input
        id={id}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={handleChange}
        className={`${
          labelVisible ? 'mt-1 ' : ''
        }w-full px-3 py-1 border border-gray-300 rounded border-white appearance-none bg-white focus:border-gray-500 focus:outline-none focus:shadow`}
      />
    </label>
  );
};

Input.propTypes = {
  labelVisible: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
  margin: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default Input;
