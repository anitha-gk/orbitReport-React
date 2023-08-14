import satData from "../components/satData";
//import { useState }  from 'react';
import './styling.css'

const Buttons = (props) => {
  return (
    <div className="flex-container">
{props.displaySats.map((sat, id) =>{
  return (
    <button onClick={() => props.filterByType(sat)} key={id}>
      {sat} Orbit
      </button>
      );
    })};
<button onClick={() => props.setSat(satData)}>All Orbits</button>
</div>   
  );
  };

 
  
    //<div>
     // <button>Placeholder Button</button>
      //<button>All Orbits</button>
     // </div>
  
export default Buttons;