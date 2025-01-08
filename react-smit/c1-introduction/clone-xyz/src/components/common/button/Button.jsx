import './button.css';

const Button = ({isShowImage, title, link, xyz}) => {
    return <button><span>{xyz}</span> {title} {isShowImage && <img src={link} alt="" />}</button>
}

export default Button;


/*

import './button.css';

const Button = (props) => {
    return <button>{props.title} <img src={props.link} alt="" /></button>
}

export default Button;

*/

/*

import './button.css';

const Button = () => {
    return <button>Click me</button>
}

export default Button;

*/