import * as React from "react"
import { CSSProperties } from "react"
import { TimelineComponent } from "src/components/TimelineComponent";

const dotStyle: CSSProperties = {
  textAlign: "center",
}

let slideIndex = 1;

export const AboutComponent: React.FC = () => {

  const toggleDiv = () => {
    // Needs to be declared as HTMLElement or else typescript won't allow style changes
    const e = document.getElementById("infoDiv") as HTMLElement;
    if (e.style.display === "none") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }

  const plusSlides = (n: number) => {
    showSlides((slideIndex += n));
  }

  const currentSlide = (n: number) => {
    showSlides((slideIndex = n));
  }

  const showSlides = (n: number) => {
    let i;
    let slides: HTMLCollection = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement
      slide.style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "")
    }
    const lastSlide = slides[slideIndex - 1] as HTMLElement
    lastSlide.style.display = "block"
    dots[slideIndex - 1].className += " active"
    // setTimeout(() => this.showSlides(slideIndex += 1), 10000); // Change image every 10 seconds
  }
  return (
    <div id="about">
      <TimelineComponent />

      <div className="heading">
        <h1>ABOUT AFX DANCE</h1>
      </div>
      <br />
      {/* <div id="slideshow" onLoad={() => this.currentSlide(1)}>
        <div className="mySlides fade">
          <img
            src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/82179407_2429012747203354_2801596146294718464_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=S-EGV0t8v4cAX-Yjgh4&_nc_ht=scontent-lax3-1.xx&oh=8686e38408ad27b0da95c3cfeab03bb1&oe=5EA678C1"
            width="100%" />
        </div>
        <div className="mySlides fade">
          <img
            src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/82179407_2429012747203354_2801596146294718464_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=S-EGV0t8v4cAX-Yjgh4&_nc_ht=scontent-lax3-1.xx&oh=8686e38408ad27b0da95c3cfeab03bb1&oe=5EA678C1"
            width="100%" />
        </div>
        <div className="mySlides fade">
          <img
            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/82893166_2429012740536688_5495804662646833152_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=NsJxCc37FwQAX9u9ASC&_nc_ht=scontent-lax3-2.xx&oh=dbd759e48188e3ab54ccbd78e46252fe&oe=5EA534D6"
            width="100%" />
        </div>
        <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
      </div>
      <br></br>
      <div className="dots" style={dotStyle}>
        <span className="dot" onClick={() => this.currentSlide(1)}></span>
        <span className="dot" onClick={() => this.currentSlide(2)}></span>
        <span className="dot" onClick={() => this.currentSlide(3)}></span>
      </div>
      <br></br> */}

      <div className="about--text">
        <span>
          {" "}
          <strong>AFX Dance</strong> is a dance group founded by Ping Quach, Geoffrey Chen, and Rosemary Hua in Fall 2011 to give dancers an opportunity to learn about and participate in dance culture, continuously build our community, and positively impact those around us through that process. {" "}
        </span>
        <span>
          {" "}
          Our name, <strong>A</strong>
          spirations, <strong>F</strong>
          amily, e<strong>X</strong>
          perience and our philosophy of creating a family environment for dancers to build up the confidence and support to reach new heights.{" "}
        </span>
        <br />
        <span>
          With a dance “Company” (competitive/advanced) and “General” (introductory/intermediate) membership, we strive to provide our dancers and leaders with new, fulfilling experiences that will empower them to dive deeper into dance culture; pass it on to the greater community along with our philosophies and values of growth, community, and support; and hold each other accountable in uplifting and amplifying the voices, lives, and experiences of those who have made all of these art forms and experiences possible in the first place.
        </span>

        <br />

        <span>
          <strong>Awards:</strong>
          <br />
          <i>AFX Dance Company:</i>
          <br />
          Collab NorCal 2019: 2nd Place
          <br />
          Montage 2015: 2nd Place
          <br />
          Montage 2014: 3rd Place
        </span>
      </div>
      <div className="social-mediaz">
        <a href="https://www.facebook.com/AFXdance/">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
        <a href="https://www.instagram.com/afxdance/">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
        <a href="https://www.youtube.com/channel/UCfqDntI9j7VESB0fNgw9Yog">
          <i className="fa fa-youtube-play" aria-hidden="true" />
        </a>
      </div>
      <div className="border" />
      <button className="joinUs" onClick={toggleDiv}>
        Join Us!
      </button>
      <div id="infoDiv">
        <p>
          To join AFX, come out to one of the following audition dates after filling out our
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmeCw4oTmB9Kq3aEaHNr38pYrNLq3uCkL2PHY02RLpYYsqAA/viewform">
            RSVP Form
          </a>
          . No
          prior experience is necessary!
        </p>
      </div>
    </div>
  );
}
