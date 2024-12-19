import styles from './Contact.module.scss';
import { PrimaryButton, TertiaryButton } from '../components/Button';

const Contact = () => {
    return (
        <section className={styles.contact_container} id="contact_section">
            <div className={styles.contact_wrapper}>
                <h1>contact.</h1>
                <div className={styles.contact_description}>
                    <p>
                        Made it this far? Fantastic! I&apos;d love to chat.
                    </p>
                    <p>
                        I&apos;m open to collaborating on exciting product design projects. Feel free to reach out, and let&apos;s build something amazing together!
                    </p>
                </div>
                <div className={styles.btn_container}>
                    <PrimaryButton
                        href="https://www.linkedin.com/in/magda-kovacs/" target="_blank"
                        rel="noreferrer"
                    >
                        Connect on LinkedIn
                    </PrimaryButton>
                    <TertiaryButton
                        href="mailto:kovacsmagda@gmail.com"
                    >
                        Send an email
                    </TertiaryButton>
                </div>
            </div>
        </section>
    )
}

export default Contact;
