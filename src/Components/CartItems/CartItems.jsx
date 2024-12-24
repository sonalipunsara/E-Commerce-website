import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, CartItems, removeFormatCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt=""
                  className="carticon-product-icon"
                ></img>
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems-quantity">
                  {CartItems[e.id]}
                </button>
                <p>{e.new_price * CartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onclick={removeFormatCart(e.id)}
                  alt=""
                ></img>
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;

{
  /*Show All Products (Regardless of Quantity)
  {all_product.map((e) => {
    return (
      <div key={e.id}>
        <div className="cartitems-format">
          <img
            src={e.image}
            alt={e.name}
            className="carticon-product-icon"
          />
          <p>{e.name}</p>
          <p>{e.new_price}</p>
          <button className="cartitems-quantity">
            {CartItems[e.id] > 0 ? CartItems[e.id] : 0}
          </button>
          <p>{e.new_price * (CartItems[e.id] > 0 ? CartItems[e.id] : 0)}</p>
          <img
            src={remove_icon}
            onClick={() => removeFormatCart(e.id)} // Corrected `onClick` handler
            alt="Remove"
          />
        </div>
        <hr />
      </div>
    );
  })}
  
*/
}
