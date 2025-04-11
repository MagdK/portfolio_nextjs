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
import img8 from './Transaction_10.png'

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

                <div className={styles.triple_column}>
                    <div className={styles.column_2x}>
                        <h2 id="impact">Impact</h2>
                        <ul>
                            <li><p><b className={styles.emphasis}>Enhanced user satisfaction</b> with improved usability and intuitive
                                design.</p></li>
                            <li><p><b className={styles.emphasis}>Decreased support inquiries</b> by streamlining workflows and
                                reducing friction points.</p></li>
                            <li><p><b className={styles.emphasis}>Enhanced deposit and withdrawal processes</b>, making transactions
                                smoother and more efficient.</p></li>
                            <li><p><b className={styles.emphasis}>Improved user engagement</b> by creating a more seamless and
                                enjoyable experience.</p></li>
                        </ul>
                    </div>
                    
                    <div className={styles.column_1x}>
                        <h2 id="role">Role</h2>
                        <ul>
                            <li>User research &amp; analysis</li>
                            <li>UX/UI redesign</li>
                            <li>Component creation</li>
                            <li>Design system updates</li>
                            <li>Usability testing</li>
                        </ul>
                        <h2 id="timeline">Timeline</h2>
                        <ul>
                            <li>3X2 weeks sprints</li>
                        </ul>  
                    </div>
                    <div className={styles.column_1x}>
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
                </div>

                <div className={styles.single_column}>
                    <h2 id="problem-statement">Problem statement</h2>
                    <p>Bingocams’ community members experienced challenges in obtaining a
                        clear, organized overview of their transactions. Although the
                        transaction processes themselves were functional, a lack of clear
                        information led to user confusion, increased customer support inquiries,
                        and, potentially, member loss.
                    </p>
                    <Image src={img8}
                        title="Process was: Define, Research, Analyse, Design, Test" alt="Process was: Define, Research, Analyse, Design, Test"/>
                </div>
 
                
                {/* <div className={styles.single_column}>
                    <h2 id="project-overview">Project overview</h2>
                    <p>Confusing transaction processes led to frequent support requests.
                        This project focused on deposits and withdrawals, improved transaction
                        flows, and enhanced clarity of transaction history, reducing support
                        needs and boosting user satisfaction.
                    </p>
                </div> */}

                <div className={styles.single_column}>
                    <h2 id="problem-discovery">Problem discovery</h2>
                    <ul>
                        <li><p>I have reviewed insights from the customer success team to understand
                            recurring user concerns.</p></li>
                        <li><p>To uncover hidden pain points and validate customer success feedback, I conducted and analyzed user tests with five new and five returning users, focusing on deposits, withdrawals, and navigation within the existing design.</p></li>
                    </ul>
                </div>


                <div className={styles.single_column}>
                    <h2>Analysis</h2>
                    <p>Users&#39; pain points before the redesign</p>
                    <Image src={img2}
                        title="Preview of transactions before the redesign"
                        alt="Before state of the transaction overview" />
                </div>

                {/* <div className={styles.single_column}>
                    <h2 id="solution">Solution</h2>
                    <p>To address these challenges, I proposed a redesign of the
                        transactions page. The updated design was intended to provide a more
                        organized, accessible, and informative transaction experience that
                        empowered users to track their activity confidently and
                        independently.</p>
                </div> */}

                <div className={styles.single_column}>
                    <h2 id="wireframes">Ideation</h2>
                    <ul>
                        <li>
                            <p>
                            <b className={styles.emphasis}>Proposed solution:</b> To address the identified challenges, I proposed a comprehensive redesign of the transactions page. The goal was to create a more intuitive, organized, and accessible experience that would enable users to confidently track their financial activity with minimal friction. The new design aimed to reduce cognitive load while supporting independent navigation and discovery.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b className={styles.emphasis}>Wireframing & concept exploration:</b> I began by sketching and prototyping several wireframe variations for the transaction overview page, focusing on layout structure, content hierarchy, and mobile responsiveness. These wireframes served as the foundation for early user testing and feedback sessions.
                            </p>
                        </li>
                    </ul>
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
                    <h2 id="usability-testing">Testing</h2>
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
