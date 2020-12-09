import { MerchComponent } from "./MerchComponent"
import * as React from "react"
import "./MerchStyle.css"
import Popup from "reactjs-popup"
import CartContext from "./CartContext"
import { Product, Price } from "./Types"

export const MerchItemPageComponent: React.FC<{
  name: string
  price: string
  quantity: number
  imageUrlList: string[]
  sizeList: string[]
  colorList: string[]
  product: Product
  priceObject: Price
}> = ({
  name,
  price,
  quantity,
  imageUrlList,
  sizeList,
  colorList,
  product,
  priceObject,
}) => {
  const firstImage = imageUrlList[0]

  const [imageDisplaying, setImageDisplaying] = React.useState(firstImage)

  const { cart, addToCart, removeFromCart } = React.useContext(CartContext)

  const changeImage = url => {
    setImageDisplaying(url)
  }

  const toggleImage = () => {}

  const imageLists: any[] = []
  for (let imageUrl of imageUrlList) {
    imageLists.push(
      <img
        src={imageUrl}
        width="40"
        height="50"
        onClick={() => changeImage(imageUrl)}
      />
    )
  }

  const colors: any[] = []

  // for (let colorli of colorList) {
  // colors.push(<div id="circle" style={"background-color: " + colorli} />)
  // }

  return (
    <div>
      <div className="popup-merch">
        <h1>Merch</h1>
      </div>

      <div className="left-column">
        <div className="image-previews">
          <div className="imageList">{imageLists}</div>
        </div>

        <div className="imageShown">
          <img src={imageDisplaying} width="300" height="350" />
        </div>
      </div>

      <div className="right-column">
        <p className="ItemName">{name}</p>
        <p className="ItemPrice"> $ {price} </p>

        {/* <div>
          <p> Color: </p>
          <div>{colors}</div>
        </div>  */}

        <div className="size">
          <div>
            <p> Size: </p>
          </div>
          <div className="size-dropdown">
            <form>
              <select id="size" name="size">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </form>
          </div>
        </div>

        <div className="quantity">
          <div>
            <p> Quantity: </p>
          </div>
          <div className="quantity-dropdown">
            <form>
              <select id="quantity" name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </form>
          </div>
        </div>
        <button
          className="add-cart-button"
          type="button"
          onClick={() => addToCart(priceObject, product)}
        >
          ADD TO CART
        </button>
        <hr className="line" />
      </div>
    </div>
  )
}
