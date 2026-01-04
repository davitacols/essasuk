import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero} style={{
      backgroundImage: 'url(/linkedin-sales-solutions-u3hmzw5U-SI-unsplash.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>Global Education<br />Made Simple</h1>
          <p>Expert guidance for international students pursuing excellence in the UK, US, and Canada</p>
          <a href="#contact" className={styles.ctaBtn}>Get Started</a>
        </div>
      </div>
    </section>
  )
}
