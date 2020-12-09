import * as React from "react"
// import Product from "./Prod"
import CartContext from "./CartContext"
import "./App.css"
// import Image from "./Image"
import { privateEncrypt } from "crypto"

const CartRow = (props: any) => {
  const [price, quantity, name, image] = props.value

  const { cart, addToCart, removeFromCart } = React.useContext(CartContext)

  return (
    <div className="cart-entry">
      <img className="cart-pic" src={image} alt={name} />
      <div className="cart-info">
        <h3>
          {" "}
          {name} x {quantity}{" "}
        </h3>
        <p> {(price / 100).toFixed(2)} </p>
      </div>
    </div>
  )
}

export default CartRow
