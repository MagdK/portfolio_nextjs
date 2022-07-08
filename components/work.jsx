import styles from './Work.module.scss';

const Work = () => {
    return (
        <section className={styles.work_container}>
          <div className={styles.work_wrapper}>
            <h1 id="link_work">work.</h1>
            <p>
            Below are some of my projects I have worked on throughout my years of design and development.
            </p>
          </div>
        </section>
    )
}

export default Work;