import "swiper/css/bundle";
import Head from 'next/head';

import Navigation from "../components/Navigation";
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Main() {
  return (
    <div >
      <Head>
        <title>magdadot.com</title>
      </Head>
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