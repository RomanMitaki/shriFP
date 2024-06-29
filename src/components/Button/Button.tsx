import styles from "./Button.module.css";


type TButtonProps = {
    text: string,
    styleType: 'primary' | 'secondary' | 'inverted' | null,
};
const Button = ({text, styleType}: TButtonProps) => {
    let buttonStyle = {};

    switch (styleType) {
        case 'primary':
            buttonStyle = {
                backgroundColor: '#FF5500',
                color: '#FFFFFF',
                padding: '10px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                minWidth: '72px',
                height: '40px',
                fontSize: '14px',
                lineHeight: '1.4',
                fontFamily: 'Roboto',
                fontWeight: '600'
            };
            break;
        case 'secondary':
            buttonStyle = {
                backgroundColor: '#333333',
                color: '#FF5500',
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid #FF5500',
                cursor: 'pointer',
                minWidth: '76px',
                height: '40px',
                fontSize: '14px',
                lineHeight: '1.4',
                fontFamily: 'Roboto',
                fontWeight: '600'
            };
            break;
        case 'inverted':
            buttonStyle = {
                backgroundColor: '#FFFFFF',
                color: '#FF5500',
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid #FF5500',
                cursor: 'pointer',
                minWidth: '76px',
                height: '40px',
                fontSize: '14px',
                lineHeight: '1.4',
                fontFamily: 'Roboto',
                fontWeight: '600'
            };
            break;
        default:
            buttonStyle = {
                backgroundColor: '#FF5500',
                color: '#FFFFFF',
                padding: '10px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                width: '72px',
                height: '40px',
                fontSize: '14px',
                lineHeight: '1.4',
                fontFamily: 'Roboto',
                fontWeight: '600'
            };
    }

    return (
        <button style={buttonStyle}>
            {text}
        </button>
    );
};


export default Button;