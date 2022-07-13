import fs from 'fs';
import path from 'path';
import "swiper/css/bundle";

import Navigation from "../components/Navigation";
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Main({ posts }) {
  return (
    <div >
      <Navigation />
      <main >
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("works"))

  return {
    props: {
      posts: "The Posts"
    }
  }
}