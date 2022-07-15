import styles from './Work.module.scss';
import Link from 'next/link';
import Image from 'next/image';

// import Button from './Button';

const Work = () => {
    return (
        <section className={styles.work_container} id="work_section">
          <div className={styles.work_wrapper}>
            <h1>work.</h1>
            <p>
            Below are some of my projects I have worked on throughout my years of design and development.
            </p>
            <Link href="/details">
              <div className={styles.work_list_card}>
                <Image src="/images/works/begame-transaction-history.png" alt="Transaction Image" width="350" height="350"></Image>
                <div className={styles.work_list_card_description}>
                  <p>Transactions on Bingocams</p>
                </div>
              </div> 
            </Link>
          </div>
        </section>
    )
}

export default Work;