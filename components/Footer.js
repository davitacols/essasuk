import { useState, useEffect } from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector(`.${styles.footer}`)
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                <div className={styles.logoIcon}>E</div>
                <div>
                  <div className={styles.logoText}>ESASUK</div>
                  <div className={styles.logoSubtext}>Education Services</div>
                </div>
              </div>
              <p>Empowering international students to achieve their academic dreams in the UK, US, and Canada.</p>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h4>Services</h4>
              <ul>
                <li><a href="/services#admission">Admission Services</a></li>
                <li><a href="/services#accommodation">Accommodation</a></li>
                <li><a href="/services#visa">Family Visa</a></li>
                <li><a href="/services#post-study">Post Study Guidance</a></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>Destinations</h4>
              <ul>
                <li><a href="#">United Kingdom</a></li>
                <li><a href="#">United States</a></li>
                <li><a href="#">Canada</a></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>Contact Info</h4>
              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+44 2081684432</span>
              </div>
              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>enquiries@esasuk.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p>&copy; 2024 ESASUK. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
