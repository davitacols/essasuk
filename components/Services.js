import styles from '../styles/Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2>Our Services</h2>
        
        <div className={styles.serviceCard}>
          <h3>Admission Services</h3>
          <p>We provide our admission services in 7 steps:</p>
          <ol>
            <li>Registration</li>
            <li>Assessment</li>
            <li>Verification</li>
            <li>Application</li>
            <li>Processing</li>
            <li>Visa</li>
            <li>Travel</li>
          </ol>
          <p>Our job is to support our students gain the desired admission, secure the appropriate visa and arrive for their studies. We also provide support with regards facilities smooth school fees and other related payment services.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Accommodation Services</h3>
          <p>We give our students the advantage by guiding them in securing their desired accommodation. The accommodation support includes securing school managed accommodation as well as external accommodation.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Family Visa Services</h3>
          <p>We provide visa support for students with dependents and facilitate their spouse and children's visas.</p>
          <p>We also provide visa support for students who desire visitors visa for their family members during their stay in the UK or during their graduation ceremony.</p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Post Study Visa Guidance</h3>
          <p>After a student has completed their academic studies, we are able to advice and support application of the next visas required for their continued stay in the country of study or other suitable countries.</p>
        </div>
      </div>
    </section>
  )
}