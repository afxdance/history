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
