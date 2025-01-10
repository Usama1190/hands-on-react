import PropTypes from 'prop-types';
import './product.css';

const ProductCard = ({ data }) => {
  console.log(data);
  const { title, description, imgUrl } = data;

  return (
    <div>
      <img src={imgUrl} alt="image" />
      <h1>{title}</h1>
      <p>{description}</p>
      <button>View Product</button>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  // data: PropTypes.object
}

export default ProductCard;
