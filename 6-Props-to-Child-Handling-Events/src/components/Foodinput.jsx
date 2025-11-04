import React from "react";
import styles from "./Foodinput.module.css"

function Foodinput() {
   const handleonChange = (event) => {
      console.log(event.target.value)
   }
   return (
      <input type="text" placeholder="Enter Food Item here" className={styles.Foodinput}
         onChange={handleonChange}>
      </input>
   )
}

export default Foodinput;