import styles from './Work.module.scss';
import Link from 'next/link';

import Button from './Button';

const Work = () => {
    return (
        <section className={styles.work_container} id="work_section">
          <div className={styles.work_wrapper}>
            <h1>work.</h1>
            <p>
            Below are some of my projects I have worked on throughout my years of design and development.
            </p>

            <div className={styles.work_list_card}>
              <h4>Title</h4>
              <p>Year</p>
              <p>Company</p>
            </div>
            

    
              
                  <Link href="/details">
                    <a>Go to details</a>
                  </Link>
            
            
          </div>
        </section>
    )
}

export default Work;