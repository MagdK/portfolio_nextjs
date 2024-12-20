import { loadWorks } from './works'

import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';


export const metadata = {
  title: 'magdadot.com',
}

export default function Page() {
  return (
    <main >
      <Home />
      <About />
      <Work works={loadWorks()} />
      <Contact />
    </main>
  )
}
