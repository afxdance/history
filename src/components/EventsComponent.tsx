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
 */
export const EventsComponent: React.FC = () => {
  const [events, setEvents] = React.useState([]);
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAcessor="end"
        style={{ height: 800 }}
      // onSelectEvent={this.handleSelectEvent}
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
