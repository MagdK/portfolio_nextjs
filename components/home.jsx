import styles from './Home.module.scss';
import { PrimaryButton, SecondaryButton, ShadowButton } from './Button';
import Image from 'next/image'
import profilePic from '../public/crazy_profile_pic.png'

const Home = () => {
    return (
        <section className={styles.home_container}>
          <div className={styles.home_wrapper}>
            <div className={styles.home_wrapper_col_1}>
              <p>Hello, I am Magda,</p>
              <h3><span></span></h3>
              <p>looking for my next challenge to deliver business value and level up my skills.</p>
              <div className={styles.btn_container}>
                <PrimaryButton 
                  href="#work_section"
                >
                  View work
                </PrimaryButton>
                <SecondaryButton 
                  href="/magda_kovacs_frontend_resume_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download resume
                </SecondaryButton>
              </div>
            </div>
            <div className={styles.home_wrapper_col_2}>
              <Image className={styles.profile_pic} src={profilePic} alt="Image of Magda Kovacs"  />
            </div>
          </div>
        </section>
    )
}

export default Home;