import * as React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
// @ts-ignore
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/sass/styles.scss";

/** The EventsComponent interface. The state of
 * EventsComponent is comprised of a single list that stores
 * event objects.
 */
type EventsList = {
  events: any[];
};

/**
 * A component that renders a React Big Calendar that displays events posted on
 * the AFX Official Facebook page. Makes a single GET request using the Axios API
 * and FB Graph API to retrieve event information directly from the page.
 * Displays events according to their title and starting/ending time.
 *  */
export class EventsComponent extends React.Component<{}, EventsList> {
  constructor(props: any) {
    super(props);

    this.state = {
      events: [],
    };
  }

  /** Event-handling function that is called when a user
   * clicks on an event.
   */
  public handleSelectEvent(event: object) {
    window.open(event["link"], "_blank");
  }

  /** Render the react-big-calendar. */
  public render() {
    const localizer = momentLocalizer(moment);

    return (
      <div>
        <Calendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAcessor="end"
          style={{ height: 800 }}
          // onSelectEvent={this.handleSelectEvent}
        />
      </div>
    );
  }
}
