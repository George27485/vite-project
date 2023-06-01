import { useState } from 'react'
import './App.css';
import {puppyList} from './data.js';

function App() {
  console.log( puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
   
    


  function clickHandle(){

  

    }
    return (
      <div>
        {puppies.map((puppy) => {
          return (
            <p onClick={()=>{console.log("puppy id: ", puppy.id)}} key ={puppy.id}>
              {puppy.name}
            </p>
          );
          
        })}
      </div>
    );
  
      }
      

export default App
