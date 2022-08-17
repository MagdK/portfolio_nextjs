import styles from './Work.module.scss';
import Link from 'next/link';
// import Image from 'next/image';

const Work = ({ works }) => {
    
    return (
        <section className={styles.work_container} id="work_section">
            <div className={styles.work_wrapper}>
                <h1>work.</h1>
                <p>
                    Below are some of my projects I have worked on throughout my years of design and development.
                </p>
                <div className={styles.card_list}>
                    {works.map((work) => {

                        return(
                            
                            <div key={work.slug}>
                                <h2>{work.frontmatter.title}</h2>
                                <h4>{work.frontmatter.date}</h4>
                                <Link href={`/works/${work.slug}`}>
                                    <a>Details</a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work;


// const Work = () => {
//     return (
//         <section className={styles.work_container} id="work_section">
//           <div className={styles.work_wrapper}>
//             <h1>work.</h1>
//             <p>
//             Below are some of my projects I have worked on throughout my years of design and development.
//             </p>
//             <div className={styles.work_list_wrapper}>
              
//               <Link href="/details">
//                 <div className={styles.work_list_card}>
                  
//                     <Image src="/images/works/begame-transaction-history.png" alt="Transaction Image" width="400" height="400" className={styles.work_image}></Image>

//                   <div className={styles.work_list_card_description}>
//                     <p>Bingocams transactions</p>
//                     <p className={styles.tag}>Development and design</p>
//                   </div>
//                 </div> 
//               </Link>

//               <Link href="/details">
//                 <div className={styles.work_list_card}>
//                   <Image src="/images/works/begame-profile-picture-upload.png" alt="Transaction Image" width="400" height="400" className={styles.work_image}></Image>
//                   <div className={styles.work_list_card_description}>
//                     <p>Bingocams profile picture upload</p>
//                     <p className={styles.tag}>Design</p>
//                   </div>
//                 </div> 
//               </Link>

//               <Link href="/details">
//                 <div className={styles.work_list_card}>
//                   <Image src="/images/works/begame-design-system.png" alt="Transaction Image" width="400" height="400" className={styles.work_image}></Image>
//                   <div className={styles.work_list_card_description}>
//                     <p>Bingocams design system</p>
//                     <p className={styles.tag}>Design</p>
//                   </div>
//                 </div> 
//               </Link>

//             </div>
//             <div className={styles.btn_container}>
//               <PrimaryButton 
//                   href="/works" 
//                   rel="noreferrer" 
//               >
//                   Show all
//               </PrimaryButton>
//             </div>
//           </div>
//         </section>
//     )
// }

// export default Work;