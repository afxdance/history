import * as React from "react"
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent"
import * as Data from "src/data/data"
import { Group, Person } from "src/data/types"
// import './Timeline.css';
import { HorizontalTimeline } from "react-horizontal-timeline";
import { useState } from "react";

const VALUES = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];

// export default class App extends React.Component {
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
  const [state, setState] = React.useState({ value: 1, previous: 1 });
  return (
    <div>
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
        {state.value}
      </div>
    </div>
  );
}
