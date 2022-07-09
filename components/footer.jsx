import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_wrapper}>
                <p>Made by Magda with <span>♥</span> and lots of 🍵.</p>
            </div>
        </footer>        
    )
}

export default Footer;