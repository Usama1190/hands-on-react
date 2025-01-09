import './button.css';

const Button = ({ title, link }) => {
  return (
    <button>
      {title} <img src={link} alt="image" />
    </button>
  );
};

export default Button;
