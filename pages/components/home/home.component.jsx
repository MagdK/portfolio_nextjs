import Button from '../button/button.component'

const Home = () => {
    return (
        <section className="home-container">
          <p>Hello, I am Magda,</p>
          <h2>Product Designer</h2>
          <h2>Frontend Developer</h2>
          <p>based in the Netherlands.</p>
          <Button type="button" buttonType="primary">View things</Button>
          <Button type="button" buttonType="secondary">Download resume</Button>
        </section>
    )
}

export default Home;