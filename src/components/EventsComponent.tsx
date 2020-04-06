import * as React from "react";
// @ts-ignore
import { Calendar, momentLocalizer } from 'react-big-calendar';
// @ts-ignore
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/sass/styles.scss';


declare global {
  interface Window {
    FB: any;
    fbAsyncInit: any;
  }
}

export class EventsComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.setState({
      events: []
    });
    this.loadFbApi();
  }

  // public loadFbApi() {
  //   window.FB.api("/me", "GET", { fields: "id,name" }, function(response: any) {
  //     // Insert your code here
  //     console.log(response);
  //   });
  // }

  // public componentDidMount() {
  //   this.loadFbApi();
  // }

  public loadFbApi() {
    const axios = require("axios");
    const page_id = "100384541604731";
    const access_token = "EAAW3scDWJpwBAJsrWiDppdBQ0eYte1m8oR7BOCRBAInpiZAY7uFIBdea6p8IZBU5PLkQ8koKAhz27mGQeAY067aBtgUifDyu2L1HRm3DAuSvhjo6bXnVLJacnzZA78HOkogtfDspGcuNHwrSGuojlqUcD5SZCuZB5X1bLo0nps8hbZCKZC9V7nGhigDZBHbQ59ucdYaZC5P2E2wZDZD";

    /** We need to convert the short lived access_token above into a long lived access token,
     * and then convert that into a never-expiring page access token
    */

    axios.get("https://graph.facebook.com/" + page_id + "/events?access_token=" + access_token)
      .then(response => {
        console.log(response);
        var eventsList: any[] = []

      });
  }

  public render() {

    const localizer = momentLocalizer(moment);

    return (
      <div>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAcessor="end"
          style={{ height: 800 }}
        />
      </div>
    )
  }
}
