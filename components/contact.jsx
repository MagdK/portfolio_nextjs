import styles from './Contact.module.scss';
import { PrimaryButton, TertiaryButton } from './Button';

const Contact = () => {
    return (
        <section className={styles.contact_container}>
            <div className={styles.contact_wrapper}>
                <h1>contact.</h1>
                <p>
                You have gotten this far? Amazing, lets talk.
                </p>
                <p>
                I am available for Product Design and Frontend Development projects. 
                Drop me a message and lets create something great together!
                </p>
                <PrimaryButton 
                    type="button" 
                    className={styles.primary}
                >
                    Connect on LinkedIn
                </PrimaryButton>

                <TertiaryButton 
                    type="button" 
                    className={styles.tertiary}
                >
                    Send an email
                </TertiaryButton>
            </div>
        </section>
    )
}

export default Contact;