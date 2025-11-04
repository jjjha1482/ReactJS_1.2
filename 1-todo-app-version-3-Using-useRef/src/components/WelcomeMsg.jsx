import React from "react";
import styles from './WelcomeMsg.module.css';

function WelcomeMsg({ todoItems }) {
   return (
      <p className={styles.welcome}>Enjoy your Day</p>
   )
}

export default WelcomeMsg;