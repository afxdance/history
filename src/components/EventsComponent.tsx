import * as React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
// @ts-ignore
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/sass/styles.scss';


type EventsList = {
  events: any[]
}


export class EventsComponent extends React.Component<{}, EventsList> {
  constructor(props: any) {
    super(props);

    this.state = {
      events: [],
    };
  }


  /** Make a GET request to load the Fb page data into this.state.events.
   * Is called before the component is mounted. */
  public loadFbApi() {
    const axios = require("axios");
    const page_id = "172807799490538";
    const app_id = "276259763376716";
    const app_secret = "c2024208f3c6593f736870ad530d49a0";

    /** Converted the short lived access_token above into a long lived access token,
     * and then converted that into a never-expiring page access token. Need to replace this
     * page access token with the actual AFX Facebook page access token
    */
    //const afxAccessToken = "EAAD7Qb0P0kwBAEsaCzkVHYTf0nbZCtMQpvUZBTeiQUjV4ewFmuwRIZBa7ctuPLvnN6rakOldIJfahdWTYID8ivewI3BefV5Em4TAFhCskOWbo1NFXjgVTWjthC6myxmA3CPo0rBwGdtJhZA9WKh8uACmSAm1l0oZCwaJ4KWtLLL5LdvI07Okb";
    const access_token = "EAAD7Qb0P0kwBAHYwl4Wlk4kEOcnhwXGpDgX0fZCy3fsAY7MZAuAWiwEAJys3WDe1QuimzOUlOgfnW1ZC9EJUz8XmubJUfaeoThVPBm6JZCZAWsIwWYZBD7Uu88x4ZCKBnZCIq8oCfq5Ej561UIO7HLQF2vLFyRlyfZCkzKJFehTKvj4YmX4199PGnv8HFQw2Md0adGOvV86WDCeOxtY4cW1fy";
    const defaultLink = "https://www.facebook.com/events/";


    axios.get("https://graph.facebook.com/" + page_id
      + "/events?access_token=" + access_token)
      .then(response => {
        console.log(response);


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

  public handleSelectEvent(event: object) {

    window.open(event["link"], "_blank");
  }

  public Event(event) {
    return (
      <div>
        {event.title}
      </div>
    );
  }


  /** Make a GET request to the Facebook Graph API */
  public componentWillMount() {
    this.loadFbApi();
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
