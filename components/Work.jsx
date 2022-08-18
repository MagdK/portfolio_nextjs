import styles from './Work.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButton } from './Button';

const Work = ({ works }) => {
    
    return (
        <section className={styles.work_container} id="work_section">
            <div className={styles.work_wrapper}>
                <h1>work.</h1>
                <p>
                    Below are some of my projects I have worked on throughout my years of design and development.
                </p>
                <div className={styles.work_list_wrapper}>
                    
                    {works.map((work) => {

                        return(
                            
                            <div className={styles.work_list_card} key={work.slug}>
                                
                                <Link href={`/works/${work.slug}`}>
                                    <a>
                                        <Image src={`/works/${work.slug}/${work.slug}.png`} alt="Transaction Image" width="400" height="400" className={styles.work_image}></Image>
                                        <p>{work.frontmatter.title}</p>
                                        <p className={styles.tag}>{work.frontmatter.role}</p>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}


                </div>
                <div className={styles.btn_container}>
                    <PrimaryButton 
                    href="#work_section"
                    >
                        Show all
                    </PrimaryButton>
        
                </div>
            </div>
        </section>
    )
}

export default Work;