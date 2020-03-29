import * as React from "react";
import { CSSProperties } from 'react';

const dotStyle: CSSProperties = {
  textAlign: 'center'
};

var slideIndex = 1;

export class AboutComponent extends React.Component {

  constructor(props: any) {
    super(props);
  }

  toggleDiv() {
    // Needs to be declared as HTMLElement or else typescript won't allow style changes
    const e = document.getElementById("infoDiv") as HTMLElement;
    if (e.style.display === "none") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }

  plusSlides(n: number) {
    this.showSlides(slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(slideIndex = n);
  }

  showSlides(n: number) {
    var i;
    var slides: HTMLCollection = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    const lastSlide = slides[slideIndex - 1] as HTMLElement;
    lastSlide.style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  public render() {
    return (
      <div id="about">
        <div className="heading">
          <h1>ABOUT</h1>
        </div>
        <br></br>
        <div id="slideshow" onLoad={() => this.currentSlide(1)}>
          <div className="mySlides">
            <img
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/83158448_2429000047204624_2334159853150273536_o.png?_nc_cat=111&_nc_sid=6e5ad9&_nc_ohc=DOyHHeDMf9AAX-RZVYj&_nc_ht=scontent-lax3-2.xx&oh=08f81810a42c3d4f37873fcf0b95335f&oe=5E9C64EE"
              width="100%" />
          </div>
          <div className="mySlides">
            <img
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/83158448_2429000047204624_2334159853150273536_o.png?_nc_cat=111&_nc_sid=6e5ad9&_nc_ohc=DOyHHeDMf9AAX-RZVYj&_nc_ht=scontent-lax3-2.xx&oh=08f81810a42c3d4f37873fcf0b95335f&oe=5E9C64EE"
              width="100%" />
          </div>
          <div className="mySlides">
            <img
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/83158448_2429000047204624_2334159853150273536_o.png?_nc_cat=111&_nc_sid=6e5ad9&_nc_ohc=DOyHHeDMf9AAX-RZVYj&_nc_ht=scontent-lax3-2.xx&oh=08f81810a42c3d4f37873fcf0b95335f&oe=5E9C64EE"
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
        <br></br>

        <div className="about--text">
          <span> <strong>AFX Dance</strong> is a hip hop/urban dance group founded by Ping Quach, Geoffrey Chen, and
            Rosemary Hua in Fall 2011 to give dancers an opportunity to grow. </span>

          <span> Our name, <strong>A</strong>spirations, <strong>F</strong>amily, e<strong>X</strong>perience reflects
            our philosophy of creating a family environment for dancers to build up the confidence and support to reach new
            heights. We offer teams for beginner, intermediate, and competitive levels and we hope to provide dancers, with
            new fulfilling experiences that will empower them to pass on our philosophies to the greater community. </span>

          <br></br>

          <span>AFX Dance comprises of multiple Project and Training level teams along with our organization's own
            competitive hip-hop/urban dance team (AFX Competition).</span>

          <br></br>

          <span><strong>Awards:</strong>
            <br></br>
            <i>AFX Competition Team:</i>
            <br></br>
            Montage 2014: 3rd Place
            <br></br>
            Montage 2015: 2nd Place
            <br></br>
            Collab NorCal 2019: 2nd Place</span>
        </div>
        <div className="social-mediaz">
          <a href="https://www.facebook.com/AFXdance/">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/afxdance/">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCfqDntI9j7VESB0fNgw9Yog">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
        </div>
        <div className="border"></div>
        <button className="joinUs" onClick={this.toggleDiv}>Join Us!</button>
        <div id="infoDiv">
          <p>To join AFX, come out to one of the following audition dates. No prior experience is necessary!</p>
        </div>
      </div>

    );
  }
}
