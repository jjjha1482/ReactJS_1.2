import React from "react";
import styles from "./Foodinput.module.css"

function Foodinput({ handleonKeyDown }) {

   return (
      <input type="text" placeholder="Enter Food Item here" className={styles.Foodinput}
         onKeyDown={handleonKeyDown}>
      </input>
   )
}

export default Foodinput;