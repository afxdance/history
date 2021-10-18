import * as React from "react";
import { Semester } from "src/data/types";
import * as AFX from "src/data/data";
import { Button } from "reactstrap";
import { useSem } from "../hooks/use-sem";

export interface SemLinkComponent {
  semKey: string;
}

//Component that creates the buttons that when clicked show the correct semester on the page
export const SemLinkComponent: React.FC<SemLinkComponent> = ({ semKey }) => {
  const { setCurrentSemKey } = useSem();
  // If the component is clicked, we want to send the semester key/ID all the way back to App.tsx.
  // This way we can render the correct semester on the page. Yay!
  const onClick = React.useCallback(
    () => {
      setCurrentSemKey(semKey);
      const elem: HTMLElement | null = document.getElementById("bottom");
      if (elem) {
        const topPos = elem.offsetTop;
        window.scrollTo(0, topPos);
      }
    },
    [semKey]
  );

  const semester: Semester = AFX.Semesters[semKey];
  // Semester codename is year with a letter(Example 2018a)
  const suffix: string = semester.codename.slice(-1);
  let semName: string = "";
  // Using string slicing in order to see how we can make the names for the button.
  // tbh should research if there is a better way to do this.
  if (semester.codename === "2011") {
    semName = "Founders 2011-2012";
  } else if (suffix === "a") {
    semName = "Spring " + semester.codename.slice(0, -1);
  } else if (suffix === "b") {
    semName = "Summer " + semester.codename.slice(0, -1);
  } else {
    semName = "Fall " + semester.codename.slice(0, -1);
  }

  return (
    <Button className="sem-button" onClick={onClick}>
      {semName}
    </Button>
  );
};
