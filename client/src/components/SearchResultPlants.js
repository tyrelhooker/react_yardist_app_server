import React from 'react';

const SearchResultPlants = ({ fetchedPlants }) => {
  // console.log(fetchedPlants);
  
  return (
    <div className='fetched-plants'>
      {fetchedPlants.map(plant => 
        // console.log({plant})
        <section className='plant' key={plant.id}>
          <h2>{plant.scientific_name}</h2>
          <h3>{plant.common_name}</h3>
        </section>
      )}
    
    </div>
    )
}
export default SearchResultPlants;