import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooditems from './components/Fooditems';
import ErrorMsg from './components/ErrorMsg';
import Container from './components/Container';
import Foodinput from './components/Foodinput';


function App() {
  let [foodItems, setFoodItems] = useState([])

  const handleonKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <Foodinput handleonKeyDown={handleonKeyDown} />
        <ErrorMsg food={foodItems} />
        <Fooditems food={foodItems} />
      </Container>
    </>
  );
}

export default App;
