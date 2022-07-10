import Navigation from "../components/Navigation";
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ToTop from '../components/ToTop';

export default function Main() {
  return (
    <div >
      {/* <ToTop /> */}
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