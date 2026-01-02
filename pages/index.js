import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PaymentForm from '../components/PaymentForm'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>ESASUK - Student Payment Services</title>
        <meta name="description" content="Hassle-free school fee payments for international students in UK, US, and Canada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <PaymentForm />
      <Contact />
    </>
  )
}