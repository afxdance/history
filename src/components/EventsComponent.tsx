import * as React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
// @ts-ignore
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/sass/styles.scss';


/** The EventsComponent interface. The state of
 * EventsComponent is comprised of a single list that stores
 * event objects.
 */
type EventsList = {
  events: any[]
}

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

  /** Invoked just before mounting occurs. Called before render.  */
  public componentWillMount() {
    this.loadFbApi();
  }

  /** Make a GET request to load the Fb page data into this.state.events. */
  public loadFbApi() {
    const axios = require("axios");
    const page_id = "172807799490538";


    /** This token, according to the debugger, should never expire.
     * If the token does not work, debug with https://developers.facebook.com/tools/debug/accesstoken
    */
    const access_token = atob(process.env.REACT_APP_FB_KEY);
    const defaultLink = "https://www.facebook.com/events/";


    /** Make GET request and store information in this component's state. */
    axios.get("https://graph.facebook.com/" + page_id
      + "/events?access_token=" + access_token)
      .then(response => {

        var eventsList: any[] = [];
        var eventsCount = 0;

        for (let events in response["data"]["data"]) {
          var tempEvent = response["data"]["data"][events];
          var eventID = defaultLink + tempEvent["id"] + "/";

          eventsList.push(
            {
              id: eventsCount,
              title: tempEvent["name"],
              start: new Date(tempEvent["start_time"]),
              end: new Date(tempEvent["end_time"]),
              link: eventID,
            });

          eventsCount += 1;
        }

        this.setState({ events: eventsList });
      });
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
          onSelectEvent={this.handleSelectEvent}
        />
      </div>
    )
  }
}
