import './button.css';

export default function button(props) {
    let classes = `button ${props.tipo}`
    return (
    <button 
    className={classes}
    onClick={e => props.click && props.click(props.label)}
    >
        {props.label}
        </button>
    );
}