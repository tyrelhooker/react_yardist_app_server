import React, { useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [plants, setPlants] = useState({ myPlants: []});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setErrors] = useState(null);

  const fetchData = async () => {
    const result = await fetch("/api/test")
    .then(result => result.json())
    .then(
      (result) => {
        console.log(result)
      },
      (error) => {
        setErrors(error);
        console.log(error);
      }
    )
  }

useEffect(() => {
  fetchData();
}, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
