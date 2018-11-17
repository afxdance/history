import * as React from "react";
import AFX from "./data";

export class DisplayUtility {
  // Given an AFX Group (team, board), return a string corresponding to that group's semester of activity
  static getSemesterString(group: AFX.Group) {
    console.log("yah yah yeet")
    console.log(group);
    if (group.boardSemesterId) {
      let semKey: string = group.boardSemesterId[0];
      let semStr: string = AFX.Semesters[semKey].codename;
      let yearStr: string = semStr.substring(0, 4);
      let lastChar: string = semStr[semStr.length - 1]
      if (lastChar == "a") {
        return "Spring " + yearStr;
      }
      else if (lastChar == "c") {
        return "Fall " + yearStr;
      } else { // to take care of Tech and Founder groups
        return ""
      }
    }
    else if (group.teamSemesterId) {
      let sumSemKey: string = group.teamSemesterId[0];
      let sumSemStr: string = AFX.Semesters[sumSemKey].codename;
      let sumYearStr: string = sumSemStr.substring(0, 4);
      let sumLastChar: string = sumSemStr[sumSemStr.length - 1]
      if (sumLastChar == "b") {
        return "Summer " + sumYearStr;
      }
      else {
        return "";
      }
    }
    else {
      return "";
    }
  }
}
