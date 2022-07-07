import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.nav_container}>
                <h2 className={styles.logo_container}>m<span>.</span></h2>
                <ul className={styles.menu_container}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.social_icons_container}>
                    <span>LinkedIn</span>
                    <span>Github</span>
                </div>
            </div>
        </div>
    )
}

export default Navigation;