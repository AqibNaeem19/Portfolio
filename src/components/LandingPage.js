import React from "react";

import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landingPage-container">
      <h1 className="landingPage-mainHeading">Hi, I am{" "} 
        <span className="landingPage-span">Aqib Naeem</span>
      </h1>

      <hr className="landingPage-hr"/>

      <p className="landingPage-mainParagraph">Building the next{" "} 
        <span className="landingPage-span">generation{" "}</span>
        of web apps for enhanced <span className="landingPage-span">user expierences{" "}</span>
        and never matched <span className="landingPage-span">performance</span> ever 
      </p>
    
      <div className="landingPage-ballContainer">
        <div className="landingPage-ball1"></div>
        <div className="landingPage-ball2"></div> 
      </div>
    </div>
  );
}
