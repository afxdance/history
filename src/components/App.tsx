import * as React from "react";
import * as AFX from "src/data/data";
import "./App.css";
import { AboutComponent } from "./AboutComponent";
import Popup from "reactjs-popup"
import { EventsComponent } from 'src/components/EventsComponent';
import { GroupsComponent } from "src/components/GroupsComponent";
import { MerchComponent } from "src/components/MerchPage/MerchComponent"
import { MerchItem } from "src/components/MerchPage/MerchItem"
import { Navigation } from "./NavBarComponent";
import { useSem } from 'src/hooks/use-sem';
import { Semester } from "src/data/types";
import { TeamsComponent } from "./TeamsComponent";
import { LandingComponent } from "./LandingPage/LandingPageComponent"
import { CartComponent } from 'src/components/MerchPage/CartComponent';
import CartContext from "./MerchPage/CartContext";
import { Price, Product } from "./MerchPage/Types"

export const App: React.FC<{}> = () => {
  const { currentSemKey } = useSem()
  const [display, toggleDisplayVisible] = React.useState(false)
  const [landingPageDisplay, toggleLandingPageDisplay] = React.useState(true)

  const checkHistory = React.useCallback(() => {
    const history = document.getElementById("bottom")?.getBoundingClientRect();
    const historyTop = history ? history.top : 0

    if (historyTop <= 0 && display == false) {
      toggleDisplayVisible(true)
    }
  }, [window])

  let board: any = [];
  let teams: any = [];

  const currSem: Semester = AFX.Semesters[currentSemKey || "rec4GaaU2uP8FRfw3"];

  const currBoardKey: any = currSem.boardGroupId;
  // todo: yucky array and any

  if (currBoardKey) {
    board.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
  }
  if (currSem.teamGroupIds) {
    teams.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
    // TODO: TeamsComponent, renaming things, string[] mess

  }

  React.useEffect(() => {
    window.addEventListener("scroll", checkHistory);

    return (() => {
      window.removeEventListener("scroll", checkHistory)
    })
  }, [])

  // for cartComponent
  const [showCart, setShowCart] = React.useState(false)

  const CartOnclick = () => {
    setShowCart(true)
  }

  const CartClosed = () => {
    setShowCart(false)
  }


  const [cart, setCart] = React.useState<any>(new Map()) // using map instead of object now

  // key: price.id
  // value: [priceObject, quantity, product.name, product.image]
  const updateCart = (k: string, v: any) => {
    /*
    React checks if a component should update by checking if the object before is different from the object after.
    To force it to update we need to put the old info in a new map so that the objects pass the difference check.
    */
    cart.set(k, v)

    if (cart.get(k)[1] === 0) {
      // if quantity is equal to 0
      cart.delete(k)
    }

    let newCart = new Map(cart)
    setCart(newCart)
  }

  const addToCart = (price: Price, product: Product) => {
    let price_id: string = price.id
    let product_name = product.name
    let product_image = product.images[0]
    if (cart.has(price_id)) {
      var newQuantity = cart.get(price_id)[1] + 1
      var totalPrice = price.unit_amount * newQuantity
      updateCart(price_id, [
        totalPrice,
        newQuantity,
        product_name,
        product_image,
      ])
    } else {
      updateCart(price_id, [price.unit_amount, 1, product_name, product_image])
    }
  }

  const removeFromCart = (price: Price, product: Product) => {
    //if item quantity = 0, remove key
    let price_id: string = price.id
    let product_name = product.name
    let product_image = product.images[0]
    if (cart.has(price_id)) {
      var newQuantity = cart.get(price_id)[1] - 1
      var totalPrice = price.unit_amount * newQuantity
      updateCart(price_id, [
        totalPrice,
        newQuantity,
        product_name,
        product_image,
      ])
    }
  }

  return (
    <React.Fragment>
      <div>
        {/* <LandingComponent/> */}
        <div className={display ? "show-Search" : "no-Search"}>
          <Navigation />
        </div>
      </div>
      <div id="top" className="anchor">
        <AboutComponent />
      </div>
      <div id="middle" className="anchor">
        <div id="events">
          <h1>EVENTS</h1>
          <EventsComponent />
          <br />
        </div>
      </div>
      <div id="bottom" className="anchor">
        <div id="history">
          <h1>HISTORY</h1>
          <br />
          <div id="board">{board}</div>
          <div id="teams">{teams}</div>
        </div>
      </div>

      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <div id="middle-bottom" className="anchor">
          <div id="merch">
            <div id="merch-header">
              <div></div> {/* this is a purposefully empty div*/}
              <h1>MERCH</h1>
              <div className="merch-bag">
                <img
                  src={"./bag.svg"}
                  onClick={CartOnclick}
                  className="merch-bag"
                />

                <Popup
                  open={showCart}
                  onClose={CartClosed}
                  modal
                  closeOnDocumentClick
                  className="merch-bag-popup"
                >
                  <CartComponent />
                </Popup>
              </div>
            </div>

            <div id="merch-subheader">
              <p>Bust out some dance moves in AFX's latest gear!</p>
            </div>
            <MerchComponent />
            <br />
          </div>
        </div>
      </CartContext.Provider>
    </React.Fragment>
  );
}
