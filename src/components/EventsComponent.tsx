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
  const monday = []

  // Tuesday
  const awayT: singleTeam = {
    name: "awayFX",
    start: "7:00 PM",
    end: "9:00 PM",
    loc: "Underhill/Lower Sproul",
    color: "#ffcccc"
  }
  const tuesday: singleTeam[] = [awayT]

  // Wednesday
  const linkW: singleTeam = {
    name: "AFX Link",
    start: "6:30 PM",
    end: "9:30 PM",
    loc: "Haas Pavillion",
    color: "#FEFFCC"
  }
  const partyW: singleTeam = {
    name: "AFX Party!",
    start: "6:30 PM",
    end: "9:00 PM",
    loc: "Lower Sproul",
    color: "#CCF3FF"
  }
  const wednesday: singleTeam[] = [linkW, partyW]

  // Thursday
  const yinyangT: singleTeam = {
    name: "AFX Yin Yang",
    start: "7:00 PM",
    end: "10:00 PM",
    loc: "Lower Sproul",
    color: "#CCD4FF"
  }
  const thursday: singleTeam[] = [yinyangT]

  // Friday
  const partyF: singleTeam = {
    name: "AFX Party!",
    start: "6:30 PM",
    end: "9:00 PM",
    loc: "Lower Sproul",
    color: "#CCF3FF"
  }
  const underscoreF: singleTeam = {
    name: "AFX ___",
    start: "7:00 PM",
    end: "10:00 PM",
    loc: "Haas Pavillion",
    color: "#CCFFDA"
  }
  const friday: singleTeam[] = [partyF, underscoreF]

  // Saturday
  const awayS: singleTeam = {
    name: "awayFX",
    start: "3:30 PM",
    end: "6:00 PM",
    loc: "Haas Pavillion",
    color: "#ffcccc"
  }
  const linkS: singleTeam = {
    name: "AFX Link",
    start: "6:30 PM",
    end: "9:30 PM",
    loc: "Haas Pavillion",
    color: "#FEFFCC"
  }
  const saturday: singleTeam[] = [awayS, linkS]

  // Sunday
  const underscoreS: singleTeam = {
    name: "AFX ___",
    start: "5:00 PM",
    end: "8:00 PM",
    loc: "Lower Sproul",
    color: "#CCFFDA"
  }
  const yinyangS: singleTeam = {
    name: "AFX Yin Yang",
    start: "7:00 PM",
    end: "10:00 PM",
    loc: "Lower Sproul",
    color: "#CCD4FF"
  }
  const sunday: singleTeam[] = [underscoreS, yinyangS]

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
        <h5>Auditions have been officially scheduled!</h5>
        <div className="about--text">
          <span>
            {" "}
            <strong>AFX Summer Showcase:</strong> Tuesday, August 23, 7-10 PM @ Spieker Hall (outside of Haas Pavilion){" "}
          </span>
          <br />
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
          <br />
        </div>
        <br />

        <hr></hr>

        <br />
        <h2>Team Schedule Spring 2022</h2>
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
