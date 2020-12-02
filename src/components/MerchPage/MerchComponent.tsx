import * as React from "react"
import "./MerchStyle.css"
import { MerchItem } from "src/components/MerchPage/MerchItem"
import { Item } from "react-native-paper/typings/components/List"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import { MerchItemPageComponent } from "src/components/MerchPage/MerchItemPageComponent"

//Note: Create a individualized MerchItemPageComponent, separate from this general merch page component.
//The individualized MerchItemPage should display what is shown after you click on a merch item
export const MerchComponent: React.FC<{
  merchItemList: typeof MerchItem[]
}> = props => {
  /** Load in merch items using Stripe's API */

  //Create list of merch items that are being sold in some data structure

  /* Create list of LI's for rendering.Bust */
  const merchItemsLI: any[] = props.merchItemList.map(item => <li>{item}</li>)

  //find a way to render this list
  return (
    <div>
      <div className="header"> MERCH </div>

      <div className="subheader">
        {" "}
        Bust out some dance moves in AFX's latest gear!{" "}
      </div>

      <div>
        <ul>{merchItemsLI}</ul>
      </div>
    </div>
  )
}
