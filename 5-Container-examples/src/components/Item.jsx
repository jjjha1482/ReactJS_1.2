import styles from "./item.module.css"

const Item = ({ food }) => {
   return (
      <li className={`${styles["kg-item"]} list-group-item `} >
         <span className={styles["kg-span"]}>{food}</span>
      </li >
   )
}

export default Item;

//Props Passed as food