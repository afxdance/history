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


    { "fields": "description,start_time,end_time,place,cover" },
    function (response: any) {
      // Insert your code here
      console.log(response);
    }
    );
  }


  public render() {
    return (<div>

    </div>)
  }


}
