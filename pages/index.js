import Navigation from "./components/navigation/navigation.component";


export default function Home() {
  return (
    <div >
      <Navigation />

      <main >
        <section className="home-container">
          <p>Hello, I am Magda,</p>
          <h2>Product Designer</h2>
          <h2>Frontend Developer</h2>
          <p>based in the Netherlands.</p>
          <button>View Things</button>
          <button>Download Resume</button>
        </section>

        <section className="about-container">
          <h2>about.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
          </p>
        </section>

        <section className="work-container">
          <h2>work.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
          </p>
        </section>

        <section className="contact-container">
          <h2>contact.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
          </p>
        </section>

      </main>

      <footer >
       <p>crafted with ♥ by Magda Kovács</p>
      </footer>
    </div>
  )
}