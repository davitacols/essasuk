import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>ESASUK</div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#contact">Contacts</a></li>
          <li><a href="#payment" className={styles.payBtn}>Pay Fees</a></li>
        </ul>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}