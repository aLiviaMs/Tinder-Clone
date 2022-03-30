import './Button.scss';

//possíveis estilos do botão.
const STYLES = [
    "primary",
    "nav",
    "secondary",
    "disabled",
]

interface IButtonProps {
    children?: string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonStyle?: string;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<IButtonProps> = ({
    children,
    type,
    onClick,
    buttonStyle,
    disabled,
    className
}) => {
    //If a valid buttonStyle exists it will be applied, otherwise, by default the style [0] -> primary will be set.
    const checkButtonStyle = (buttonStyle && STYLES.includes(buttonStyle)) ? buttonStyle : STYLES[0];

    return (
        <button
            className={`ui-button ${checkButtonStyle} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}>
            {children}
        </button>
    );

}

export default Button;