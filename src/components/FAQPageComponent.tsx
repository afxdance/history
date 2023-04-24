import * as React from "react"
import { CSSProperties } from "react"
import { TimelineComponent } from "src/components/TimelineComponent";
import { FaqComponent } from "src/components/FAQComponent"
import { faqs } from 'src/data/faq'

const dotStyle: CSSProperties = {
  textAlign: "center",
}

let slideIndex = 1;

export const FAQPageComponent: React.FC = () => {
  const toggleDiv = () => {
    // Needs to be declared as HTMLElement or else typescript won't allow style changes
    const e = document.getElementById("infoDiv") as HTMLElement;
    if (e.style.display === "none") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }
  return (
    <div id="about">
      <div className="heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="about--text">
        <span>
          {" "}
          Click on a question to view the answer! Feel free to reach out to us if you're unable to find an answer to your question.
          {" "}
        </span>
      </div>
      <div className="faq-container">
        <div className="faq">
          {faqs.map(({ title, content }) => (
            <FaqComponent title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );

}
