import styles from '../page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Link from 'next/link';
import designSystem1 from './Design_system_01.png'
import designSystem2 from './Design_system_02.png'
import designSystem3 from './Design_system_03.png'
import designSystem4 from './Design_system_04.png'
import designSystem5 from './Design_system_05.png'
import designSystem6 from './Design_system_06.png'

// HTML meta tags
export const metadata = {
  title: 'Setting up a future-proof design system for a bingo community ',
  description: '...',
}

const Page = async ({ params }) => {
  return (
    <div className={styles.details_content_wrapper}>
      <Link href="/#work_section" className={styles.back_link}>Back to works</Link>
      <h1>{metadata.title}</h1>

      <Image src={designSystem1} alt="Sneak a peak"/>
      <div className={styles.work_description}>

        <div className={styles.triple_column}>
                    <div className={styles.column_2x}>
                      <h2 id="impact">Impact</h2>
                      <p>The introduction of the design system had a notable impact on both the product and team workflows:</p>
                      <ul>
                        <li><p><b className={styles.emphasis}>Stronger collaboration:</b> By fostering open communication about teams&#39; needs, the system became a shared language that streamlined cross-team efforts.</p></li>
                        <li><p><b className={styles.emphasis}>Speed & efficiency:</b> A unified library of components reduced redundant work, enabling faster iteration and delivery while cutting production costs.</p></li>
                        <li><p><b className={styles.emphasis}>Scalability & flexibility:</b> As the product evolved, the system ensured consistency while allowing for effortless expansion and adaptation.</p></li>
                        <li><p><b className={styles.emphasis}>User impact:</b> A more cohesive and intuitive interface led to improved user satisfaction and engagement.</p></li>
                      </ul>   
                    </div>
                    
                    <div className={styles.column_1x}>
                        <h2 id="role">Role</h2>
                        <ul>
                            <li>Lead designer</li>
                        </ul>
                        <h2 id="timeline">Timeline</h2>
                        <ul>
                            <li>4X2 weeks sprints</li>
                            <li>Continuous maintenance for an other year</li>
                        </ul>  
                        <h2>Collaboration with</h2>
                        <ul>
                          <li>Product team</li>
                          <li>Engineering</li>
                          <li>Support</li>
                          <li>Marketing & branding team</li>
                        </ul>
                    </div>
                    <div className={styles.column_1x}>
                        <h2 id="tools">Tools</h2>
                        <ul>
                            <li>Sketch</li>
                            <li>Zeplin</li>
                            <li>Abstract</li>
                            <li>BootstrapVue</li>
                            <li>Material Icons</li>
                            <li>Confluence</li>
                            <li>Jira</li>
                        </ul> 
                    </div>
                </div>

        <div className={styles.single_column}>
          <h2 id="problem-statement">Problem statement</h2>
          <p>Bingocams, a UK-based online gaming platform, lacked a design system, making its much-needed UI update challenging and inconsistent. To support future growth and a cohesive user experience, I led the creation of a scalable, adaptable design system to ensure consistency, enhance collaboration, and streamline the UI refresh.
          </p>
        </div>   

        <div className={styles.single_column}>
          <h2 id="problem-statement">Process</h2>
          <p>
            The visual below outlines the key stages I followed throughout the project. 
          </p>
          <Image src={designSystem2} title="Process: Collaboration + analysis, setting up tokens, crafting components, documentation" alt="Process: Collaboration + analysis, setting up tokens, crafting components, documentation"/>
        </div>

        <div className={styles.table2_container}>
          <div className={styles.column2}>
          <Image src={designSystem3} alt="Team collaboration"/>
          </div>
          <div className={styles.column2}>
            <h2 id="process">Collaboration</h2>
            <p>While teams often prioritize technical needs over cross-collaboration, one of the most challenging parts was finding balance. I focused on fostering a culture of open communication, actively listening to feedback, and incorporating it. This way, we created a system that worked for everyone.
            </p>
          </div>
        </div>

        <div className={styles.table2_container}>
          <div className={styles.column2}>
            <Image src={designSystem4} alt="Token architecture - two tiered setup"/>
          </div>
          <div className={styles.column2}>
            <h2 id="process">Setting up tokens</h2>
            <p>Design tokens define a company’s visual style and make it easy to adapt for new brands, saving time and effort. This setup was built with engineers to ensure alignment with the code, enabling seamless collaboration through a shared language.</p>
          </div>
        </div>

        <div className={styles.table2_container}>
          <div className={styles.column2}>
            <Image src={designSystem5} alt="T-shirt sized buttons"/>
          </div>
          <div className={styles.column2}>
            <h2 id="process">Sub-system</h2>
            <p>I used t-shirt sizing to keep components consistent and create a clear hierarchy. It helped maintain visual balance, sped up decision-making, and made collaboration between designers and developers easier.</p>
          </div>
        </div>

        <div className={styles.table2_container}>
          <div className={styles.column2}>
            <Image src={designSystem6} alt="T-shirt sized buttons"/>
          </div>
          <div className={styles.column2}>
            <h2 id="process">Crafting components</h2>
            <p>I used the atomic design approach for consistency. Small, reusable components ensured a unified design language and reduced redundancy across the system. This approach also helped the team work more efficiently and allowed for scalability.</p>
          </div>
        </div>

        <h2 id="process">Documentation</h2>
        <p>Well-written documentation is key for ensuring smooth cross-team collaboration and onboarding new team members. To achieve this, we created a single source of truth where everyone could easily learn how the system works.</p>

        <h2 id="results">Results</h2>
        <p>The design system played a key role in creating a consistent user experience on Bingocams.co.uk. It improved UI consistency, streamlined development, and set the stage for future growth and innovation.</p>
      
      </div>
    </div>
  )
}
export default Page
