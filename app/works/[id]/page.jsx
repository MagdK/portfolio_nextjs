import works from '@/works'
import { globSync } from 'glob';
import path from 'path';

import styles from './page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Mp4Video from '@/components/Mp4Video';
import Link from 'next/link';

const Page = async ({ params }) => {
  const { id } = await params
  const { frontmatter, content, images, videos } = await works.find(id)

  return (
    <div className={styles.details_content_wrapper}>
      <Link href="/#work_section" className={styles.back_link}>Go back</Link>
      <h1>{frontmatter.title}</h1>
      <div className={styles.work_description} dangerouslySetInnerHTML={{ __html: content }}></div>

      {(frontmatter.websiteURL) &&
        <div className={styles.btn_container}>
          <PrimaryButton
            href={`${frontmatter.websiteURL}`}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </PrimaryButton>
        </div>
      }

      {(frontmatter.github) &&
        <div className={styles.btn_container}>
          <SecondaryButton
            href={`${frontmatter.github}`}
            target="_blank"
            rel="noreferrer"
          >
            Github repo
          </SecondaryButton>
        </div>
      }

      {/* TODO: Remove once listing videos is not needed */}
      {frontmatter.listVideos &&
        <div className={styles.image_container} style={{ marginTop: '2em' }}>
          {videos.map((image) => {
            return (<Mp4Video
              key={image}
              src={image}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />)
          })}
        </div>
      }
      {/* TODO: Remove once listing images is not needed */}
      {frontmatter.listImages &&
        <div className={styles.image_container}>
          {images.map((image) => {
            return (<Image
              src={image}
              key={image}
              alt={image}
            />)
          })}
        </div>
      }
    </div>
  )
}
export default Page

export async function generateStaticParams() {
  return works.all().map(work => ({ id: work.slug }))
}
