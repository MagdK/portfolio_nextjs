import styles from './Home.module.scss';
import Button from './Button';

const Home = () => {
    return (
        <section className={styles.home_container}>
          <div className={styles.home_wrapper}>
            <p>Hello, I am Magda,</p>
            <h1><span></span></h1>
            <p>based in the Netherlands.</p>
            <Button type="button" buttonType="primary">View things</Button>
            <Button type="button" buttonType="secondary">Download resume</Button>
          </div>
        </section>
    )
}

export default Home;