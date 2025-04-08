import styles from '../page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Mp4Video from '@/components/Mp4Video';
import Link from 'next/link';
import img1 from './Transaction_01.png'
import img2 from './Transaction_02.png'
import img3 from './Transaction_03.png'
import img4 from './Transaction_04.png'
import img5 from './Transaction_05.png'
import img6 from './Transaction_06.png'
import img7 from './Transaction_07.png'
import img9 from './design_process.png'

// HTML meta tags
export const metadata = {
    title: 'Transforming the online gaming transaction experience',
    description: '...',
}

const Page = async ({ params }) => {
    return (
        <div className={styles.details_content_wrapper}>
            <Link href="/#work_section" className={styles.back_link}>Back to works</Link>
            <h1>{metadata.title}</h1>
            <div className={styles.work_description}>
                <Image src={img1} alt="Results"/>

                <h2 id="impact">Impact</h2>
                <ul>
                    <li><p>Enhanced user satisfaction with improved usability and intuitive
                        design.</p></li>
                    <li><p>Decreased support inquiries by streamlining workflows and
                        reducing friction points.</p></li>
                    <li><p>Accelerated deposit and withdrawal processes, making transactions
                        smoother and more efficient.</p></li>
                    <li><p>Improved user engagement by creating a more seamless and
                        enjoyable experience.</p></li>
                </ul>

                <div className={styles.single_column}>
                    <h2 id="problem-statement">Problem statement</h2>
                    <p>Bingocams’ community members experienced challenges in obtaining a
                        clear, organized overview of their transactions. Although the
                        transaction processes themselves were functional, a lack of clear
                        information led to user confusion, increased customer support inquiries,
                        and, potentially, member loss.
                    </p>
                    <Image src={img9}
                        title="Process follwoed: Define, Research, Analyse, esign, Test" />
                </div>

                <div className={styles.table_container}>
                    <div className={styles.column}>
                    <h2 id="tools">Tools</h2>
                    <ul>
                        <li>Sketch</li>
                        <li>Zeplin</li>
                        <li>Abstract</li>
                        <li>Whimsical</li>
                        <li>Usertesting.com</li>
                        <li>BootstrapVue</li>
                        <li>Material Icons</li>
                        <li>Jira</li>
                    </ul> 
                    </div> 
                    <div className={styles.column}>
                        <h2 id="role">Role</h2>
                        <ul>
                            <li>User research &amp; analysis</li>
                            <li>UX and UI redesign</li>
                            <li>Component creation</li>
                            <li>Usability testing</li>
                        </ul>
                        <h2 id="timeline">Timeline</h2>
                        <ul>
                            <li>3X2 weeks sprints</li>
                        </ul>  
                    </div>
                </div>    
                
                <div className={styles.single_column}>
                    <h2 id="project-overview">Project overview</h2>
                    <p>Confusing transaction processes led to frequent support requests.
                        This project focused on deposits and withdrawals, improved transaction
                        flows, and enhanced clarity of transaction history, reducing support
                        needs and boosting user satisfaction.
                    </p>
                </div>

                <div className={styles.single_column}>
                    <h2 id="problem-discovery">Problem discovery</h2>
                    <ul>
                        <li><p>Reviewed insights from the customer success team to understand
                            recurring user concerns.</p></li>
                        <li><p>To uncover hidden pain points and validate customer success
                            feedback, I conducted usability tests with 5 new and 5 returning users
                            via UserTesting.com, focusing on deposits, withdrawals, and
                            navigation.</p></li>
                    </ul>
                </div>


                <div className={styles.single_column}>
                    <h2>Users&#39; pain points before the redesign</h2>
                    <Image src={img2}
                        title="Preview of transactions before the redesign"
                        alt="Before state of the transaction overview" />
                </div>

                <div className={styles.single_column}>
                    <h2 id="solution">Solution</h2>
                    <p>To address these challenges, I proposed a redesign of the
                        transactions page. The updated design was intended to provide a more
                        organized, accessible, and informative transaction experience that
                        empowered users to track their activity confidently and
                        independently.</p>
                </div>

                <div className={styles.single_column}>
                    <h2 id="wireframes">Wireframes</h2>
                    <p>I created wireframes to outline key layout variations for the transaction overview page and gathered user feedback on the concepts. The overall feedback indicated that filtering added unnecessary complexity, as most users are not tech-savvy and prefer simple, easy-to-use solutions. Since we adopted a mobile-first approach, we chose the grid layout for the MVP. </p>
                    <Image src={img3} title="Concepts of new transaction" alt="Wiewframe" />
                </div>

                <div className={styles.table2_container}>
                    <div className={styles.column2}>
                        <h2 id="high-fidelity-design">High-fidelity design</h2>
                        <p>Once the direction was decided, I developed high-fidelity prototypes
                            that emphasized transaction status and clear labels, covering all
                            responsive breakpoints for a seamless experience across screen
                            sizes.</p>
                    </div>
                    <div className={styles.column2}>
                        <Image src={img4}
                        title="Preview of deposit overview" alt="Preview of deposit overview"/>
                    </div>
                </div>
                
                <div className={styles.single_column}>
                    <h2 id="error-handeling-and-empty-states">Error handeling and empty
                        states</h2>
                    <p>I designed mockups for errors, empty states, and other edge cases,
                        collaborating closely with the development team.</p>
                    <Image src={img5}
                        title="Preview of all errors that can happen during deposit and withdrawal"
                        alt="Unhappy flows" />
                </div>

                <div className={styles.single_column}>
                    <h2 id="usability-testing">Usability testing</h2>
                    <p>I set up usability tests on UserTesting.com to gather feedback from
                        users and refine the high-fidelity prototypes. The most important
                        insights from were:</p>
                    <ul>
                        <li><p>Allowing users to save payment methods saves time and boosts satisfaction.</p></li>
                        <li><p>To confirm a deposit or withdrawal, toast messages offer sufficient feedback, while dialog boxes are distracting and unnecessary.</p></li>
                    </ul>
                    <div className={styles.image_container} style={{ marginTop: '2em' }}>
                        <Mp4Video
                            src="/works/begame-transaction-history-withdrawal_flow_02.mp4"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                </div>

                <div className={styles.single_column}>
                    <h2 id="design-system">Design system</h2>
                    <p>To ensure consistency, I designed the transaction card components for
                        the shared library and created detailed guidelines to support
                        development and QA teams.</p>
                    <Image src={img7}
                        title="Transaction cards in component library"
                        alt="Transaction history component" />
                </div>

                <h2 id="but-ux-is-never-done">But UX is never done…</h2>
                <p>This project was completed four years ago, and looking back, here are
                    a few areas I’d love to improve today:</p>
                <ul>
                    <li><p>Measure system usability with a usability scale.</p></li>
                    <li><p>Test for accessibility across different devices and user
                        groups.</p></li>
                    <li><p>Improve micro-interactions, especially during loading
                        states.</p></li>
                    <li><p>Conduct more frequent usability testing throughout the product
                        lifecycle.</p></li>
                    <li><p>Enhance assisted onboarding to help all users quickly understand
                        the updated transaction processes.</p></li>
                </ul>
            </div>
        </div>
    )
}
export default Page
