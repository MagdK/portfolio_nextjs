import styles from './Home.module.scss';
import Button from './Button';

const Home = () => {
    return (
        <section className={styles.home_container}>
          <div className={styles.home_wrapper}>
            <div className={styles.home_wrapper_col_1}>
              <h4>Hello, I am Magda,</h4>
              <h3><span></span></h3>
              <h4>based in the Netherlands.</h4>
              <Button type="button" buttonType="primary">View things</Button>
              <Button type="button" buttonType="secondary">Download resume</Button>
            </div>
            <div className={styles.home_wrapper_col_2}>
              <img src="./assets/profile_pic.png"></img>
            </div>
          </div>
        </section>
    )
}

export default Home;