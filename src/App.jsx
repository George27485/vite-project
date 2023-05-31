import { useState } from 'react'
import './App.css';
import {puppyList} from './data.js';

function App() {
  console.log("puppyList: ", puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  return (
      <div>
        { 
   puppies.map((puppy) => {
     return <p>{puppy.name}</p>
   })
}
     
</div>
  )
}


export default App
