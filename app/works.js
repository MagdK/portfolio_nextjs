import fs from 'fs';
import { globSync } from 'glob';
import { basename } from 'path';
import matter from 'gray-matter';

function all() {
  // Get files from the work directory
  const files = globSync("public/works/*/*.md")

  const works = files.map(filename => {
    const slug = basename(filename, '.md')
    const markdownWithMeta = fs.readFileSync(filename, 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithMeta)
    frontmatter.date = new Date(frontmatter.date)

    return {
      slug,
      frontmatter,
      content,
      images: listFiles(slug, ["png", "gif", "jpg", "jpeg"]),
      videos: listFiles(slug, ["mp4"])
    }
  })

  return works.sort((a, b) => b.frontmatter.date - a.frontmatter.date)
}

function listFiles(slug, extensions = []) {
  const exts = extensions.join("|")
  const path = `public/works/${slug}/!(${slug}).+(${exts})`

  return globSync(path).map(path => path.replace('public', ''))
}

// https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-return-values
// Every time the page gets rendered, this function should return the data, that will be shown on the page
async function find(slug) {
  return all().find(w => w.slug === slug)
}

const works = { all, find }
export default works;
