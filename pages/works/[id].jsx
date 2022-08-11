import fs from 'fs';
// import glob from 'glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const Work = ({ frontmatter, content }) => {

  return <p>Work: {frontmatter.toString()}, {content}</p>
}

export async function getStaticProps(context) {
  const slug = context.params.id;
  const filePath = `works/${slug}/${slug}.md`;
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

  const {data:frontmatter, content} = matter(markdownWithMeta);


  return {
    props: {
      frontmatter, content
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