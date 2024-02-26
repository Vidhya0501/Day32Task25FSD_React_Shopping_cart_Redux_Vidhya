import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../redux/actions";

const Quantity = ({ product }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch(updateQuantity(product.id, newQuantity));
  };

  const quantityOptions = [];
  for (let i = 1; i <= product.stock; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <>
      <div className="qty-price mt-5">
        <select value={product.quantity} onChange={handleQuantityChange}>
          {quantityOptions}
        </select>

        <p className="mt-3 fw-bold"> ${product.price * product.quantity}</p>
        <p className="text-muted">
         {
          product.shipping!=="Free"?`Shipping: $${product.shipping}`:"Eligible for free shipping"
         }
        </p>
      </div>
      
    </>
  );
};

export default Quantity;
