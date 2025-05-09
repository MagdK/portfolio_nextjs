import styles from './Work.module.scss';
import Link from 'next/link';
import Image from 'next/image'

import begameDesignSystem from './works/begame-design-system/Design_system_cover.png'
import begameTransactionHistory from './works/begame-transaction-history/Transaction_cover.png'
import virtualShowroom from './works/fashionTrade-virtual-showroom/Showroom_cover.png'

function WorkTile({ slug, image, title, subtitle }) {
  return (
    <div className={styles.work_list_card} key={slug} >
      <Link href={`/works/${slug}`}>
        <div className={styles.work_card_image_wrapper}>
          <Image
            src={image}
            alt={title}
            className={styles.work_card_image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          >
          </Image>
        </div>
        <div className={styles.work_card_description_wrapper}>
          <p className={styles.work_title_tag}>{title}</p>
          <p className={styles.work_role_tag}>{subtitle}</p>
        </div>
      </Link>
    </div>
  )
}


export default function Work({ works }) {
  return (
    <section className={styles.work_container} id="work_section">
      <div className={styles.work_wrapper}>
        <h1>work.</h1>
        <p>
          Below are some of the projects I’ve worked on throughout my design career.
        </p>
        <pre>{JSON.stringify(works, null, 2)}</pre>
        <div className={styles.work_list_wrapper}>
          <WorkTile
            slug="begame-transaction-history"
            image={begameTransactionHistory}
            title="Transforming the online gaming transaction experience"
            subtitle="Begame · 2021" />
          <WorkTile
            slug="begame-design-system"
            image={begameDesignSystem}
            title="Crafting a future-proof design system for an online gaming platform"
            subtitle="Begame · 2020" />
          <WorkTile
            slug="fashionTrade-virtual-showroom"
            image={virtualShowroom}
            title="From paper to pixels: Digitalizing the B2B fashion showroom experience"
            subtitle="fashionTrade · 2019" />
        </div>
      </div>
    </section>
  )
}
