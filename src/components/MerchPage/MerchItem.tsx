import * as React from "react"
import "MerchStyle.css"
import { MerchItemPageComponent } from 'src/components/MerchPage/MerchItemPageComponent'

export const MerchItem: React.FC<{path: string, name: string, price: number }> = ({path, name, price}) => {

  page string: <MerchItemPageComponent />
  return (
    <div width="350px" height="400px">
      <img src={path}>

      <p className="ItemName">name</p>
      <p className="ItemPrice"> $ price</p>


    </div>
  )
}
