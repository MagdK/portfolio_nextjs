import styles from './Button.module.scss';


const BUTTON_TYPE_CLASSES = {
    primary: 'primary',
    secondary: 'secondary',
    thertiary: 'tertiary'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    let btnStyle = styles[BUTTON_TYPE_CLASSES[buttonType]]
    return (
        <button
            className={`button_container ${btnStyle}`} 
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;