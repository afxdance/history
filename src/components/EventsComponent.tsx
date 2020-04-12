import * as React from "react";
// @ts-ignore
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


  public loadFbApi() {
    const axios = require("axios");
    const page_id = "100384541604731";
    const access_token = "EAAW3scDWJpwBAHDKW9gZAQDRZAo8B09bWH7qWUl0whL7t2ZBL1FrX0YXmmWCRfZCMNpmaNrzP0hR4YKAw80cWm0tyR6WXBKTONdYgP6UYnlACaTgROwp5BYZBmlZCQkBRuMq8tB0X0sqZAdKY0C6X5BkRzSJ3Y8rFhw7TirtSwuBUMu0Bh2mTnflUW9abZBvqffOWPH0aYKRqwZDZD";

    /** We need to convert the short lived access_token above into a long lived access token,
     * and then convert that into a never-expiring page access token.
    */

    axios.get("https://graph.facebook.com/" + page_id + "/events?access_token=" + access_token)
      .then(response => {
        var eventsList: any[] = [];

        var count = 0;
        for (let events in response["data"]["data"]) {

          var tempEvent = response["data"]["data"][events];

          console.log(tempEvent);

          eventsList.push(
            {
              id: count,
              title: tempEvent["description"],
              start: new Date(tempEvent["start_time"]),
              end: new Date(tempEvent["end_time"])

            }
          );
          count += 1;
        }

        /** Extract relevant information from eventsList. */
        this.setState({ events: eventsList });
      });
  }

  public componentWillMount() {
    this.loadFbApi();
  }

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
        />
      </div>
    )
  }
}
