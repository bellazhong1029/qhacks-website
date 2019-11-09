import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import Mentors from "./Mentors";

import plchldr from "../assets/img/logo/qhacksAppIcon.png";
import pascal from "../assets/img/headshots/pascal_siakam.png";
import cubes3png from "../assets/img/icons/cubes-3.png";
import cubes3webp from "../assets/img/icons/cubes-3.webp";

import ContentWrapper from "./ContentWrapper";

const speakers = [
  {
    name: "Speaker 1",
    title: "Co-Founder of X",
    description:
      "Speaker 1 is the best.",
    image: pascal
  },
  {
    name: "Speaker 2",
    title: "CEO at Y",
    description:
      "Speaker 2 is also pretty good.",
    image: pascal
  },
  {
    name: "Speaker 3",
    title: "Founder & CEO of Z",
    description:
      "Speaker 3 is also cool, but not as cool as 1 and 2.",
    image: pascal
  }
];

const Speakers = () => (
  <section
    css={{
    //   backgroundColor: "#f8f8f8",
      position: "relative"
    }}
    id="speakers"
  >
    <ContentWrapper>
      <h1
        css={{
          paddingTop: "112px",
          paddingBottom: "48px",
          textAlign: "center",
          position: "relative",
          color: "#ffffff",
          zIndex: "3",
          "@media(max-width: 820px)": {
            paddingTop: "200px",
            paddingBottom: "24px"
          }
        }}
      >
        Keynote Speakers
      </h1>
      {/* Desktop */}
      <div
        css={{
          display: "grid",
          position: "relative",
          zIndex: 3,
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
      <picture
        css={{
          zIndex: "1",
          width: "235px",
          height: "289px",
          position: "absolute",
          bottom: "-250px",
          right: "62px",
          display: "block",
          "@media(max-width: 1000px)": {
            display: "none"
          }
        }}
      >
        <source srcSet={cubes3webp} type="image/webp" />
        <source srcSet={cubes3png} type="image/png" />
        <img
          css={{
            "@media(max-width: 1000px)": {
              display: "none"
            }
          }}
          src={cubes3png}
          alt="Floating cubes"
        />
      </picture>
      <Mentors />
    </ContentWrapper>
  </section>
);

export default Speakers;
