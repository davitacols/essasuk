import styles from '../styles/Services.module.css'

export default function Services() {
  const services = [
    {
      title: 'Admission Services',
      image: '/divaris-shirichena-04Rd4wrSI1M-unsplash.jpg',
      description: 'Complete 7-step admission process from registration to travel arrangements.',
      steps: ['Registration', 'Assessment', 'Verification', 'Application', 'Processing', 'Visa', 'Travel']
    },
    {
      title: 'School Fees Payment Support',
      image: '/gift-habeshaw-kSTcz5gE018-unsplash.jpg',
      description: 'Flexible payment plans and financial guidance to help manage school fees and tuition costs.'
    },
    {
      title: 'Accommodation Services',
      image: '/accommodation.jpg',
      description: 'Secure comfortable housing through university-managed or external accommodation options.'
    },
    {
      title: 'Family Visa Services',
      image: '/family.jpg',
      description: 'Comprehensive visa support for dependents and family visitors during your studies.'
    },
    {
      title: 'Post Study Visa Guidance',
      image: '/career.jpg',
      description: 'Career guidance and visa support for continued stay or relocation after graduation.'
    }
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Our Services</h1>
          <p>Comprehensive support for your international education journey</p>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.steps && (
                    <ul className={styles.stepsList}>
                      {service.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
