import React from "react";
import styles from "./Foodinput.module.css"

function Foodinput() {
   return (
      <input type="text" placeholder="Enter Food Item here" className={styles.Foodinput}
         onChange={(event) => console.log(event.target.value)}>
      </input>
   )
}

export default Foodinput;