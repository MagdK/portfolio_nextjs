import styles from './Home.module.scss';
import { PrimaryButton, SecondaryButton, ShadowButton } from './Button';
import ProfilePic from './Profile';

const Home = () => {
    return (
        <section className={styles.home_container}>
          <div className={styles.home_wrapper}>
            <div className={styles.home_wrapper_col_1}>
              <h4>Hello, I am Magda,</h4>
              <h3><span></span></h3>
              <h4>based in the Netherlands.</h4>
              <div className={styles.btn_container}>
              <a href="#work_section">
                <PrimaryButton>View work</PrimaryButton>
              </a>
              <a
                    href="/magda_kovacs_frontend_resume_1.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
              >
                <SecondaryButton>
                  Download resume
                </SecondaryButton>
              </a>
              </div>
            </div>
            <div className={styles.home_wrapper_col_2}>
              <ProfilePic className={styles.profile_pic}></ProfilePic>
            </div>
          </div>
        </section>
    )
}

export default Home;