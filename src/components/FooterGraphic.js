import React from "react";

import ContentWrapper from "./ContentWrapper";

import background from "../assets/img/backgrounds/FooterGraphic.png";
import landingImg from "../assets/img/icons/landingImg.svg";

const FooterGraphic = () => (
  <footerGraphic css={{ zIndex: "9999" }}>
    <div
      id=""
      css={{
        width: "100%",
        background: `url(${background}) no-repeat center center`,
        backgroundSize: "cover",
        "@media(max-width: 600px)": {
          minHeight: "600px"
        }
      }}
    >
      <ContentWrapper>
        <img
          src={landingImg}
          css={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "83px",
            width: "75vw",
            maxWidth: "350px"
          }}
          alt="QHacks Illustration"
        />
      </ContentWrapper>
    </div>
  </footerGraphic>
);

export default FooterGraphic;



    