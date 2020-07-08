import React from "react";

import ContentWrapper from "./ContentWrapper";

import background from "../assets/img/backgrounds/FooterGraphic.png";
import landingImg from "../assets/img/icons/landingImg.svg";
import circuitGrey from "../assets/img/backgrounds/circuitsGrey.png";

const FooterGraphic = () => (
  <div>
    <div
      css={{
        position: "relative",
        width: "100%",
        height: "500px",
        background: `url(${circuitGrey}) repeat-x center bottom`,
        backgroundSize: "auto 300px",
        "@media(max-width: 820px)": {
          height: "300px",
          backgroundSize: "auto 150px"
        }
      }}
    >
      <ContentWrapper>
        <div css={{ textAlign: "center", margin: "auto 0" }}>
          <img
            src={landingImg}
            css={{
              width: "450px",
              "@media(max-width: 820px)": {
                width: "330px"
              }
            }}
            alt="QHacks Illustration"
          />
        </div>
      </ContentWrapper>
    </div>
  </div>
);

export default FooterGraphic;
