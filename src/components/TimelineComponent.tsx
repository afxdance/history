import * as React from "react"
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent"
import * as Data from "src/data/data"
import { Group, Person } from "src/data/types"
// import './Timeline.css';
import HorizontalTimeline from "react-horizontal-timeline";
import { useState } from "react";
import { render } from "react-dom";

import SwipeableViews from 'react-swipeable-views';
import { TimelineData } from 'src/data/timeline-data.js';

const VALUES = [
  '2011-08-03',
  '2012-04-22',
  '2012-11-12',
  '2013-04-22',
  '2013-08-30',
  '2013-12-08',
  '2014-05-02',
  '2014-08-27',
  '2014-12-06',
  '2015-05-03',
  '2013-08-25',
  '2015-11-21',
  '2016-04-23',
  '2016-08-22',
  '2016-04-23',
  '2017-04-22',
  '2017-12-02',
  '2018-04-22',
  '2018-12-02',
  '2019-04-21',
  '2019-08-27',
  '2019-12-18',
  '2020-12-06'
];

const views = TimelineData.map((entry, index) => {
  return (
    <div className='container' key={index}>
      <p>Wait what step bro {entry.date}</p>
      <iframe width="420" height="315"
        src={entry.avatarURL}>
      </iframe>
      {/* {entry.component} */}
    </div>
  );
});

//st DATES = VALUES.map((year) => new Date(year).getTime());

// expdfault class TimlineComponent extends React.Component {
//  te = { value: 0, previous: 0 };

// render() {
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

  // const timelineEntries = TimelineData.map((entry) =>
  //   <div>Testing testing {entry.date}</div>);

  return (
    <div>
      <p>THIS IS A TIMELINE KEKW</p>
      {/* Bounding box for the Timeline */}
      <div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
        <HorizontalTimeline
          index={state.value}
          indexClick={(index) => {
            console.log(index + " " + state.value + " " + state.previous);
            setState({ value: index, previous: state.value });
          }}
          values={VALUES} />
      </div>
      <div className='text-center'>
        <SwipeableViews
          index={state.value}
          onChangeIndex={(value, previous) => {
            setState({ value: value, previous: previous });
          }}
          resistance>
          {views}
          {/* POS sdgsadgjasdgjasdgi */}
        </SwipeableViews>

        {/* any arbitrary component can go here */}
        {/* {state.value} */}
        <p>THIS IS A TIMELINE KEKW</p>
        <h1>jajajajaj</h1>
        <img src="afx2.png"></img>
      </div>
    </div>
  );

}
