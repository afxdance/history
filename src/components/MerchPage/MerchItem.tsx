import Popup from "reactjs-popup"
import * as React from "react"
import "./MerchStyle.css"
import { MerchItemPageComponent } from "src/components/MerchPage/MerchItemPageComponent"

export const MerchItem: React.FC<{
  imageUrlList: string[]
  name: string
  price: number
  colorList: string[]
  quantity: number
}> = ({ imageUrlList, name, price, colorList, quantity }) => {
  // page string: <MerchItemPageComponent />

  const frontImage = imageUrlList[0]
  const backImage = imageUrlList[1]

  const [imgUrl, setImgUrl] = React.useState(frontImage)
  const [showPopup, setShowPopup] = React.useState(false)

  const onHover = () => {
    setImgUrl(backImage)
  }
  const offHover = () => {
    setImgUrl(frontImage)
  }

  const merchItemOnclick = () => {
    setShowPopup(true)
  }

  const popUpClosed = () => {
    setShowPopup(false)
  }

  return (
    <div className="MerchItem">
      <img
        src={imgUrl}
        onMouseOver={onHover}
        onMouseLeave={offHover}
        onClick={merchItemOnclick}
        className="photo"
      />

      <p className="ItemName">{name}</p>
      <p className="ItemPrice"> $ {price}</p>

      <Popup
        open={showPopup}
        onClose={popUpClosed}
        modal
        closeOnDocumentClick
        className="merch-item-popup"
      >
        <MerchItemPageComponent
          name={name}
          price={price}
          quantity={quantity}
          imageUrlList={imageUrlList}
          sizeList={["XL", "L", "M"]}
          colorList={colorList}
        />
      </Popup>
    </div>
  )
}
