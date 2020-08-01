import * as React from "react";
import { Person } from "src/data/types";

// // For display underneath people's images
// export function PersonComponent(props) {
//   const person: Person = props.person;
//   return (
//     <div className="name">{person.name}</div>
//   );
// }

// props == {person: Person, idk: string}

export const PersonComponent: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <div className="name">{person.name}</div>
  );
}
