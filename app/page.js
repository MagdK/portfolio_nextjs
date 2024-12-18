import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';
import matter from 'gray-matter';

import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';


export const metadata = {
  title: 'magdadot.com',
}

export default function Page() {
  const works = loadWorks();

  return (
    <main >
      <Home />
      <About />
      <Work works={works} />
      <Contact />
    </main>
  )
}

function loadWorks() {
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
