import { MerchComponent } from "./MerchComponent"
import * as React from "react"
import "MerchStyle.css"
import Popup from "reactjs-popup"

export const MerchItemPageComponent: React.FC<{
  merchItem: typeof MerchComponent
  name: string
  sizeList: string[]
  colorList: string[]
}> = props => {
  return (
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
  )
}
