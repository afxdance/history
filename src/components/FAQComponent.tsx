import * as React from "react"
import { useState } from "react"

interface Props {
  title: String;
  content: String;
}

export const FaqComponent: React.FC<Props> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div>
        <div>{title}</div>
        <div>{active ? '-' : '+'}</div>
      </div>
      {active && <div> {content}</div>}
    </div>
  );
};
