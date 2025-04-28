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
                            <li><p><b className={styles.emphasis}>Enhanced user engagement and satisfaction</b> through improved usability and intuitive design.</p></li>
                            <li><p><b className={styles.emphasis}>Decreased support inquiries</b> by streamlining workflows and
                                reducing friction points.</p></li>
                            <li><p><b className={styles.emphasis}>Enhanced deposit and withdrawal processes</b>, making transactions
                                smoother and more efficient.</p></li>
                        </ul>
                    </div>
                    
                    <div className={styles.column_1x}>
                        <h2 id="role">Role</h2>
                        <ul>
                            <li>User research &amp; analysis</li>
                            <li>Stakeholder interviews</li>
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
                    
                </div>

                <div className={styles.single_column}>
                    <h2 id="problem-statement">Process</h2>
                    <p>
                    This project followed a user-centered design process, outlined below—from initial discovery to final design solutions.
                    </p>
                    <Image src={img8}
                        title="Process was: Discovery, Analysis, Ideation, Design, Test and repeat" alt="Process was: Discovery, Analysis, Ideation, Design, Test and repeat"/>
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
                        <li><p>To better understand the current challenges, I conducted <b className={styles.emphasis}>stakeholder interviews</b> and reviewed <b className={styles.emphasis}>existing insights</b> provided by the customer success team. This helped surface key user concerns and areas of friction.</p></li>
                        <li><p>To uncover hidden pain points and validate internal feedback, I conducted <b className={styles.emphasis}>usability tests</b> with ten users—five new and five returning—focusing on core actions such as deposits, withdrawals, and overall navigation within the existing interface.</p></li>
                    </ul>
                </div>


                <div className={styles.single_column}>
                    <h2>Analysis</h2>
                    <ul>
                        <li><p>I performed <b className={styles.emphasis}>competitor analysis</b> to benchmark industry standards and identify potential opportunities for improvement.</p></li>
                        <li><p>After gathering insights from stakeholder interviews, customer support data, competitor research, and usability testing, I synthesized the findings to identify patterns and <b className={styles.emphasis}>recurring pain points</b> across the user journey.</p></li>
                    </ul>
                    
                    <Image src={img2}
                        title="Overview of all transactions before the redesign"
                        alt="Overview of all transactions before the redesign" />
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
                            <b className={styles.emphasis}>Proposed solution:</b> To address the identified challenges, I proposed a comprehensive redesign of the transaction overview page. The goal was to create a more intuitive, organised, and accessible experience that would enable users to confidently track their financial activity with minimal friction. The new design aimed to reduce cognitive load while supporting independent navigation and discovery.
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

                <div className={styles.single_column}>
                        <h2 id="high-fidelity-design">High-fidelity design</h2>
                        <ul>
                            <li>
                            <p>Based on early <b className={styles.emphasis}>wireframe testing</b>, I created high-fidelity mockups that reflected users’ preference for a simple layout over advanced features like filtering—especially among less tech-savvy users.
                        </p>
                            </li>
                            <li>
                                <p>
                                Following our <b className={styles.emphasis}>mobile-first approach</b>, we chose a clean grid layout over a table view, as it tested better for scannability and adaptability across devices—making it ideal for the MVP.
                                </p>
                            </li>
                            <li>
                                <p>
                                The final design was shaped by user feedback and validated through testing, ensuring alignment with both user needs and business goals. I then created <b className={styles.emphasis}>responsive high-fidelity prototypes</b>, emphasizing transaction status and clear labeling, covering all breakpoints for a seamless experience across devices.
                                </p>
                            </li>
                        </ul>
                        
                        <Image src={img4}
                        title="Preview of deposit overview" alt="Preview of deposit overview"/>
                </div>
                
                <div className={styles.single_column}>
                    <h2 id="error-handeling-and-empty-states">Error handeling and empty
                        states</h2>
                    <p>I designed mockups for <b className={styles.emphasis}>error states, empty states, and other edge cases</b>, ensuring a clear and consistent user experience. I collaborated closely with the development team to ensure these scenarios were seamlessly integrated into the final design.</p>
                    <Image src={img5}
                        title="Preview of all errors that can happen during deposit and withdrawal"
                        alt="Unhappy flows" />
                </div>

                <div className={styles.single_column}>
                    <h2 id="usability-testing">Testing</h2>
                    <p>With a near-final version of the design, I conducted usability tests to gather valuable user feedback and refine the high-fidelity prototypes. Key insights are outlined below and were incorporated into the final MVP, contributing to its successful launch.
                    </p>
                    <ul>
                        <li><p>Allowing users to save payment methods enhances convenience and satisfaction.</p></li>
                        <li><p>Toast messages are effective for confirming successful transactions, as they provide quick, non-intrusive feedback. However, for error states or failed transactions, dialog boxes are better suited, as they ensure the user notices and takes necessary action.</p></li>
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
