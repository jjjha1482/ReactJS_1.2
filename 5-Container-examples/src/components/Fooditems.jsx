import Item from "./Item";

const Fooditems = ({ food }) => {

   return (
      <>
         <ul className="list-group">
            {food.map((item) => (
               <Item key={item} food={item} />
            ))}


         </ul>
      </>
   );

};


export default Fooditems;