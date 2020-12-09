import * as React from "react"
import "./MerchStyle.css"
import Popup from "reactjs-popup"
import CartContext from "./CartContext"
import CartRow from "./CartRow"
import Checkout from './Checkout';

export const CartComponent: React.FC<{}> = props => {
  // for (let [key, value] of Array.from(cart.entries())) {
  //       images.push(<CartRow value={value} />)
  //       total_price += value[0];
  //   }

  // return (
  //   <div className="cart-content">
  //     <div className="shopping-bag">
  //       <h1> Shopping Bag </h1>
  //     </div>

  //     <div className="display-items">
  //       <h2 className="item-count">
  //         {/*insert count of items here (a #)*/} items
  //       </h2>
  //       <div className="item-list" />
  //     </div>

  //     <div className="order-summary">
  //       <h2 id="order-summary">Order Summary</h2>
  //     </div>
  //   </div>
  // )

  const { cart, addToCart, removeFromCart } = React.useContext(CartContext)
  let images: any[] = []

  let total_price = 0

  for (let [key, value] of Array.from(cart.entries())) {
    console.log("cart", value)
    images.push(<CartRow value={value} />)
    total_price += value[0]
  }

  total_price /= 100

  return (
    <div>
      <div className="cart-info">
        {images}
        <div className="total-price">
          <h3>Total Price: {total_price.toFixed(2)}</h3>
        </div>
        <Checkout />
      </div>
    </div>
  )
}
