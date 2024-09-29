import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';
import matter from 'gray-matter';

import "swiper/css/bundle";
import Head from 'next/head';

import Navigation from "../components/Navigation";
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Main({ works }) {
  return (
    <div >
      <Head>
        <title>magdadot.com</title>
      </Head>
      <Navigation />
      <main >
        <Home />
        <About />
        <Work works={works} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
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
    console.log(a.frontmatter.date, "a pont")
    console.log(new Date(a.frontmatter.date), "new date a")
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });


  // Get slug and frontmatter from works
  return {
    props: {
      works
    }
  }
}
