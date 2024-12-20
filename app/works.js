import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';
import matter from 'gray-matter';

export function loadWorks() {
  // Get files from the work directory
  const files = globSync(path.join("public/works/*/*.md"))

  const works = files.map(filename => {
    // Create slug - https://magdadot.com/works/<slug>
    const slug = path.basename(filename, '.md')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(filename, 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  }).sort(function(a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  // Get slug and frontmatter from works
  return works
}
