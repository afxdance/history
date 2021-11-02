import * as React from "react"
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent"
import * as Data from "src/data/data"
import { Group, Person } from "src/data/types"
// import './Timeline.css';
import HorizontalTimeline from "react-horizontal-timeline";
import { useState } from "react";
import { render } from "react-dom";

const VALUES = [
  // '2011-01-02',
  // '2012-01-02',
  // '2013-02-02',
  // '2014-02-02',
  // '2015-02-02',
  // '2016-02-02',
  // '2017-02-02',
  // '2018-02-02',
  // '2019-02-02',
  // '2020-02-02',
  // '2021-02-02',
  '2011'
];


// const DATES = VALUES.map((year) => new Date(year).getTime());

// export default class TimelineComponent extends React.Component {
//   state = { value: 0, previous: 0 };

//   render() {
//     return (
//       <div>
//         {/* Bounding box for the Timeline */}
//         <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
//           <HorizontalTimeline
//             index={this.state.value}
//             indexClick={(index) => {
//               this.setState({ value: index, previous: this.state.value });
//             }}
//             values={VALUES} />
//         </div>
//         <div className='text-center'>
//           {/* any arbitrary component can go here */}
//           {this.state.value}
//         </div>
//       </div>
//     );
//   }

export const TimelineComponent: React.FC<{}> = ({ }) => {
  // const state = { value: 0, previous: 0 };
  const [state, setState] = React.useState({ value: 0, previous: 0 });

  return (
    <div>
      <p>THIS IS A TIMELINE KEKW</p>
      {/* Bounding box for the Timeline */}
      <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
        <HorizontalTimeline
          index={state.value}
          indexClick={(index) => {
            setState({ value: index, previous: state.value });
          }}
          values={VALUES} />
      </div>
      <div className='text-center'>
        {/* any arbitrary component can go here */}
        {/* {state.value} */}
        <p>THIS IS A TIMELINE KEKW</p>
        <h1>jajajajaj</h1>
        <img src="afx2.png"></img>
      </div>
    </div>
  );

}
