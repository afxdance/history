import * as React from "react"
import HorizontalTimeline from "react-horizontal-timeline";
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent"
import * as Data from "src/data/data"
import { Group, Person } from "src/data/types"
import './Timeline.css';
import { useState } from "react";
import { render } from "react-dom";

import SwipeableViews from 'react-swipeable-views';
import { TimelineData } from 'src/data/timeline-data.js';

const VALUES = [
  '2011-08-03',
  '2012-04-22',
  '2012-08-22',
  '2012-11-12',
  '2013-04-22',
  '2013-08-30',
  '2013-12-08',
  '2014-05-02',
  '2014-08-27',
  '2014-12-06',
  '2015-05-03',
  '2015-08-25',
  '2015-11-21',
  '2016-04-23',
  '2016-08-22',
  '2016-11-19',
  '2017-04-22',
  '2017-08-24',
  '2017-12-02',
  '2018-04-22',
  '2018-08-25',
  '2018-12-02',
  '2019-04-21',
  '2019-08-27',
  '2019-12-18',
  '2020-04-06',
  '2020-08-07',
  '2020-12-06',
  '2021-04-01',
  '2021-08-25',
  '2021-12-06',
];

const views = TimelineData.map((entry, index) => {
  // const awardsList = entry.awards.map((number) =>
  //   <div>number</div>
  // );

  return (
    <div>
      <div key={index}>
        <h2><b>{entry.title}</b></h2>

        <div className='container space-around space-between'>

          <div className='showcases-div'>
            <h2>Showcases</h2>
            {(entry.showcase_url === '')
              ? <div className='no-videos'> There is no available showcase video to play ( ´•︵•` ) </div>
              :
              <div>
                <iframe width="560" height="315" src={entry.showcase_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"></iframe>
              </div>}
          </div>
          <div className='workshops-div'>
            <h2>Workshops</h2>
            {(entry.workshop_url === '')
              ? <div className='no-videos'> There is no available workshop video to play ( ´•︵•` ) </div>
              :
              <div>
                <iframe width="560" height="315" src={entry.workshop_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"></iframe>
              </div>}
          </div>
        </div>

        <hr />

        {(entry.awards !== '')
          ? <div>
            <h3>Awards:</h3>
            <p className='awards-content'>{entry.awards}</p>
          </div>
          : <div></div>
        }
        {(entry.content !== '')
          ? <div>
            <h3>Notable Events:</h3>
            <p className='notable-events-content'>{entry.content}</p>
          </div>
          : <div></div>
        }

        {/* <h3>Notable Events: </h3>
        <p>{entry.content}</p> */}
      </div>
    </div>

  );
});

// st DATES = VALUES.map((year) => new Date(year).getTime());

// expdfault class TimlineComponent extends React.Component {
//  te = {value: 0, previous: 0 };

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
  // const state = {value: 0, previous: 0 };
  const [state, setState] = React.useState({ value: 30, previous: 30 });

  // const timelineEntries = TimelineData.map((entry) =>
  //   <div>Testing testing {entry.date}</div>);

  return (
    <div>
      <hr />

      <div className='timeline-title'>
        <h1>AFX Over the Years</h1>
        <p>Click on a specific date to see showcases, workshops, and awards from that semester!</p>
      </div>

      {/* Bounding box for the Timeline */}
      <div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
        <HorizontalTimeline
          index={state.value}
          indexClick={(index) => {
            console.log(index + " " + state.value + " " + state.previous);
            setState({ value: index, previous: state.value });
          }}
          styles={{ background: '#ffffff', foreground: '#000000', outline: '#dfdfdf' }}
          isOpenBeginning={false}
          isOpenEnding={true}
          values={VALUES} />
      </div>
      <div className='text-center'>
        <SwipeableViews
          index={state.value}
          onChangeIndex={(value, previous) => {
            setState({ value, previous });
          }}
          resistance>
          {views}
        </SwipeableViews>
      </div>
    </div>
  );

}
