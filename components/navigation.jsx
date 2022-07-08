import Github from './Github';
import LinkedIn from './Linkedin';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.nav_container}>
                <a href="#top">
                    <h2 className={styles.logo_container}>m<span>.</span></h2>
                </a>
                <ul className={styles.menu_container}>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.social_icons_container}>
                <a href="https://www.linkedin.com/in/magda-kovacs/" target="_blank" rel="noreferrer">
                    <LinkedIn className={styles.linkedin_logo}></LinkedIn>
                </a>
                <a href="https://github.com/MagdK" target="_blank" rel="noreferrer">
                    <Github className={styles.github_logo}></Github>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;