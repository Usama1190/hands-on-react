import propType from 'prop-types';

const Button = ({ title, icon }) => {
  return (
    <div>
      <button>{title} <span>{icon}</span></button>
    </div>
  )
}

Button.propTypes = {
    title: propType.string,
    icon: propType.string
}

export default Button
