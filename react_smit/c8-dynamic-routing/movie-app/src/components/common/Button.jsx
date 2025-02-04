
const Button = ({ text, img }) => {
  return (
    <div>
      <button>
        <i className={img}></i>
        {text}
      </button>
    </div>
  )
}

export default Button
