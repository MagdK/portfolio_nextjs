import styles from './Home.module.scss';
import { PrimaryButton, SecondaryButton } from './Button';

const Home = () => {
    return (
        <section className={styles.home_container}>
          <div className={styles.home_wrapper}>
            <div className={styles.home_wrapper_col_1}>
              <h4>Hello, I am Magda,</h4>
              <h3><span></span></h3>
              <h4>based in the Netherlands.</h4>
                <PrimaryButton type="button">View works</PrimaryButton>
                {<SecondaryButton type="button">Download resume</SecondaryButton>}
            </div>
            <div className={styles.home_wrapper_col_2}>
              <h4>This is the place of the image</h4>
            </div>
          </div>
        </section>
    )
}

export default Home;