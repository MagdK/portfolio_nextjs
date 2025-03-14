import works from '@/works'
import { remark } from 'remark';
import html from 'remark-html';

import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

import styles from './page.module.scss';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import Image from '@/components/Image';
import Mp4Video from '@/components/Mp4Video';
import Link from 'next/link';

async function markdownToHtml(markdown) {
  // const result = await remark().use(html).process(markdown)
  const result = await remark()
    .use(remarkRehype) // Convert Markdown to HTML-compatible format
    .use(rehypeRaw) // Allow raw HTML inside Markdown
    .use(rehypeStringify) // Convert it to an HTML string
    .process(markdown);
  return result.toString().replaceAll("href", 'target="_blank" href');
}

const Page = async ({ params }) => {
  const { id } = await params
  const { frontmatter, content, images, videos } = works.find(id)
  const html = await markdownToHtml(content)
  const prev = works.previous(id)
  const next = works.next(id)

  return (
    <div className={styles.details_content_wrapper}>
      <Link href="/#work_section" className={styles.back_link}>Back to works</Link>
      <h1>{frontmatter.title}</h1>
      <div className={styles.work_description} dangerouslySetInnerHTML={{ __html: html }}></div>

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
      {prev && <Link href={prev.slug} className={styles.back_link}>Previous work</Link>}
      {next && <Link href={next.slug} className={styles.back_link}>Next work</Link>}
    </div>
  )
}
export default Page

export async function generateStaticParams() {
  return works.all().map(work => ({ id: work.slug }))
}
