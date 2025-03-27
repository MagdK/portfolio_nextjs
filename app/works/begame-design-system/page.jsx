import styles from '../page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Link from 'next/link';
import designSystem1 from './Design_system_01.png'
import designSystem2 from './Design_system_02.png'
import designSystem3 from './Design system_3.png'
import designSystem4 from './Design system_4.png'

// HTML meta tags
export const metadata = {
  title: 'Future-proof design system for a bingo platform ',
  description: '...',
}

const Page = async ({ params }) => {
  return (
    <div className={styles.details_content_wrapper}>
      <Link href="/#work_section" className={styles.back_link}>Back to works</Link>
      <h1>{metadata.title}</h1>

      <Image src={designSystem1} alt="Sneak a peak"/>
      <div className={styles.work_description}>
        {/* <h2>Bingocams</h2>
        <p>Bingocams is an online bingo platform, primarily serving the UK, that brings people together through fun, interactive gameplay while fostering a strong sense of community.</p> */}
        <h2 id="impact">Impact</h2>
        <p>The introduction of the design system had a notable impact on both
          the product and team workflows:</p>
        <ul>
          <li><p>Consistency and cohesion: The platform’s visual consistency
            improved significantly, providing users with a seamless and intuitive
            interface that aligned with Bingocams’ brand identity.</p></li>
          <li><p>Efficiency and productivity: With a shared library of components
            and design guidelines, the development team was able to implement new
            features more quickly and with fewer iterations, reducing production
            time and costs.</p></li>
          <li><p>Scalability: As the product evolved, the design system allowed
            for smooth scaling, enabling new features to integrate seamlessly into
            the existing UI.</p></li>
          <li><p>User satisfaction: The consistency and intuitiveness of the
            updated UI led to positive feedback from users, enhancing their overall
            experience on the platform.</p></li>
        </ul>
        <h2 id="problem">Problem</h2>
        <p>Bingocams.co.uk, a community-focused bingo platform, was undergoing a
          UI refresh to improve the user experience. However, the lack of a
          structured component library created inefficiencies in the design and
          development process, often resulting in an inconsistent user experience
          and requiring repetitive work for common UI elements. This inconsistency
          affected both the platform’s usability and the speed of
          implementation.</p>

        <div className={styles.table_container}>
          <div className={styles.column}>
            <h2 id="tools">Deliverables</h2>
              <ul>
                <li>Design system</li>
                <li>Token library</li>
                <li>Component library</li>
                <li>Design guidelines and documentation</li>
                <li>Product design</li>
              </ul> 
              </div> 
                <div className={styles.column}>
                  <h2 id="role">Expertise</h2>
                  <ul>
                    <li>Design systems</li>
                    <li>Design tokens</li>
                    <li>Product design</li>
                  </ul>
                    <h2 id="timeline">Timeline</h2>
                    <ul>
                      <li>4X2 weeks sprints + continuous maintenance</li>
                    </ul>  
                  </div>
          </div>  

        <h2 id="project-overview">The challenge</h2>
        <p>
          Our goal was to create an adaptable design system that is easy to manage, and can support the expansion of the company&#39;s gaming brands.
        </p>
        <p>
          To build a lasting design system, a solid foundation is essential.
        </p>
        <p>
          Building components is the easy part, the true success of design systems—and their impact on company growth—lies in a well-structured token architecture, robust sub-systems, cohesive core styles, and strong team collaboration.
        </p>

        <Image src={designSystem2} alt="Team collaboration"/>

        <h2 id="process">Healthy collaboration</h2>
        <p>
        While design system development often prioritises technical needs over cross-team collaboration, finding a balance is crucial. By fostering a culture of open communication, adapting the system to team needs, and actively listening to feedback while incorporating it, we can create a system that truly works for everyone.
        </p>
        <h2 id="results">Results</h2>
        <p>The design system became a pivotal tool in ensuring a unified user
          experience across Bingocams.co.uk. Thanks to the structured
          collaboration, the platform’s UI consistency improved, resulting in a
          better product for users and a more efficient development cycle for the
          team. This project not only addressed the immediate needs of the UI
          refresh but also set a scalable foundation for future growth and design
          innovation.</p>
      </div>

      {/* <div className={styles.image_container}>
        <Image src={designSystem4} />
        <Image src={designSystem3} />
        <Image src={designSystem2} />
        <Image src={designSystem1} />
      </div> */}
    </div>
  )
}
export default Page
