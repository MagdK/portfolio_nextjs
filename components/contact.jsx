import styles from './Contact.module.scss';
import { PrimaryButton, TertiaryButton } from './Button';

const Contact = () => {
    return (
        <section className={styles.contact_container} id="contact_section">
            <div className={styles.contact_wrapper}>
                <h1>contact.</h1>
                <div className={styles.contact_description}>
                    <p>
                    You have gotten this far? Amazing, lets talk.
                    </p>
                    <p>
                    I am available for Product Design and Frontend Development projects. Check out my <a href="https://github.com/MagdK" targer="_blank">Github</a> account
                    Drop me a message and lets create something great together!
                    </p>
                </div>
                <div className={styles.btn_container}>
                    <a href="https://www.linkedin.com/in/magda-kovacs/" target="_blank" rel="noreferrer" className={styles.linkedin_btn}>
                        <PrimaryButton >Connect on LinkedIn</PrimaryButton>
                    </a>
                    <a href="mailto:kovacsmagda@gmail.com" className={styles.email_btn}>
                        <TertiaryButton >Send an email</TertiaryButton>
                    </a>
              </div>
            </div>
        </section>
    )
}

export default Contact;