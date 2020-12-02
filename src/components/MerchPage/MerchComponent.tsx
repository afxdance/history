import * as React from "react"
import "./MerchStyle.css"
import { MerchItem } from "src/components/MerchPage/MerchItem"
import { Item } from "react-native-paper/typings/components/List"

//Note: Create a individualized MerchItemPageComponent, separate from this general merch page component.
//The individualized MerchItemPage should display what is shown after you click on a merch item
export const MerchComponent: React.FC = () => {
  /** Load in merch items using Stripe's API */

  //Create list of merch items that are being sold in some data structure

  //* Example of what Stripe Data will look like when the API is called*/

  const stripeData = {
    data: {
      0: {
        active: true,
        attributes: [],
        created: 1603073286,
        description: "The basic AFX Hoodie",
        id: "prod_IEGJE1QPY7XWnD",
        images: ["hoodie_front.jpeg", "hoodie_back.jpeg"],
        livemode: false,
        metadata: {},
        name: "AFX Classic Hoodie",
        object: "product",
        statement_descriptor: null,
        type: "service",
        unit_label: null,
        price: 55.0,
        updated: 1603073286,
      },
      1: {
        active: true,
        attributes: [],
        created: 1603073286,
        description: "Stolen Spurs Jersey",
        id: "prod_IEGJE1QPY7XWnD",
        images: ["stolen_spurs_front.jpg", "stolen_spurs_back.jpg"],
        livemode: false,
        metadata: {},
        name: "AFX Spurs Collection",
        object: "product",
        statement_descriptor: null,
        type: "service",
        unit_label: null,
        price: 55.0,
        updated: 1603073286,
      },
      2: {
        active: true,
        attributes: [],
        created: 1603073286,
        description: "Stolen Spurs Jersey",
        id: "prod_IEGJE1QPY7XWnD",
        images: ["stolen_spurs_front.jpg", "stolen_spurs_back.jpg"],
        livemode: false,
        metadata: {},
        name: "AFX Spurs Collection",
        object: "product",
        statement_descriptor: null,
        type: "service",
        unit_label: null,
        price: 55.0,
        updated: 1603073286,
      },
      3: {
        active: true,
        attributes: [],
        created: 1603073286,
        description: "Stolen Spurs Jersey",
        id: "prod_IEGJE1QPY7XWnD",
        images: ["stolen_spurs_front.jpg", "stolen_spurs_back.jpg"],
        livemode: false,
        metadata: {},
        name: "AFX Spurs Collection",
        object: "product",
        statement_descriptor: null,
        type: "service",
        unit_label: null,
        price: 55.0,
        updated: 1603073286,
      },
    },
    has_more: false,
    object: "list",
    url: "/v1/products",
  }

  const merchItems: any[] = []
  let merchCount = 0

  for (let itemIndex in stripeData.data) {
    let item = stripeData.data[itemIndex]

    merchItems.push(
      <MerchItem
        frontImage={item.images[0]}
        backImage={item.images[1]}
        name={item.name}
        price={item.price}
        id={merchCount}
      />
    )

    merchCount++
  }

  /* Create list of LI's for rendering.Bust */
  const merchItemsLI = merchItems.map(item => <li>{item}</li>)

  //ToDo: Create MerchItem Functional Component!
  //Each merch item should have its own instance of a MerchItemPageComponent

  //find a way to render this list
  return (
    //Look into FlexBox
    <div className="merch-page">
      <ul className="merch-array"> {merchItemsLI} </ul>
    </div>
  )
}
