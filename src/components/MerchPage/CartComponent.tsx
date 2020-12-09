import * as React from "react"
import "./MerchStyle.css"
import Popup from "reactjs-popup"
import CartContext from "./CartContext"

export const CartComponent: React.FC<{}> = props => {

  const { cart, addToCart, removeFromCart } = React.useContext(CartContext);

  return (
    <div className="cart-content">
      <div className="shopping-bag">
        <h1> Shopping Bag </h1>
      </div>

      <div className="display-items">
        <h2 className="item-count">
          {/*insert count of items here (a #)*/} items
        </h2>
        <div className="item-list" />
      </div>

      <div className="order-summary">
        <h2 id="order-summary">Order Summary</h2>
      </div>
    </div>
  )
}
