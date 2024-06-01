import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Contact />
      <ContactForm />
    </>
  )
}

export default App
