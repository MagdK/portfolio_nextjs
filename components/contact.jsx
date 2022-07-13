import styles from './Contact.module.scss';
import { PrimaryButton, TertiaryButton } from './Button';
import Link from 'next/link';

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
                    I am available for product design and frontend development projects. Check out my <a 
                            href="https://github.com/MagdK"
                            target="_blank"
                            rel="noreferrer"
                        >
                        Github
                        </a> account, drop me a message and lets create something great together!
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