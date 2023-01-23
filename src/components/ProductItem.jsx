import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/ProductItem.scss";
import icon from "../assets/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCard = (item) => {
    addToCart(item);
  };

  return (
    <div className="cards-container">
      <div className="product-card">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleCard(product)}>
            <img src={icon} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
