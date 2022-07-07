import './_app';

import Navigation from "../components/navigation";
import Home from '../components/home';
import About from '../components/about';
import Work from '../components/work';
import Contact from '../components/contact';
import Footer from '../components/footer';

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