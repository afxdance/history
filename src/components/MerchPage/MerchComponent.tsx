import * as React from "react"
import { useState, useEffect } from "react"
import "./MerchStyle.css"
import { MerchItem } from "src/components/MerchPage/MerchItem"
import { Product, Price } from "./Types"
import CartContext from "./CartContext"

const SECRET_KEY: string =
  "sk_test_51HdndOJHggmM4rHWxti97lxV6DpFZq76H4GwarIZ7tIsTdhPVDyPBpZPfdFqAylUCvQPR4SSLgO4gELWKaJ1b9d100Rxmu6vwq"

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

  // making it a string instead of the json object itself prevents excessive rerendering
  const [prices, setPrices] = useState("")
  const [prods, setProds] = useState("")
  const [prodMap, setProdMap] = useState(new Map())
  // const [html, setHtml] = useState("");

  const getPrice = async () => {
    const price = fetch("https://api.stripe.com/v1/prices", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + SECRET_KEY,
      },
    })
    return (await price).json()
  }

  const getProduct = async () => {
    const prod = fetch("https://api.stripe.com/v1/products", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + SECRET_KEY,
      },
    })
    return (await prod).json()
  }


  useEffect(() => {
    // todo: maybe construct a mapping between price_id and product:Product here
    if (prices == "") {
      getPrice().then(data => {
        setPrices(JSON.stringify(data))
      })
    }
  }, [])

  useEffect(() => {
    if (prods == "") {
      getProduct().then(data => {
        setProds(JSON.stringify(data))
      })
    }
  }, [])

  useEffect(() => {
    if (prices != "" && prods != "") {
      let tempMap = new Map()
      if (prodMap.size === 0) {
        let allPrices: Price[] = JSON.parse(prices).data
        let products: Product[] = JSON.parse(prods).data
        for (let i = 0; i < allPrices.length; i++) {
          let singlePrice = allPrices[i]
          let prod_id = singlePrice.product
          for (let j = 0; j < products.length; j++) {
            let singleProduct = products[j]
            let id = singleProduct.id
            if (prod_id == id) {
              tempMap.set(singlePrice.id, singleProduct)
              break
            }
          }
        }
        setProdMap(tempMap)
      }
    }
  })

  // const merchItems: any[] = []
  let merchItems = new Map();
  let merchCount = 0;

  if (prods != "" && prices != "") {
    /* Going to change this to loop over prices instead of prods.
    In the future, we should:
      modify tempMap to map from product_id to a list of all prices associated it with it
      iterate over products again so that we can display a single picture associated with multiple prices (S/M/L/XL clothes, etc.)
    */

    const stripeData = JSON.parse(prices)

    for (let itemIndex in stripeData.data) {
      let price: Price = stripeData.data[itemIndex]
      if (prodMap.has(price.id)) {
        let product: Product = prodMap.get(price.id);

        // If the item is already listed under a different size
        if (merchItems.has(product.name)) {
          let sizeToBeAdded = product.metadata["size"]
          let item = merchItems.get(product.name);
          item.props.sizeList.push(sizeToBeAdded)
          item.props.productMap.set(sizeToBeAdded, product)

          // If the product has never been seen before
        } else {
          let sizeList: any[] = []
          let productMap = new Map();
          if (product.metadata["size"] != null) {
            sizeList.push(product.metadata["size"])
            productMap.set(product.metadata["size"], product)
          } else {
            productMap.set("none", product)
          }

          merchItems.set(product.name,
            <MerchItem
              imageUrlList={product.images}
              name={product.name}
              price={(price.unit_amount / 100).toFixed(2)}
              sizeList={sizeList}
              quantity={merchCount}
              productMap={productMap}
              priceObject={price}
            />
          )
        }

      }
    }

  }

  /* Create list of LI's for rendering.Bust */
  const merchItemsLI: any[] = []
  merchItems.forEach((value: any, key: any) => {
    merchItemsLI.push(<li>{value}</li>);
  })


  return (
    <div>
      <div className="merch-page">
        <ul className="merch-array"> {merchItemsLI} </ul>
      </div>
    </div>
  )
}

/*
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
  */
