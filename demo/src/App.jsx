import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const addNumber = function (num1, num2){
    const result = num1 + num2
    return result
}

function App() {
  

  return (
    <>
      <h1>Hello Vite React</h1>
      <h2>Addition Function: {addNumber(3,5)}</h2>
    </>
  )
}

export default App
