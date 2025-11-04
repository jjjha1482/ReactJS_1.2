import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooditems from './components/Fooditems';
import ErrorMsg from './components/ErrorMsg';
import Container from './components/Container';


function App() {
   let foodItems = ['Soya Chunks', 'Dal', 'Mushroom', 'Paneer', 'Tofu', 'Dosha'];
   //let foodItems = [];
   return (
      <>
         <Container>
            <h1 className="food-heading">Healthy Food</h1>
            <ErrorMsg food={foodItems} />
            <Fooditems food={foodItems} />
         </Container>
         <Container>
            <p>Above  is the list of healthy food that are good for your health</p>
         </Container>
      </>
   );
}

export default App;
