import * as React from "react"
import { useState } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import {
  TeamSchedule,
  days,
  singleTeam,
} from "./helperComponents/teamSchedule"

// @ts-ignore
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-big-calendar/lib/sass/styles.scss"
// import "instafeed.js"
// import InstagramEmbed from 'react-instagram-embed';

const localizer = momentLocalizer(moment)

/**
 * A component that renders a React Big Calendar that displays events posted on
 * the AFX Official Facebook page. Makes a single GET request using the Axios API
 * and FB Graph API to retrieve event information directly from the page.
 * Displays events according to their title and starting/ending time.
 *  */
export const EventsComponent: React.FC = () => {
  const emptyList: any[] = []
  const [events, setEvents] = React.useState(emptyList)


  //console.log(process.env);
  const calendar_id = "rguja84c2kdipbuf3k866btq50@group.calendar.google.com"

  React.useEffect(() => {
    const axios = require("axios")
    axios
      .get(
        "https://www.googleapis.com/calendar/v3/calendars/" +
        calendar_id +
        // + "/events?orderBy=startTime&showDeleted=false&singleEvents=true&timeMin=2016-02-05T00%3A00%3A00Z&key=" + process.env.REACT_APP_GCAL_KEY)
        "/events?orderBy=startTime&showDeleted=false&singleEvents=true&timeMin=2016-02-05T00%3A00%3A00Z&key=" +
        "AIzaSyAZvqWSX3sYUtycgABvso6sQAkP137i59M"
      )
      .then((response) => {
        let eventsList: any[] = []
        let eventsCount = 0

        for (let events of response["data"]["items"]) {
          // Check to see if the event has a time
          if (events["start"]["dateTime"]) {
            eventsList.push({
              id: eventsCount,
              title: events["summary"],
              start: new Date(events["start"]["dateTime"]),
              end: new Date(events["end"]["dateTime"]),
              allDay: false,
              link: events["htmlLink"],
            })
            eventsCount += 1

            // If not, assume it is an all day event
          } else {
            eventsList.push({
              id: eventsCount,
              title: events["summary"],
              start: new Date(events["end"]["date"]),
              end: new Date(events["end"]["date"]),
              allDay: true,
              link: events["htmlLink"],
            })
          }
        }
        setEvents(eventsList)
      })
  }, [])

  // Monday
  const cypherM: singleTeam = {
    name: "AFX Cypher",
    start: "8:00 PM",
    end: "10:30 PM",
    loc: "Haas Pavilion",
    color: "#D9DCF3"
  }
  const monday = [cypherM]

  // Tuesday
  const phoenixT: singleTeam = {
    name: "AFX Phoenix",
    start: "5:30 PM",
    end: "8:00 PM",
    loc: "Lower Sproul",
    color: "#E4B4C2"
  }
  const tuesday: singleTeam[] = [phoenixT]

  // Wednesday
  const aceW: singleTeam = {
    name: "AFX Ace",
    start: "7:00 PM",
    end: "10:00 PM",
    loc: "Upper Sproul",
    color: "#FFB8D1"
    //"#c93838"
  }
  const cypherW: singleTeam = {
    name: "AFX Cypher",
    start: "7:30 PM",
    end: "10:30 PM",
    loc: "Haas Pavillion",
    color: "#D9DCF3"
  }
  const wednesday: singleTeam[] = [aceW, cypherW]

  // Thursday
  const ateT: singleTeam = {
    name: "AteFX",
    start: "6:30 PM",
    end: "9:00 PM",
    loc: "Lower Sproul",
    color: "#DDFDFE"
  }
  const fmT: singleTeam = {
    name: "AFX FM",
    start: "8:00 PM",
    end: "10:00 PM",
    loc: "Lower Sproul",
    color: "#E7CEE3"
  }
  const thursday: singleTeam[] = [ateT, fmT]

  // Friday
  const aceF: singleTeam = {
    name: "AFX Ace",
    start: "6:00 PM",
    end: "8:00 PM",
    loc: "Haas Pavilion",
    color: "#FFB8D1"//"#c93838"
  }
  const friday: singleTeam[] = [aceF]

  // Saturday
  const phoenixS: singleTeam = {
    name: "AFX Phoenix",
    start: "1:00 PM",
    end: "4:00 PM",
    loc: "Haas Pavillion",
    color: "#E4B4C2"//"#f2b861"
  }
  const saturday: singleTeam[] = [phoenixS]

  // Sunday
  const ateS: singleTeam = {
    name: "AteFX",
    start: "5:00 PM",
    end: "7:30 PM",
    loc: "Lower Sproul",
    color: "#DDFDFE"
  }
  const fmS: singleTeam = {
    name: "AFX FM",
    start: "6:00 PM",
    end: "8:00 PM",
    loc: "Lower Sproul",
    color: "#E7CEE3"
  }
  const sunday: singleTeam[] = [ateS, fmS]

  const Allteams: singleTeam[][] = [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  ]


  let teamSchedules = days.map((day, index) => (
    <TeamSchedule day={day} teams={Allteams[index]} />
  ))

  return (
    <div>
      <div id="about">
        <div className="heading">
          <h1>Important Upcoming Events!</h1>
          <br />
        </div>
        {/* <h5>Auditions have been officially scheduled!</h5> */}
        <div className="about--text">
          <span>
            {" "}
            <strong>AFX-[M] Spring Showcase:</strong> Saturday, December 2, 6:30-9:30 PM @ Zellerbach {" "}
          </span>
          {/* <br />
          <span>
            {" "}
            <strong>Committees Teach Night:</strong> Friday, September 2, 7-10 PM @ Eshleman Hall 240{" "}
          </span>
          <br />
          <span>
            {" "}
            <strong>Audition Day 1:</strong> Sunday, September 4, 7-10 PM @ Haas Pavilion{" "}
          </span>
          <br />
          <span>
            {" "}
            <strong>Audition Day 2:</strong> Thursday, September 8, 7-10 PM @ Haas Pavilion{" "}
          </span>
          <br /> */}
        </div>
        <br />

        <hr></hr>

        <br />
        <h2>Team Schedule Fall 2023</h2>
        <div className="name-time-container">{teamSchedules}</div>
      </div>
      {/* <p>Official calendar TBD! Please go to <a href="https://www.facebook.com/AFXdance">our Facebook page </a>for more details on any upcoming events :)</p> */}
      <hr></hr>
      <Calendar
        localizer={localizer}
        events={events}
        style={{ height: 800 }}
        onSelectEvent={handleSelectEvent}
      />

      {/* <script type="text/javascript" src="path/to/instafeed.min.js">
        <div id="instafeed">
          var feed = new Instafeed({
              accessToken: 'IGQVJXY2FMal92TUdDako0YW5yUnJKTGRqcjVja2pXRkZAxWnhaU2NpZAmV6dGJjUzVOak9vWGU0VEFuZAjFIandOMkgtWVdlSHpvSVdJdUViRjU0WUlQUVZAIZATlXT2ZAieDZAFbHBDMVRNbjVxblhnX3UySwZDZD'
          });
          feed.run();
        </div>
      </script> */}


      {/* <InstagramEmbed
        url='https://www.instagram.com/p/Cc9KZQzJnf5/'
        clientAccessToken=''
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      /> */}
    </div >
  )
}
/** Event-handling function that is called when a user
 * clicks on an event.
 */
function handleSelectEvent(event: object) {
  window.open(event["link"], "_blank")
}
