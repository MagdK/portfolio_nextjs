import "swiper/css/bundle";

import Navigation from "../components/Navigation";
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Main() {
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