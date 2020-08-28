import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import Mentors from "./Mentors";

import cameron from "../assets/img/speakers/CameronGorrie.jpg";
import nicole from "../assets/img/mentors/headshots/NicoleFitzgerald.jpg";
import david from "../assets/img/speakers/DavidHariri.jpg";

import ContentWrapper from "./ContentWrapper";

const speakers = [
  {
    name: "Cameron Gorrie",
    title: "Senior Engineering Manager",
    company: "Top Hat",
    description: " ",
    image: cameron,
    companyUrl: "https://tophat.com/"
  },
  {
    name: "Nicole Fitzgerald",
    title: "Machine Learning Engineer",
    company: "Microsoft",
    description: " ",
    image: nicole,
    companyUrl: "https://careers.microsoft.com/us/en"
  }
];

const Speakers = () => (
  <section
    id="speakers"
    css={{
      position: "relative",
      // backgroundImage:
      //   "linear-gradient(to left, rgba(248,248,248,0), rgba(248,248,248,1))",
      background: "rgba(248, 248, 248, 1)",
      padding: "60px 0 0 0"
    }}
  >
    <ContentWrapper>
      <h1
        css={{
          paddingBottom: "48px",
          textAlign: "center",
          position: "relative",
          "@media(max-width: 820px)": {
            paddingBottom: "24px"
          }
        }}
      >
        Speakers (2020)
      </h1>
      <div
        css={{
          display: "grid",
          position: "relative",
          maxWidth: speakers.length * 500,
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: speakers
            .map(() => "1fr ")
            .reduce((a, b) => a + b),
          "@media(max-width: 1120px)": {
            display: "none"
          }
        }}
      >
        {speakers.map((speaker) => (
          <SpeakerCard {...speaker} key={speaker.name} />
        ))}
      </div>
      {/* Mobile */}
      <div
        css={{
          paddingBottom: "30px",
          "@media(min-width: 1120px)": { display: "none" }
        }}
      >
        <SpeakerSlider speakers={speakers} />
      </div>
      <Mentors />
    </ContentWrapper>
  </section>
);

export default Speakers;
