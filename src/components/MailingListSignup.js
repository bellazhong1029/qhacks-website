import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";
import contourlinegrey from "../assets/img/backgrounds/ContourLineGraphicFill1.png";

const MailingListSignup = (props) => (
  <section
    id="mailinglist"
    css={{
      width: "100%",
      color: "white",
      minHeight: "220px",
      backgroundColor: "rgba(0,32,91,1)"
    }}
  >
    <div css={{
      background: `url(${contourlinegrey})`,
      backgroundSize: "cover",
      padding: "50px 0",
      margin: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <ContentWrapper>
        <p
          data-cy="mailing-list-cta"
          css={{
            fontWeight: 700,
            marginTop: "20px",
            marginBottom: "28px",
            fontSize: "22px",
            "@media screen and (max-width: 820px)": {
              fontSize: "16px"
            },
            lineHeight: "28px",
            textAlign: "center"
          }}
        >
          Sign up for our mailing list to receive important QHacks announcements!
      </p>
        <SignUpForm
          dataCyInput="mailing-list-input"
          dataCyButton="mailing-list-button"
          center={true}
        />
      </ContentWrapper>
    </div>
  </section>
);

export default MailingListSignup;
