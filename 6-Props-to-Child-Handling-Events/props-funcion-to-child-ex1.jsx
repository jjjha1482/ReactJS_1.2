import Item from "./Item";

const Fooditems = ({ food }) => {

   return (
      <>
         <ul className="list-group">
            {food.map((item) => (
               <Item key={item} food={item}
                  handleBuyButton={() => console.log(`${item} bought`)} />
            ))}


         </ul>
      </>
   );

};


export default Fooditems;





import styles from "./item.module.css"

const Item = ({ food, handleBuyButton }) => {

   return (
      <li className={`${styles["kg-item"]} list-group-item `} >
         <span className={styles["kg-span"]}>{food}</span>
         <button className={`${styles.button} btn btn-info`}
            onClick={handleBuyButton} >Buy</button>
      </li >
   )
}

export default Item;

