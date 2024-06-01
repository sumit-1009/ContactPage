import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`${styles.nav} container`}>
        <div className='logo'>
            <img src="/images/logo2.jpg" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
