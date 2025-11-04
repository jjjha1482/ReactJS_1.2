import React from "react";
import styles from "./Container.module.css"

function Container({ children }) {
   return (
      <div className={styles.container}>{children}</div>
   )
}


// function Container(props) {
//    return (
//       <div className={styles.container}>{props.children}</div>
//    )
// } we can also write like this

export default Container;

