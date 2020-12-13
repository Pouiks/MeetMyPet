// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  inputName,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;
  
  return (
    <div className="profil-card-photo-item">
      <label
        htmlFor={inputId}
        className="profil-card-photo-item-label"
      >
        {placeholder}
      </label>
      <input
        // React - state
        ref={inputName}
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="profil-card-photo-item-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// == Export
export default Field;