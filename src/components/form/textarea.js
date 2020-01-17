import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  labelVisible,
  label,
  id,
  name,
  required = false,
  rows = 3,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <label htmlFor={id} className="w-full px-2">
      <span className={`${labelVisible ? 'text-sm font-semibold' : 'sr-only'}`}>
        {label}
        {required && <span className="ml-1 text-red-700">*</span>}
      </span>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={handleChange}
        className="w-full px-3 py-1 bg-white border border-white border-gray-300 rounded appearance-none focus:border-gray-500 focus:outline-none focus:shadow"
      />
    </label>
  );
};

TextArea.propTypes = {
  labelVisible: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextArea;
