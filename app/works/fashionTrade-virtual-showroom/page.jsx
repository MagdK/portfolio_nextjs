import styles from '../page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Mp4Video from '@/components/Mp4Video';
import Link from 'next/link';
import img1 from './showroom_01.png'

// HTML meta tags
export const metadata = {
  title: 'Digital showroom for a B2B fashiontech app',
  description: '...',
}

const Page = ({ params }) => {
  return (
    <div className={styles.details_content_wrapper}>
      <Link href="/#work_section" className={styles.back_link}>Back to works</Link>
      <h1>{metadata.title}</h1>
      <div className={styles.work_description}>
        <h2 id="objective">Objective</h2>
        <p>Create a digital showroom experience enabling fashion brands to
          effectively tell their stories, showcase collections, and connect with
          retailers who seek brands that align with their store concepts.</p>
        <h2 id="duration">Duration</h2>
        <p>The MVP of the showroom feature was launched within two months, with
          ongoing iterations to enhance the functionality and user experience.</p>
        <h2 id="my-role">My role</h2>
        <ul>
          <li>Analysed data from workshops and user interviews</li>
          <li>Developed personas and empathy maps based on user insights</li>
          <li>Authored user stories and participated in mapping user journeys</li>
          <li>Drafted the problem statement, hypothesis, and value
            proposition</li>
          <li>Set the project’s goal statement</li>
          <li>Engaged in brainstorming activities, including Crazy 8s and “How
            Might We” exercises</li>
          <li>Designed low-fidelity wireframes, tested with users, and iterated
            based on feedback</li>
          <li>Created high-fidelity prototypes, conducted further user testing,
            and implemented iterative improvements</li>
          <li>Produced design assets and detailed handover guidelines for the
            development team</li>
        </ul>
        <h2 id="tools">Tools</h2>
        <p>Google Docs, Google Sheets, Sketch, Zeplin, InVision, and Jira.</p>
        <h2 id="problem-statement">Problem statement</h2>
        <p>Fashion wholesalers face challenges in adapting to digital-first
          environments, often relying on in-person sales supported by spreadsheets
          and paper. These traditional approaches lead to inefficiencies, heavy
          logistical costs, and difficulty in conveying brand identity in an
          online format. As the industry transitions to digital, brands need an
          effective, story-driven solution to streamline operations and improve
          visibility.</p>
        <h2 id="key-how-might-we-questions">Key “How Might We” questions</h2>
        <ul>
          <li>How might we help brands effectively tell their stories?</li>
          <li>How might we enable retailers to discover brands that best suit
            their store concepts?</li>
        </ul>
        <h2 id="hypothesis-statement">Hypothesis statement</h2>
        <p>By creating a digital showroom experience tailored to the needs of
          fashion wholesalers, we believe we can help brands share their stories
          and showcase their identities online. If successful, this feature will
          streamline sales, reduce operational costs, and enhance brand
          visibility, empowering wholesalers to align with modern, digital-first
          business practices.</p>
        <h2 id="value-proposition">Value proposition</h2>
        <p>Our digital showroom feature provides fashion wholesalers a dynamic
          platform to showcase their brands online. By blending storytelling with
          user-friendly design, this solution reduces logistical challenges,
          enhances global brand reach, and supports the shift to a sustainable
          digital environment.</p>
        <h2 id="goal-statement">Goal statement</h2>
        <p>Our goal is to develop a digital showroom experience that enables
          brands to convey their unique stories online, improving operational
          efficiency, reducing costs, and supporting a smooth transition to modern
          digital practices.</p>
        <h2 id="process">Process</h2>
        <ul>
          <li><p>Empathize: I analysed the data from user interviews and workshops
            with fashion brands to understand their needs and pain points. Using
            these insights, I created empathy maps and personas to capture the
            motivations and challenges of our users.</p></li>
          <li><p>Define: Based on user insights, I formulated a problem statement,
            a hypothesis statement, and a clear value proposition, defining the need
            for a digital solution that supports storytelling and streamlines brand
            discovery for retailers.</p></li>
          <li><p>Ideate: With the foundational insights in place, I participated
            in ideation sessions lead by the UX lead, including Crazy 8s and “How
            Might We” exercises, to brainstorm possible solutions. I collaborated
            with the team to align on a goal statement that would guide our design
            approach.</p></li>
          <li><p>Prototype: I created low-fidelity wireframes and validated them
            with users to ensure the core functionality met their needs. After
            several iterations based on user feedback, I moved on to high-fidelity
            prototypes, incorporating design elements that would enable brands to
            build an immersive, story-driven digital showroom.</p></li>
          <li><p>Test: Throughout the prototyping phase, I conducted continuous
            user testing and iterated on the designs to improve usability and user
            satisfaction. I also regularly communicated with the development team to
            address any technical constraints, ensuring a smooth transition from
            design to development.</p></li>
        </ul>
        <h2 id="results">Results</h2>
        <p>User Satisfaction and Platform Adoption: With continuous feedback
          from brand users, the digital brand showroom feature was successfully
          launched, making it easier for brands to gain online visibility.</p>
        <p>This feature empowered brands to access their showrooms anytime,
          anywhere, and offered tools to create a branded experience through
          videos, lookbooks, and images, allowing brands to better tell their
          stories and link their styles to product offerings.</p>
        <p>For retailers, the showroom feature made it easier to discover brands
          that matched their store aesthetics and needs, ultimately improving
          brand-retailer connections on the platform.</p>
        <p>As a result, brand sign-ups increased significantly, demonstrating
          the demand and effectiveness of this digital solution.</p>
      </div>

      <div className={styles.btn_container}>
        <PrimaryButton
          href="https://www.fashiontrade.com/brands/digital-showroom-fashion/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </PrimaryButton>
      </div>
      <div className={styles.image_container} style={{ marginTop: '2em' }}>
        <Mp4Video
          src="/works/fashionTrade-virtual-showroom_prototype_01.mp4"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>

      <div className={styles.image_container}>
        <Image src={img1} />
      </div>
    </div>
  )
}
export default Page
