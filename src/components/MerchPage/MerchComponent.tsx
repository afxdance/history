import * as React from "react"
import "./MerchStyle.css"
import { MerchItem } from "src/components/MerchPage/MerchItem";

//Note: Create a individualized MerchItemPageComponent, separate from this general merch page component.
//The individualized MerchItemPage should display what is shown after you click on a merch item
export const MerchComponent: React.FC = () => {
  /** Load in merch items using Stripe's API */

  //Create list of merch items that are being sold in some data structure
  const merchItems: any[] = []
  merchItems.push(<MerchItem path="timg.jpg" name="AFX Classic Hoodie" price={55} />) //ToDo: Create MerchItem Functional Component!
  //Each merch item should have its own instance of a MerchItemPageComponent


  //find a way to render this list
  return (
    //Look into FlexBox
    <div>
      <div className="header"> Merch </div>

      <div className="subheader"> Bust out some dance moves in AFX's latest gear! </div>

      <div>
        {merchItems }
      </div>
    </div>
  )
}
