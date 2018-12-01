import * as Data from "src/data/data";
import { Group } from "src/data/types";

export class DisplayUtility {
  // Given an AFX Group (team, board), return a string corresponding to that group's semester of activity
  public static getSemesterString(group: Group) {
    // Interpet board and team strings differently
    if (group.boardSemesterId) {
      let semKey: string = group.boardSemesterId[0];
      let semStr: string = Data.Semesters[semKey].codename;
      let yearStr: string = semStr.substring(0, 4);
      let lastChar: string = semStr[semStr.length - 1];
      if (lastChar === "a") {
        return "Spring " + yearStr;
      } else if (lastChar === "c") {
        return "Fall " + yearStr;
      } else {
        // to take care of Tech and Founder groups
        return "";
      }
    } else if (group.teamSemesterId) {
      let sumSemKey: string = group.teamSemesterId[0];
      let sumSemStr: string = Data.Semesters[sumSemKey].codename;
      let sumYearStr: string = sumSemStr.substring(0, 4);
      let sumLastChar: string = sumSemStr[sumSemStr.length - 1];

      // We only need the seemester label if these are summer teams
      if (sumLastChar === "b") {
        return "Summer " + sumYearStr;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }
}
