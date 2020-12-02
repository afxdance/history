import * as React from "react";
import * as AFX from "src/data/data";
import "./App.css";
import { AboutComponent } from "./AboutComponent";
import { EventsComponent } from 'src/components/EventsComponent';
import { GroupsComponent } from "src/components/GroupsComponent";
import { MerchComponent } from "src/components/MerchPage/MerchComponent"
import { MerchItem } from "src/components/MerchPage/MerchItem"
import { Navigation } from "./NavBarComponent";
import { useSem } from 'src/hooks/use-sem';
import { Semester } from "src/data/types";
import { TeamsComponent } from "./TeamsComponent";
import { LandingComponent } from "./LandingPage/LandingPageComponent"

export const App: React.FC<{}> = () => {
  const { currentSemKey } = useSem()
  const [ display, toggleDisplayVisible ] = React.useState(false)
  const [ landingPageDisplay, toggleLandingPageDisplay ] = React.useState(true)

  const checkHistory = React.useCallback(() => {
    const history = document.getElementById("bottom")?.getBoundingClientRect();
    const historyTop = history? history.top : 0

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


  /** LOAD STRIPE DATA ---------------- */

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
        images: ["hoodie_front.jpeg", "hoodie_back.jpeg"],
        livemode: false,
        metadata: {},
        name: "AFX-Spurs Collection",
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

  return (
    <React.Fragment>
        {/* <LandingComponent/> */}
        <div className={display ? "show-Search" : "no-Search"}>
          <Navigation/>
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

        <MerchComponent merchItemList={merchItems}/>

        <div id="bottom" className="anchor">
          <div id="history">
            <h1>HISTORY</h1>
            <br />
            <div id="board">{board}</div>
            <div id="teams">{teams}</div>
          </div>
        </div>

    </React.Fragment>
  );
}
