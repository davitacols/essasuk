import Head from 'next/head'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import styles from '../styles/About.module.css'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - ESASUK</title>
        <meta name="description" content="About ESASUK - Education Support and Services Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <img src="/gift-habeshaw-kSTcz5gE018-unsplash.jpg" alt="About ESASUK" />
            </div>
            <div className={styles.aboutContent}>
              <h1>About Us</h1>
              <p>ESAS Ltd., Education Support and Services Ltd provides support for students wishing to pursue an education in the UK. We also offer training to organisations and individuals on a wide variety of topics.</p>
              <p>We have a team of seasoned professionals and we partner with various international institutions to help our clients get the best service.</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
