import * as React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
// @ts-ignore
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/sass/styles.scss";


/**
 * A component that renders a React Big Calendar that displays events posted on
 * the AFX Official Facebook page. Makes a single GET request using the Axios API
 * and FB Graph API to retrieve event information directly from the page.
 * Displays events according to their title and starting/ending time.
 **/
export const EventsComponent: React.FC = () => {
  const emptyList: any[] = [];
  const [events, setEvents] = React.useState(emptyList);
  const localizer = momentLocalizer(moment);

  //console.log(process.env);
  const calendar_id = "rguja84c2kdipbuf3k866btq50@group.calendar.google.com"

  const axios = require("axios");
  axios.get("https://www.googleapis.com/calendar/v3/calendars/" + calendar_id
    + "/events?orderBy=startTime&showDeleted=false&singleEvents=true&timeMin=2016-02-05T00%3A00%3A00Z&key=" + process.env.REACT_APP_GCAL_KEY)
    .then(response => {

      var eventsList: any[] = [];
      var eventsCount = 0;

      for (let events of response["data"]["items"]) {
        eventsList.push({
          id: eventsCount,
          title: events["summary"],
          start: new Date(events["start"]["dateTime"]),
          end: new Date(events["end"]["dateTime"]),
          link: events["htmlLink"]
        });
        eventsCount += 1;
      }

      setEvents(eventsList);
    });


  return (
    <div>
      {/* <p>Official calendar TBD! Please go to <a href="https://www.facebook.com/AFXdance">our Facebook page </a>for more details on any upcoming events :)</p> */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAcessor="end"
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
``
