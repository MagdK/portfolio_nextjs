import styles from './About.module.scss';

const About = () => {
    return (
        <section className={styles.about_container} id="about_section">
          <div className={styles.about_wrapper}>
            <h1>about.</h1>
            <p>
            Prior to frontend development, I’ve worked in startups, nonprofits, and creative agencies.
            </p>
            <p>
            Everything I’ve done has been in pursuit of understanding people more deeply, solving problems and fostering moments of empathy.
            </p>
            <p>
            As a designer and developer, I’m interested in how to create experiences that are impactful, intuitive, and perhaps, even a bit delightful.
            </p>
            <p>
            As a human, I’m frequently spotted drinking tea, staring at birds, and talking about my cats.
            </p>
          </div>
        </section>
    )
}

export default About;