import Head from 'next/head'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services - ESASUK</title>
        <meta name="description" content="ESASUK services for international students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div style={{ marginTop: '70px' }}>
        <Services />
      </div>
      <Contact />
    </>
  )
}
