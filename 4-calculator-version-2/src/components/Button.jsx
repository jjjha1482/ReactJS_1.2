import React from "react";
import styles from "./Button.module.css"

function Button({ onButtonClick }) {
   const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
   return (
      <div className={styles.buttonsContainer}>
         {buttonNames.map(buttonName => (
            <button className={styles.button} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
         ))}
      </div>
   )
}

export default Button;