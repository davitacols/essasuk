import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Hassle-Free School Fee Payments</h1>
        <p>Supporting international students in UK, US, and Canada with seamless payment solutions</p>
        <a href="#payment" className="btn btn-primary">Pay School Fees Now</a>
      </div>
    </section>
  )
}