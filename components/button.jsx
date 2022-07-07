import styles from './Button.module.scss';


export const PrimaryButton = ({ children }) => {

    return (
        <div className={styles.button_container}>
            <button
                className={styles.primary}
            >
                {children}
            </button>
            <div className={styles.primary_shadow}></div>
        </div>        
    )
}

export const SecondaryButton = ({ children }) => {

    return (
        <div className={styles.button_container}>
            <button
                className={styles.secondary}
            >
                {children}
            </button>
            <div className={styles.secondary_shadow}></div>
        </div>
    )
}

export const TertiaryButton = ({ children }) => {

    return (
        <div className={styles.button_container}>
            <button
                className={styles.tertiary}
            >
                {children}
            </button>
            <div className={styles.tertiary_shadow}></div>
        </div>
    )
}

export default PrimaryButton;