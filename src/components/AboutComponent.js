import React from "react";
import "../assets/css/about.css";
import logo from "../assets/img/Comp 1.gif";

function About() {
  
  return (
    <div style={styles.container}>
      <div className="wrapper">
        <div className="gridContainer">

          <div className="item-about" >
            <h1 style={styles.header}>
              The Collective <br /> Belief
            </h1>

            <p>
              Devote is a Creative Collective aimed to enrich, educate, and in turn, learn. We are a collaborative organization, meaning we not also exist to create content/applications/entities for you, but look towards our viewers for their insight as well.
              <br />
              <br />
              In a rapidly shifting landscape Devote aims to be an unwavering beacon of nuanced narratives and compassionate perspectives.
            </p>
          </div>

          <div className="item-color-pink" > </div>

          <div className="item-color-green" > </div>
          <div className="item-frame" >
            <div className="frame-content" >  </div>
          </div>

          <div className="item-photo-a" >  <img src={require('../assets/img/computer.png')}/></div>
          <div className="item-photo-logo" > <h1 style={styles.secondaryLogo}> D </h1></div>
          <div className="item-text" >
            <p>
              From thought pieces intended to spark new ideas, to silly content made to make your day just a bit better.
              <br />
              <br />
              The world we live in is a vast sea of grey, while this site may not bring any direct clarity, it is our hope we offer a safe haven where you can front the storm from a different viewpoint.
            </p>
          </div>
          <div className="item-desktop" > <img src={logo} alt="loading..." style={styles.gif} /> </div>
        </div>

        <div className="gridContainer b">

          <div className="item-about" >
            <h1 style={styles.header}>
              The Collective <br /> Belief
            </h1>

            <p>
              Devote is a Creative Collective aimed to enrich, educate, and in turn, learn. We are a collaborative organization, meaning we not also exist to create content/applications/entities for you, but look towards our viewers for their insight as well.
              <br />
              <br />
              In a rapidly shifting landscape Devote aims to be an unwavering beacon of nuanced narratives and compassionate perspectives.
            </p>
          </div>

          <div className="item-color-pink" > </div>

          <div className="item-color-green" > </div>
          <div className="item-frame" >
            <div className="frame-content" >   </div>
          </div>

          <div className="item-photo-a" > </div>
          <div className="item-photo-logo" > </div>
          <div className="item-text" >
            <p>
              From thought pieces intended to spark new ideas, to silly content made to make your day just a bit better.
              <br />
              <br />
              The world we live in is a vast sea of grey, while this site may not bring any direct clarity, it is our hope we offer a safe haven where you can front the storm from a different viewpoint.
            </p>
          </div>
          <div className="item-desktop" > </div>
        </div>


      </div>
    </div>
  )
}

const styles = {
  header: {
    textAlign: "end",
    fontSize: "4em",
    margin: "0"
  },
  secondaryLogo: {
    margin:"auto",
    fontSize:"8em"
  },
  gif:{
    width:"100%",
    margin:"auto",
    maxWidth:"504px",
    maxHeight:"245px",
  }
};
export default About;