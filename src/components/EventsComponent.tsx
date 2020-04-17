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
    const page_id = "100384541604731";
    const app_id = "1609348955907740";
    const app_secret = "5b567ecd38da558922b9d70117f94aaa";

    /** Converted the short lived access_token above into a long lived access token,
     * and then converted that into a never-expiring page access token. Need to replace this
     * page access token with the actual AFX Facebook page access token
    */
    const access_token = "EAAW3scDWJpwBAC2ZCjqfl5lAcZB6W8ljgQCXdCIJ1ktacymV4E4thxEXGUUBknKWQ8IQE59UHR4vZBdDxy2AGpYZBl07fqSQo1ex6hGfplhZApwL9JKdjsuLHB3XtM5CF6FVzN2158Q9H09ZChoViadSrxVqmkijMUczRyZCPxTV5QiUbCk3AUFHCGZBQtYZB6pb4gd6byldswQZDZD";
    const defaultLink = "https://www.facebook.com/events/";


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
              title: tempEvent["description"],
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
    console.log(event);
    window.open(event["link"], "_blank");
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
          popup
        />
      </div>
    )
  }
}
