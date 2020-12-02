import * as React from "react"
import "./MerchStyle.css"
import { MerchItemPageComponent } from "src/components/MerchPage/MerchItemPageComponent"
import { Link } from "react-router-dom"

export const MerchItem: React.FC<{
  frontImage: string
  backImage: string
  name: string
  price: number
  id: number
}> = ({ frontImage, backImage, name, price, id }) => {
  // page string: <MerchItemPageComponent />

  const [imgUrl, setImgUrl] = React.useState(frontImage)

  const onHover = () => {
    setImgUrl(backImage)
  }

  const offHover = () => {
    setImgUrl(frontImage)
  }

  return (
    <div className="MerchItem">
      <Link to={"merch" + "/" + id}>
        <img
          src={imgUrl}
          onMouseOver={onHover}
          onMouseLeave={offHover}
          className="photo"
        />
      </Link>

      <p className="ItemName">{name}</p>
      <p className="ItemPrice"> $ {price}</p>
    </div>
  )
}
