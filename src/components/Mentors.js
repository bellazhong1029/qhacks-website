import React from "react";
import MentorCard from "./MentorCard";

// Company Logos

// Mentor headshots
import plchldr from "../assets/img/logo/qhacksAppIcon.png";
import pascalSiakam from "../assets/img/headshots/pascal_siakam.png";
import pm from "../assets/img/headshots/pm.png";
import rapsLogo from "../assets/img/companyLogos/rapsLogo.png";
const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors = [
  {
    name: "Pascal Siakam",
    title: "Raptors",
    headshot: pascalSiakam,
    companyName: "Company Site",
    companyLogo:rapsLogo,
    companyUrl: "https://www.nba.com/raptors/interstitial-2"
  },
  {
    name: "Patrick Mccaw",
    title: "Raptors",
    headshot: pm,
    companyName: "Company Site",
    companyLogo:rapsLogo,
    companyUrl: "https://www.nba.com/raptors/interstitial-2"
  }

];

export default () => (
  <div css={{ marginBottom: "16px" }}>
    <h1 css={{ color: "#ffffff", fontWeight: "600", fontSize: "28px" ,textAlign: "center",position: "relative",}}>
      Additional Mentors
    </h1>
    <div
      css={{
        color: "#ffffff",
        display: "grid",
        "@media (min-width: 1284px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        },
        "@media (max-width: 1284px)": {
          gridTemplateColumns: "auto auto"
        },
        "@media (max-width: 912px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }
      }}
    >
      {mentors.map((mentor, i) => (
        <MentorCard
          {...mentor}
           key={mentor.name}
          borderColor={QHACKS_COLORS[i % 3]}
          
        />
      ))}
    </div>
  </div>
);
