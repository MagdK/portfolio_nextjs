import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_wrapper}>
                <p>made with <span>♥</span> by Magda </p>
            </div>
        </footer>        
    )
}

export default Footer;