import fs from 'fs';
// import glob from 'glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './details.module.scss';

const Work = ({ slug, frontmatter, content }) => {

  return (
    <div className={styles.details_content_wrapper}>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}

export async function getStaticProps(context) {
  const slug = context.params.id;
  const filePath = `works/${slug}/${slug}.md`;
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

  const {data, content} = matter(markdownWithMeta);
  const html = await markdownToHtml(content)

  return {
    props: {
      slug: slug,
      frontmatter: data,
      content: html
    }
  }
}

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'begame-design-system' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export default Work;