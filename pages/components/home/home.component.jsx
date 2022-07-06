import Button from '../button/button.component'

const Home = () => {
    return (
        <section className="home-container">
          <div className="home-wrapper">
            <p>Hello, I am Magda,</p>
            <h1><span></span></h1>
            <p>based in the Netherlands.</p>
            <Button type="button" buttonType="primary">View things</Button>
            <Button type="button" buttonType="secondary">Download resume</Button>
          </div>
        </section>
    )
}

export default Home;