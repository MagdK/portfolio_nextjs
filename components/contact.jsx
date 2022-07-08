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
                <div className={styles.btn_container}>
                <PrimaryButton>Connect on LinkedIn</PrimaryButton>
                <TertiaryButton>Send an email</TertiaryButton>
              </div>
            </div>
        </section>
    )
}

export default Contact;