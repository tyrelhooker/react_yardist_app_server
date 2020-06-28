import React, { useState, useEffect} from 'react';
import SearchPlantForm from './components/SearchPlantForm';
import SearchResultPlants from './components/SearchResultPlants';
import './App.css';

// TODO: Reconfigure app to use localStorage to set myPlants
function App() {
  const [plants, setPlants] = useState([]);
  // TODO: Create myPlants to hold saved plants from the API call
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setErrors] = useState(null);

  const fetchData = async () => {
    const result = await fetch("/api/test")
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
        // console.log(error);
      }
    )
    // .then(() => console.log(isLoaded))
  }

  return (
    <div className='App'>
      <SearchPlantForm onNewPlantFetch={fetchData} />
      <SearchResultPlants fetchedPlants={plants} />
    </div>
  )

  // useEffect(() => {
  //   fetchData();
  //   // .then(() => {
  //   //   console.log(isLoaded)
  //   //   console.log(plants)})
  //   }, []);


  // if (error) {
  //   return <div>Error: {error.message}</div>
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>
  // } else {
  //   return (
  //     <div>
  //       {console.log(plants.myPlants.map((item) => item))}
  //       <ul>
  //         {plants.myPlants.map((item) => 
  //           <li key={item.id}>
  //             {item.common_name}

  //             <ul>
  //               {Object.entries(item.specifications).map(([name, value]) => 
  //                   // {console.log([name, value])}
  //                 <li key={item.id}>
  //                   {( value === null || typeof value !== 'object' ) ?
  //                   `${name} :  ${value}` : `${name} : ${value.ft}`}
  //                 </li>
  //               )}
  //             </ul>
              
  //           </li>
  //         )}
  //       </ul>
  //     </div>
  //   );
  // }


}

export default App;
