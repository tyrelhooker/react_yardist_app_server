import React, { useState, useEffect} from 'react';
import SearchPlantForm from './components/SearchPlantForm';
import SearchResultPlants from './components/SearchResultPlants';
import './stylesheets/App.scss';

// TODO: Reconfigure app to use localStorage to set myPlants
function App() {
  const [plants, setPlants] = useState([]);
  // TODO: Create myPlants to hold saved plants from the API call
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setErrors] = useState(null);

  const fetchData = async (plantNameInput) => {
    console.log(plantNameInput);
    const url = `/api/plantName/${plantNameInput}`;
    
    const result = await fetch(url)
    .then(result => result.json())
    .then(
      (result) => {
        console.log(result)
        setIsLoaded(true);
        setPlants(result); 
      },
      (error) => {
        setIsLoaded(true);
        setErrors(error);
      }
    )
  }

  return (
    <div className='App'>
      <SearchPlantForm onNewPlantFetch={fetchData} />
      <SearchResultPlants fetchedPlants={plants} />
    </div>
  )
}

export default App;
