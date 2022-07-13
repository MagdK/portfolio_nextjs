import styles from './Button.module.scss';
import Link from 'next/link';

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

export const PrimaryButton = ({ children, href, target, rel }) => {

    return (
        <Link href={href}>
            <a 
                className={styles.primary_btn}
                target={target} 
                rel={rel}
            >
                {children}
            </a>
        </Link>
    )
}

export const SecondaryButton = ({ children, href, target, rel }) => {

    return (    
        <Link href={href}>
            <a 
                className={styles.secondary_btn}
                target={target} 
                rel={rel}
            >
                {children}
            </a>
        </Link>
    )
}

export const TertiaryButton = ({ children, href, target, rel }) => {

    return (
        <Link href={href}>
            <a 
                className={styles.tertiary_btn}
                target={target}
                rel={rel}
            >
                {children}
            </a>
        </Link>
    )
}

export default PrimaryButton;