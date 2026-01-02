import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>Contact Us</h2>
        <p>Get in touch for any assistance with your payments or services</p>
        <div className={styles.contactInfo}>
          <p>Email: support@esasuk.com</p>
          <p>Phone: +44 (0) 20 XXXX XXXX</p>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; 2024 ESASUK. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}