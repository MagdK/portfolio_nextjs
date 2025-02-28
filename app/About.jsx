import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about_container} id="about_section">
      <div className={styles.about_wrapper}>
        <h1>about.</h1>
        <p>
        In 2017, I transitioned from print and digital design to UX/UI to <b className={styles.highlight}>combine creativity with strategy</b>—using data, research, and problem-solving to design with purpose. Since then, I’ve helped launch successful digital products across <b className={styles.highlight}>fashion-tech, gaming, and recruitment</b>, ensuring user-centered experiences that drive engagement and retention.
        </p>

        <p>
        I leveled up my skills with a front-end bootcamp in 2022, enabling <b className={styles.highlight}>seamless collaboration with front-end teams</b>. 
        </p>

        <p>
        I’m passionate about crafting <b className={styles.highlight}>design systems, accessibility, and working with complex data</b>.
        </p>
      
        <p>
        When I’m not working, you’ll find me outdoors or sipping tea while reading.
        </p>
      </div>
    </section>
  )
}

export default About;