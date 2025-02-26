import styles from './Home.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from 'next/image'
import profilePic from '../public/crazy_profile_pic.png'

const Home = () => {
  return (
    <section className={styles.home_container}>
      <div className={styles.home_wrapper}>
        <Image
            className={styles.profile_pic}
            src={profilePic}
            alt="Image of Magda Kovacs"
          />
          <p>Hello, I’m <b className={styles.highlight}>Magda</b>, a product designer based in Amsterdam, the Netherlands. I’m passionate about crafting <b className={styles.highlight}>design systems, accessibility</b> and working with <b className={styles.highlight}>complex data.</b>
          <br/>
          Seeking my next challenge to create impactful solutions.</p>
          <div className={styles.btn_container}>
            <PrimaryButton
              href="#work_section"
            >
              View work
            </PrimaryButton>
            <SecondaryButton
              href="/magda_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume
            </SecondaryButton>
          </div>
      </div>
    </section>
  )
}

export default Home;
