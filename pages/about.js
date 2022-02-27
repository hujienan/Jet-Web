import styles from "../styles/About.module.scss"

function About() {
  return (
    <section className={styles['section-process']}>
      <div>
        <div className={`${styles['process-steps-container']} ${styles['container-medium']} ${styles['with-padding']}`}>
          <div className={`${styles['process-step-container']} ${styles['process-step-1']}`}>
            <div className={styles['process-step-title-container']}>
              <h1 className={styles['process-step-title']}>Plan</h1>
              <div className={styles['process-step-title-overlay']}>Plan</div>
            </div>
          </div>
          <div className={`${styles['process-step-container']} ${styles['process-step-2']}`}>
            <div className={styles['process-step-title-container']}>
              <h1 className={styles['process-step-title']}>Design</h1>
              <div className={styles['process-step-title-overlay']}>Design</div>
            </div>
          </div>
          <div className={`${styles['process-step-container']} ${styles['process-step-3']}`}>
            <div className={styles['process-step-title-container']}>
              <h1 className={styles['process-step-title']}>Develop</h1>
              <div className={styles['process-step-title-overlay']}>Develop</div>
            </div>
          </div>
      </div>
    </div>
    </section >
  )
}

export default About