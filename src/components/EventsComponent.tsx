import * as React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { TeamSchedule, days, dayType, singleTeam, teamScheduleType } from './helperComponents/teamSchedule';
// @ts-ignore
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/sass/styles.scss";

const localizer = momentLocalizer(moment);

/**
 * A component that renders a React Big Calendar that displays events posted on
 * the AFX Official Facebook page. Makes a single GET request using the Axios API
 * and FB Graph API to retrieve event information directly from the page.
 * Displays events according to their title and starting/ending time.
 *  */
export const EventsComponent: React.FC = () => {
  const emptyList: any[] = [];
  const [events, setEvents] = React.useState(emptyList);

  //console.log(process.env);
  const calendar_id = "rguja84c2kdipbuf3k866btq50@group.calendar.google.com"

  React.useEffect(() => {
    const axios = require("axios");
    axios.get("https://www.googleapis.com/calendar/v3/calendars/" + calendar_id
      // + "/events?orderBy=startTime&showDeleted=false&singleEvents=true&timeMin=2016-02-05T00%3A00%3A00Z&key=" + process.env.REACT_APP_GCAL_KEY)
      + "/events?orderBy=startTime&showDeleted=false&singleEvents=true&timeMin=2016-02-05T00%3A00%3A00Z&key=" + "AIzaSyAZvqWSX3sYUtycgABvso6sQAkP137i59M")
      .then(response => {

        let eventsList: any[] = [];
        let eventsCount = 0;

        for (let events of response["data"]["items"]) {
          // Check to see if the event has a time
          if (events["start"]["dateTime"]) {
            eventsList.push({
              id: eventsCount,
              title: events["summary"],
              start: new Date(events["start"]["dateTime"]),
              end: new Date(events["end"]["dateTime"]),
              allDay: false,
              link: events["htmlLink"]
            });
            eventsCount += 1;

            // If not, assume it is an all day event
          } else {
            eventsList.push({
              id: eventsCount,
              title: events["summary"],
              start: new Date(events["end"]["date"]),
              end: new Date(events["end"]["date"]),
              allDay: true,
              link: events["htmlLink"]
            });
          }
        }
        setEvents(eventsList);
      });
  }, [])

  // Monday
  const monday = []

  // Tuesday
  const teamAwayFX: singleTeam = {name: "awayFX", start: "7:00 PM", end: "9:00 PM", loc: "underhill/lower sproul"};
  const tuesday: singleTeam[] = [teamAwayFX]

  const link: singleTeam = { name: "link", start: "6:30 PM", end: "9:30 PM", loc: "haas pavillion"};
  const party: singleTeam = { name: "party", start: "6:30 PM", end: "9:00 PM", loc: "lower sproul "};
  const wednesday: singleTeam[] = [link, party]


  // Thursday

  const thursday = []

  const friday = []

  const saturday = []

  const sunday = []

  const Allteams: singleTeam[][]= [monday, tuesday, wednesday, thursday, friday, saturday, sunday];


  let teamSchedules = days.map((day, index) => (
    <TeamSchedule day={day} teams={Allteams[index]} />
  ))

  return (
    <div>
      <div className='name-time-container'>{teamSchedules}</div>
      {/* <p>Official calendar TBD! Please go to <a href="https://www.facebook.com/AFXdance">our Facebook page </a>for more details on any upcoming events :)</p> */}
      <Calendar
        localizer={localizer}
        events={events}
        style={{ height: 800 }}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}
/** Event-handling function that is called when a user
 * clicks on an event.
 */
function handleSelectEvent(event: object) {
  window.open(event["link"], "_blank");
}
