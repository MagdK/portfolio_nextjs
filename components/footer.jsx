import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_wrapper}>
                <p>made by Magda with <span>♥</span></p>
            </div>
        </footer>        
    )
}

export default Footer;