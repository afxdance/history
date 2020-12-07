import * as React from "react"
import "./MerchStyle.css"
import { MerchItem } from "src/components/MerchPage/MerchItem"

//Note: Create a individualized MerchItemPageComponent, separate from this general merch page component.
//The individualized MerchItemPage should display what is shown after you click on a merch item
export const MerchComponent: React.FC<{}> = props => {
  /** Load in merch items using Stripe's API */

  /** Some Notes to Improve on:
   *  1. Center the merch items on the home page
   *  2. Fix the size of the images on the home page to be square/a certain dimension
   *  3. Add a close button to the top right of the popup
   */

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
        colorList: ["black", "gray", "pink"],
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
        colorList: ["black", "white", "orange"],
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
        colorList: ["black", "white", "blue"],
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
        colorList: ["black", "white", "green"],
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
        imageUrlList={item.images}
        name={item.name}
        price={item.price}
        colorList={item.colorList}
        quantity={merchCount}
      />
    )
  }

  /* Create list of LI's for rendering.Bust */
  const merchItemsLI: any[] = merchItems.map(item => <li>{item}</li>)

  //find a way to render this list
  return (
    <div>
      <div className="merch-page">
        <ul className="merch-array"> {merchItemsLI} </ul>
      </div>
    </div>
  )
}
