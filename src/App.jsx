import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Contact />
    </>
  )
}

export default App
