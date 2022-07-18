import styles from './Work.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import { PrimaryButton } from './Button';

const Work = () => {
    return (
        <section className={styles.work_container} id="work_section">
          <div className={styles.work_wrapper}>
            <h1>work.</h1>
            <p>
            Below are some of my projects I have worked on throughout my years of design and development.
            </p>
            <div className={styles.work_list_wrapper}>
              <Link href="/details">
                <div className={styles.work_list_card}>
                  <Image src="/images/works/begame-transaction-history.png" alt="Transaction Image" width="400" height="400"></Image>
                  <div className={styles.work_list_card_description}>
                    <p>Bingocams transactions</p>
                    <p className={styles.tag}>Development and design</p>
                  </div>
                </div> 
              </Link>

              <Link href="/details">
                <div className={styles.work_list_card}>
                  <Image src="/images/works/begame-profile-picture-upload.png" alt="Transaction Image" width="400" height="400"></Image>
                  <div className={styles.work_list_card_description}>
                    <p>Bingocams profile picture upload</p>
                    <p className={styles.tag}>Design</p>
                  </div>
                </div> 
              </Link>

              <Link href="/details">
                <div className={styles.work_list_card}>
                  <Image src="/images/works/begame-design-system.png" alt="Transaction Image" width="400" height="400"></Image>
                  <div className={styles.work_list_card_description}>
                    <p>Bingocams design system</p>
                    <p className={styles.tag}>Design</p>
                  </div>
                </div> 
              </Link>

            </div>
            <div className={styles.btn_container}>
              <PrimaryButton 
                  href="#" 
                  rel="noreferrer" 
              >
                  Show all
              </PrimaryButton>
            </div>
          </div>
        </section>
    )
}

export default Work;