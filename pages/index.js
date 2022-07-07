import './_app';

import Navigation from "../components/navigation/navigation.component";
import Home from '../components/home/home.component';
import About from '../components/about/about.component';
import Work from '../components/work/work.component';
import Contact from '../components/contact/contact.component';
import Footer from '../components/footer/footer.component';

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