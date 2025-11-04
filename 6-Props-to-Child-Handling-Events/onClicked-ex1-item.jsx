import styles from "./item.module.css"

const Item = ({ food }) => {
   const handleBuyButtonClicked = () => {
      console.log(`${food} being bought`)
   };

   return (
      <li className={`${styles["kg-item"]} list-group-item `} >
         <span className={styles["kg-span"]}>{food}</span>
         <button className={`${styles.button} btn btn-info`}
            onClick={handleBuyButtonClicked} >Buy</button>
      </li >
   )
}

export default Item;

//Props Passed as food

//`` and $ used example

// const Item = ({ food }) => {
//    return (
//       <li className={`${styles["kg-item"]} list-group-item `} >
//          <span className={styles["kg-span"]}>{food}</span>
//          <button className={`${styles.button} btn btn-info`}
//             onClick={() => console.log(`${food} being bought`)} >Buy</button>
//       </li >
//    )
// }