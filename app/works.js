import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

function all() {
  // Get files from the work directory
  const files = globSync("public/works/*/*.md")

  const works = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(filename, 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithMeta)
    frontmatter.date = new Date(frontmatter.date)

    return {
      slug: path.basename(filename, '.md'),
      frontmatter,
      content
    }
  })

  return works.sort((a, b) => b.frontmatter.date - a.frontmatter.date)
}

// https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-return-values
// Every time the page gets rendered, this function should return the data, that will be shown on the page
async function find(slug) {
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

const works = {
  all: all,
  find: find,
}
export default works;
