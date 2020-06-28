import React, { useState, useEffect} from 'react';
import SearchPlantForm from './components/SearchPlantForm';
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
        // console.log(result.main_species)
        setIsLoaded(true);
        setPlants({ myPlants: [result.main_species] }); 
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
