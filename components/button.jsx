import styles from './Button.module.scss';


// export const PrimaryButton = ({ children }) => {

//     return (
//         <div className={styles.button_container}>
//             <button className={styles.primary}>
//                 {children}
//             </button>
//             {/* <div className={styles.primary_shadow}></div> */}
//         </div>        
//     )
// }

export const PrimaryButton = ({ children }) => {

    return (
        <button className={styles.primary_btn}>
            {children}
        </button> 
    )
}

export const SecondaryButton = ({ children }) => {

    return (
        <button className={styles.secondary_btn}>
            {children}
        </button> 
    )
}

export const TertiaryButton = ({ children }) => {

    return (
        <button className={styles.tertiary_btn}>
            {children}
        </button> 
    )
}

export default PrimaryButton;