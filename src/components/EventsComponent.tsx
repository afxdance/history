import * as React from "react";

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
    return <div> HELLLOO</div>;
  }
}
