import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Display from './components/Display'
import Button from './components/Button'

function App() {


  return (
    <div className={styles.calculator}>
      <Display />
      <Button />
    </div>
  )
}

export default App
