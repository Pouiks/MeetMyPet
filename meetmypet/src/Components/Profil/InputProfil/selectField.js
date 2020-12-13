import React from 'react'
import { Select } from 'semantic-ui-react'

const SelectExample = ({ placeholder, options, name, onChange, value }) => {
  // Ici je viens récupérer dynamiquement la valeur sélectionée et le name du champ
  const handleChangeSelect = (data) => {
    onChange(data.value, name);
  }
  return(
  <div className="profil-card-info-item">
    <label
          className="profil-card-info-item-label"
        >
          {placeholder}
    </label>
    <Select required className="profil-card-info-item-select" placeholder={placeholder} options={options} onChange={handleChangeSelect} value={value} />
  </div>
)
  }

export default SelectExample