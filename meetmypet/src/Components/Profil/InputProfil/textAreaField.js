import React from 'react'
import { TextArea } from 'semantic-ui-react'

const TextAreaExample = ({ placeholder, value, onChange, name }) => {

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
    return(
  <div className="profil-card-info-textArea">
    <label
          // htmlFor={inputId}
          className="profil-card-info-item-label"
        >
          {placeholder}
    </label>
    <TextArea placeholder={placeholder} className="profil-card-info-textArea-field" value={value} onChange={handleChange} name={name}/>
  </div>
)
}

export default TextAreaExample