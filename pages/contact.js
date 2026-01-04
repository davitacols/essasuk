import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/ContactPage.module.css'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - ESASUK</title>
        <meta name="description" content="Get in touch with ESASUK for your education needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className={styles.contactPage}>
        <div className={styles.container}>
          <div className={styles.contactLeft}>
            <h1>Get in Touch</h1>
            <p>Have questions about our services? We're here to help. Reach out to us and we'll respond as soon as possible.</p>
            
            <div className={styles.infoBlock}>
              <h3>Contact Information</h3>
              
              <div className={styles.infoItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <h4>Address</h4>
                  <p>London, United Kingdom</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div>
                  <h4>Email</h4>
                  <p>support@esasuk.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h4>Phone</h4>
                  <p>+44 7784 814051</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactRight}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="How can we help?" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Your message..." rows="6"></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
