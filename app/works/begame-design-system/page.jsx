import works from '@/works'
import styles from '../page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Link from 'next/link';
import designSystem1 from './Design system_1.png'
import designSystem2 from './Design system_2.png'
import designSystem3 from './Design system_3.png'
import designSystem4 from './Design system_4.png'

export const metadata = {
  title: 'Crafting a future-proof design system for an online gaming platform',
  description: '...',
}

const Page = async ({ params }) => {
  const { id } = 'begame-design-system'
  const prev = works.previous(id)
  const next = works.next(id)

  // cover_image: "begame-design-system.png"
  // tags: Design system, Colour theory, UI, Accessibility, Atomic design, Responsive design, Bootstrap,  Sketch, Zeplin, Abstract

  return (
    <div className={styles.details_content_wrapper}>
      <Link href="/#work_section" className={styles.back_link}>Back to works</Link>
      <h1>{metadata.title}</h1>
      <div className={styles.work_description}>
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
        <h2 id="role">Role</h2>
        <p>Lead desinger</p>
        <h2 id="tools">Tools</h2>
        <ul>
          <li>Sketch</li>
          <li>Zeplin</li>
          <li>BootstrapVue</li>
          <li>Material Icons</li>
          <li>WebAIM contrast checker</li>
          <li>Confluence</li>
          <li>Jira</li>
        </ul>
        <h2 id="duration">Duration</h2>
        <ul>
          <li>4X2 weeks sprints</li>
          <li>maintanance for an other year</li>
        </ul>
        <h2 id="project-overview">Project overview</h2>
        <p>To streamline the collaboration between product and development teams
          and create a cohesive visual language across the Bingocams platform, I
          co-led the creation of a robust design system. Built on Bootstrap, the
          system became the UI backbone, providing a library of reusable
          components, design guidelines, and visual standards that enhanced
          consistency across the platform. By establishing a scalable design
          framework, we were able to expedite feature development and improve
          cross-functional communication, ensuring alignment on visual and
          functional details from the outset.</p>
        <h2 id="process">Process</h2>
        <ul>
          <li><p>Research &amp; Analysis: Conducted an audit of existing UI
            elements to identify inconsistencies and redundancies across the
            platform.</p></li>
          <li><p>Design System Structure: Created a component library using
            BootstrapVue as a foundation, prioritizing components commonly used
            across Bingocams.co.uk. Worked with stakeholders to define design
            guidelines, ensuring they were aligned with the brand’s visual identity
            and adaptable to various platform requirements.</p></li>
          <li><p>Documentation: Documented each component’s usage, interaction
            states, and styling specifications in Zeplin, making it easier for
            developers to integrate components accurately.</p></li>
          <li><p>Iterative Testing &amp; Feedback: Regularly tested components in
            the platform environment, gathered feedback from both designers and
            developers, and made adjustments as needed. This collaborative process
            helped us refine and expand the design system over time.</p></li>
        </ul>
        <h2 id="results">Results</h2>
        <p>The design system became a pivotal tool in ensuring a unified user
          experience across Bingocams.co.uk. Thanks to the structured
          collaboration, the platform’s UI consistency improved, resulting in a
          better product for users and a more efficient development cycle for the
          team. This project not only addressed the immediate needs of the UI
          refresh but also set a scalable foundation for future growth and design
          innovation.</p>
      </div>

      <div className={styles.image_container}>
        <Image src={designSystem1} />
        <Image src={designSystem2} />
        <Image src={designSystem3} />
        <Image src={designSystem4} />
      </div>

      {prev && <Link href={prev.slug} className={styles.back_link}>Previous work</Link>}
      {next && <Link href={next.slug} className={styles.back_link}>Next work</Link>}
    </div>
  )
}
export default Page
