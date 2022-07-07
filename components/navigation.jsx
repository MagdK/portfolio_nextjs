import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.header_container}>
            <h2 className="logo-container">m<span>.</span></h2>
            <ul className={styles.nav_container}>
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