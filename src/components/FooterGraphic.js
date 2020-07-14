import React from "react";

import background from "../assets/img/backgrounds/extendedGrayCircuits.png";
import landingImg from "../assets/img/icons/landingImg.svg";
import circuitGrey from "../assets/img/backgrounds/circuitsGrey.png";

const FooterGraphic = () => (
  <div
    css={{
      backgroundImage:
        "linear-gradient(to left, rgba(248,248,248,0), rgba(248,248,248,1))"
    }}
  >
    <div
      css={{
        position: "relative",
        width: "100%",
        height: "450px",
        background: `url(${background}) repeat-x center bottom`,
        backgroundSize: "auto 250px",
        "@media(max-width: 820px)": {
          height: "300px",
          backgroundSize: "auto 150px"
        }
      }}
    >
      <div css={{ textAlign: "center" }}>
        <img
          src={landingImg}
          css={{
            width: "400px",
            "@media(max-width: 820px)": {
              width: "330px"
            }
          }}
          alt="QHacks Illustration"
        />
      </div>
    </div>
  </div>
);

export default FooterGraphic;
