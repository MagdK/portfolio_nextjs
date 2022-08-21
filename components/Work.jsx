import styles from './Work.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButton } from './Button';
import { useState } from 'react';


const Work = ({ works }) => {

    const [worksToDisplay, setWorksToDisplay] = useState(works.slice(0, 6));

    return (
        <section className={styles.work_container} id="work_section">
            <div className={styles.work_wrapper}>
                <h1>work.</h1>
                <p>
                    Below are some of my projects I have worked on throughout my years of design and development.
                </p>
                <div className={styles.work_list_wrapper}>
                    
                    {worksToDisplay.map((work) => {

                        return(
                            
                            <div 
                                className={styles.work_list_card} 
                                key={work.slug}
                            >
                                
                                <Link href={`/works/${work.slug}`}>
                                    <a>
                                        <Image 
                                            src={`/works/${work.slug}/${work.slug}.png`} 
                                            alt={`${work.slug}`} width="400" height="400" 
                                            className={styles.work_card_image}
                                        >
                                        </Image>
                                        <div className={styles.work_card_description_wrapper}>
                                            <p className={styles.work_title_tag}>{work.frontmatter.title}</p>
                                            <p className={styles.work_role_tag}>{work.frontmatter.role}</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}


                </div>
                <div className={styles.btn_container}>
                    
                    <PrimaryButton 
                    href="#work_section" 
                    onClick={ (event) => {
                        worksToDisplay.length === 6 ? setWorksToDisplay(works) : setWorksToDisplay(works.slice(0, 6)) 

                        worksToDisplay.length === 6 ? event.preventDefault() : console.log("not prevented")
                    }}
                    >
                    {worksToDisplay.length === 6 ? "Show all" : "Show less"}
                                    
                    </PrimaryButton>
                    
                </div>
            </div>
        </section>
    )
}

export default Work;