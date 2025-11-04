import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooditems from './components/Fooditems';
import ErrorMsg from './components/ErrorMsg';


function App() {
   let foodItems = ['Soya Chunks', 'Dal', 'Mushroom', 'Paneer', 'Tofu', 'Dosha'];
   //let foodItems = [];
   return (

      <>
         <h1 className="food-heading">Healthy Food</h1>
         <ErrorMsg food={foodItems} />
         <Fooditems food={foodItems} />
      </>  //this is also same as <React.fragment> and also no need to written import react statement

   );
}

export default App;
