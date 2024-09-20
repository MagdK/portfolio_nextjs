import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about_container} id="about_section">
      <div className={styles.about_wrapper}>
        <h1>about.</h1>
        <p>
        I’ve worked as a <b className={styles.highlight}>product designer</b> across startups, non-profits, and creative agencies, focusing on <b className={styles.highlight}>fashion-tech, online gaming, and recruitment</b>, helping companies launch user-centered products.
        </p>
        <p>
        Everything I’ve done has been in pursuit of <b className={styles.highlight}>understanding people</b> more deeply and <b className={styles.highlight}>solving problems</b>.
        </p>
        <p>
        As a designer and developer, I’m interested in how to create experiences that are <b className={styles.highlight}>impactful</b>, <b className={styles.highlight}>intuitive</b>, and perhaps, even a bit <b className={styles.highlight}>delightful</b>.
        </p>
        <p>
        When I’m not working, I’m usually found sipping tea, reading about the latest design trends, or chatting about my cats—who inspire me with their curiosity and playfulness.
        </p>
      </div>
    </section>
  )
}

export default About;