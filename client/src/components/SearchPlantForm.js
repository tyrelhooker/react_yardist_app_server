import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// import { findAllByTitle } from '@testing-library/react';
// import '../stylesheets/AddPlantForm.scss';

const SearchPlantForm = ({ onNewPlantFetch=f=>f }) => {
  const plantNameInput = useRef();

  const submit = e => {
    e.preventDefault();
    onNewPlantFetch(plantNameInput.current.value);
    plantNameInput.current.value='';
    plantNameInput.current.focus();
  };

  return (
    <form className='search-plant' onSubmit={submit}>
      <label>
        Search by plant name:
        <input
          ref={plantNameInput}
          type='text'
          placeholder={`scientific(preferred) or common name`}
          required
        />
      </label>
      
      <button>SEARCH</button>
    </form>
  )
}

SearchPlantForm.propTypes = {
  onNewPlantFetch: PropTypes.func
};

export default SearchPlantForm;