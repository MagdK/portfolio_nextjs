'use client';

import styles from './Work.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import { PrimaryButton } from '@/components/Button';
import { useState } from 'react';


export default function Work({ works }) {
  const [worksToDisplay, setWorksToDisplay] = useState(works.slice(0, 6));

  return (
    <section className={styles.work_container} id="work_section">
      <div className={styles.work_wrapper}>
        <h1>work.</h1>
        <p>
        Below are some of the projects I’ve worked on throughout my design career.
        </p>
        <div className={styles.work_list_wrapper}>
          {worksToDisplay.map((work) => {
            return (
              <div
                className={styles.work_list_card}
                key={work.slug}
              >

                <Link href={`/works/${work.slug}`}>
                  <Image
                    src={`/works/${work.slug}/${work.slug}.png`}
                    alt={`${work.slug}`} width="400" height="400"
                    className={styles.work_card_image}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }}
                  >
                  </Image>
                  <div className={styles.work_card_description_wrapper}>
                    <p className={styles.work_title_tag}>{work.frontmatter.title}</p>
                    <p className={styles.work_role_tag}>{work.frontmatter.role}</p>
                  </div>
                </Link>
              </div>
            )
          })}


        </div>
        <div className={styles.btn_container}>
          <PrimaryButton
            href="#work_section"
            onClick={(event) => {
              if (worksToDisplay.length === 6) {
                event.preventDefault()
                setWorksToDisplay(works)
              } else {
                setWorksToDisplay(works.slice(0, 6))
              }
            }}
          >
            {worksToDisplay.length === 6 ? "Show all" : "Show less"}
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
