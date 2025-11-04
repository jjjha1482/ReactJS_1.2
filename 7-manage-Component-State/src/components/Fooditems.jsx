import Item from "./Item";
import { useState } from "react";

const Fooditems = ({ food }) => {

   let [activeItems, setActiveItems] = useState([]);

   const handleBuyButton = (item, event) => {
      let newItems = [...activeItems, item];
      setActiveItems(newItems);
   }

   return (
      <>
         <ul className="list-group">
            {food.map((item) => (
               <Item key={item} food={item}
                  handleBuyButton={() => handleBuyButton(item, event)}
                  bought={activeItems.includes(item)} />
            ))}


         </ul>
      </>
   );

};


export default Fooditems;