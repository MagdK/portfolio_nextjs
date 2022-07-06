// import './navigation.styles.css';

const Navigation = () => {
    return (
        <div className="nav-container">
            <h1 calssName="logo-container">m.</h1>
            <nav className="nav-container">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </nav>
            <div className="social-icons-container">
                <span>LinkedIn</span>
                <span>Github</span>
            </div>
        </div>
    )
}

export default Navigation;