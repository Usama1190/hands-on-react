import './Button.css';
import ButtonImages from '../../../utils/constant/images';

// Condition Rendering

const Button = ({ text, isImg }) => {
  const { appleIcon } = ButtonImages;

  console.log(isImg);
  
  return (
    <div>
      <button>{ isImg ? <img src={appleIcon} alt="apple icon" /> : null }{ text }</button>

      {/* <button>{ isImg && <img src={appleIcon} alt="apple icon" />}{ text }</button> */}
    </div>
  )
}

export default Button
