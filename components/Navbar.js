import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleDropdown = (name) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === name ? null : name)
    }
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topLeft}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +44 7784 814051
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              support@esasuk.com
            </span>
          </div>
          <div className={styles.topRight}>
            <a href="#">Apply Now</a>
            <a href="#">Schedule Call</a>
          </div>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className={styles.container}>
          <Link href="/">
            <div className={styles.logo}>
              <div className={styles.logoIcon}>E</div>
              <div>
                <div className={styles.logoText}>ESASUK</div>
                <div className={styles.logoSubtext}>Education Services</div>
              </div>
            </div>
          </Link>
          
          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            
            <li 
              className={`${styles.dropdown} ${activeDropdown === 'services' ? styles.active : ''}`}
              onMouseEnter={() => !isMobile && setActiveDropdown('services')}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
              onClick={() => toggleDropdown('services')}
            >
              <Link href="/services">Services</Link>
              <div className={`${styles.dropdownMenu} ${activeDropdown === 'services' ? styles.show : ''}`}>
                <div className={styles.dropdownHeader}>Our Services</div>
                <a href="/services#admission" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <div>
                    <div className={styles.itemTitle}>Admission Services</div>
                    <div className={styles.itemDesc}>7-step admission process</div>
                  </div>
                </a>
                <a href="/services#accommodation" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <div>
                    <div className={styles.itemTitle}>Accommodation</div>
                    <div className={styles.itemDesc}>Housing solutions</div>
                  </div>
                </a>
                <a href="/services#visa" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <div>
                    <div className={styles.itemTitle}>Family Visa</div>
                    <div className={styles.itemDesc}>Visa assistance</div>
                  </div>
                </a>
                <a href="/services#post-study" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                  <div>
                    <div className={styles.itemTitle}>Post Study</div>
                    <div className={styles.itemDesc}>Career guidance</div>
                  </div>
                </a>
              </div>
            </li>
            
            <li 
              className={`${styles.dropdown} ${activeDropdown === 'destinations' ? styles.active : ''}`}
              onMouseEnter={() => !isMobile && setActiveDropdown('destinations')}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
              onClick={() => toggleDropdown('destinations')}
            >
              <Link href="#">Destinations</Link>
              <div className={`${styles.dropdownMenu} ${activeDropdown === 'destinations' ? styles.show : ''}`}>
                <div className={styles.dropdownHeader}>Study Destinations</div>
                <a href="#" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <div>
                    <div className={styles.itemTitle}>United Kingdom</div>
                    <div className={styles.itemDesc}>World-class universities</div>
                  </div>
                </a>
                <a href="#" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <div>
                    <div className={styles.itemTitle}>United States</div>
                    <div className={styles.itemDesc}>Top institutions</div>
                  </div>
                </a>
                <a href="#" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <div>
                    <div className={styles.itemTitle}>Canada</div>
                    <div className={styles.itemDesc}>Quality education</div>
                  </div>
                </a>
              </div>
            </li>
            
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          <Link href="/contact" className={styles.ctaBtn}>Get Started</Link>
          
          <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}
