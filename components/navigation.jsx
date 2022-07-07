import '../pages/_app';
import './navigation.module.scss';

const Navigation = () => {
    return (
        <div className="header-container">
            <h2 calssName="logo-container">m<span>.</span></h2>
            <ul className="nav-container">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="social-icons-container">
                <span>LinkedIn</span>
                <span>Github</span>
            </div>
        </div>
    )
}

export default Navigation;