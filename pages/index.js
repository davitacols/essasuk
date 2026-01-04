import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>ESASUK - International Education Services</title>
        <meta name="description" content="Expert guidance for international students in UK, US, and Canada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <Carousel />
      
      <section className={styles.about}>
        <div className={styles.container}>
          <h2>About ESASUK</h2>
          <p>ESAS Ltd., Education Support and Services Ltd provides support for students wishing to pursue an education in the UK. We also offer training to organisations and individuals on a wide variety of topics.</p>
          <p>We have a team of seasoned professionals and we partner with various international institutions to help our clients get the best service.</p>
          <Link href="/about" className={styles.link}>
            Learn More →
          </Link>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Our Services</h2>
          <div className={styles.servicesPreview}>
            <div className={styles.serviceItem}>
              <h3>Admission Services</h3>
              <p>Complete guidance through our 7-step admission process from registration to travel arrangements.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Accommodation Support</h3>
              <p>Secure comfortable housing through university-managed or external accommodation options.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Family Visa Services</h3>
              <p>Comprehensive visa assistance for dependents and family visitors during your studies.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Post Study Guidance</h3>
              <p>Expert guidance on career opportunities and visa support after graduation.</p>
            </div>
          </div>
          <Link href="/services" className={styles.link}>
            View All Services →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
