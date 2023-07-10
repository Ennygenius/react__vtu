import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Home />

    </>
  )
}

export default App
