import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Mp4Video from '@/components/Mp4Video';
import Link from 'next/link';

const Page = async ({ params }) => {
  const { id } = await params
  const { frontmatter, content, images, videos } = await loadWork(id)

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

// https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-return-values
// Every time the page gets rendered, this function should return the data, that will be shown on the page
async function loadWork(slug) {
  const filePath = `public/works/${slug}/${slug}.md`;
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(markdownWithMeta);
  const html = await markdownToHtml(content);
  const replacedHref = html.replaceAll("href", 'target="_blank" href');

  const images = globSync(path.join(`public/works/${slug}/!(${slug}).+(png|gif|jpg|jpeg)`))
    .map(img_path => img_path.replace('public', ''))
  const videos = globSync(path.join(`public/works/${slug}/!(${slug}).+(mp4)`))
    .map(video_path => video_path.replace('public', ''))

  return {
    slug: slug,
    frontmatter: data,
    content: replacedHref,
    images: images,
    videos: videos,
  }
}

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function generateStaticParams() {
  return globSync(path.join("public/works/*")).map(dir => {
    return { id: path.basename(dir) }
  })
}
