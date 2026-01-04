import { useState } from 'react'
import styles from '../styles/Carousel.module.css'

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      title: 'Why Study in the UK?',
      content: [
        {
          heading: 'Quality Education',
          text: 'A UK education opens doors, wherever you go in the world. From our world-recognized universities to our innovative teaching approach and the leading minds who deliver it, we have what you need to reach your potential.'
        },
        {
          heading: 'World Leaders',
          text: 'The UK has been the preferred choice for some of the most important minds in history. One in four world leaders has studied in the UK, so if you\'re dreaming of achieving big things, you can be sure you\'re in the right place in the UK.'
        }
      ]
    },
    {
      title: 'Post-Study Work Opportunities',
      content: [
        {
          heading: 'Work After Studies',
          text: 'There are lots of options available to international students who want to stay and work in the UK after their studies. If you\'re considering staying in the UK after your studies, you may need to apply for a separate visa after your student visa.'
        }
      ]
    },
    {
      title: 'Graduate Visa Route',
      content: [
        {
          heading: 'Extended Work Rights',
          text: 'From 1 July 2021, international students who have successfully completed an undergraduate or master\'s degree will be able to benefit from two years\' work experience in the UK upon graduation, through the new Graduate Route. Students who complete their Ph.D. will be able to stay for three years.'
        }
      ]
    }
  ]

  const next = () => setCurrent((current + 1) % slides.length)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)

  return (
    <section className={styles.carousel}>
      <div className={styles.container}>
        <div className={styles.slide}>
          <h2>{slides[current].title}</h2>
          {slides[current].content.map((item, idx) => (
            <div key={idx} className={styles.slideContent}>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.controls}>
          <button onClick={prev} className={styles.btn}>←</button>
          <div className={styles.dots}>
            {slides.map((_, idx) => (
              <span key={idx} className={`${styles.dot} ${idx === current ? styles.active : ''}`} onClick={() => setCurrent(idx)}></span>
            ))}
          </div>
          <button onClick={next} className={styles.btn}>→</button>
        </div>
      </div>
    </section>
  )
}
