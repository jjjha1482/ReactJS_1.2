import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let foodItems = ['Soya Chunks', 'Dal', 'Mushroom', 'Paneer', 'Tofu'];
  //let foodItems = [];

  let emptyMSG = foodItems.length === 0 ? <h3>I am Still hungry</h3> : null; // Conditional Rendering
  let emptyMSG_2 = foodItems.length === 0 && <h3>I need food ASAP</h3>;  // && and ? same thing 
  return (
    // <React.Fragment>
    //   <h1>Healthy Food</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Soya Chunks</li>
    //     <li class="list-group-item">Dal</li>
    //     <li class="list-group-item">Mushroom</li>
    //     <li class="list-group-item">Paneer</li>
    //     <li class="list-group-item">Tofu</li>
    //   </ul>
    // </React.Fragment>
    <>
      <h1>Healthy Food</h1>
      {emptyMSG} {emptyMSG_2}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}


      </ul>
    </>  //this is also same as <React.fragment> and also no need to written import react statement

  );
}

export default App;
