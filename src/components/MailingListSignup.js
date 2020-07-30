import React, { createRef, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";

import lottie from "lottie-web";
import animationImage from "../assets/animations/paperplane.json";
import circuitsLine from "../assets/img/backgrounds/circuitsRed.png";

const MailingListSignup = (props) => {
  let animationContainer = createRef();

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationImage
    });
    return () => animation.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <section
      id="mailinglist"
      css={{
        position: "relative",
        marginTop: "-300px",
        "@media(max-width: 820px)": {
          marginTop: "0px"
        },
        "@media(min-width: 1800px)": {
          marginTop: "-350px"
        }
      }}
    >
      <div
        css={{
          "@media(max-width: 820px)": {
            display: "none"
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c8102e"
            fill-opacity="1"
            d="M0,96L40,112C80,128,160,160,240,181.3C320,203,400,213,480,202.7C560,192,640,160,720,154.7C800,149,880,171,960,197.3C1040,224,1120,256,1200,266.7C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        css={{
          position: "relative",
          zIndex: "2",
          background: `#c8102e url(${circuitsLine}) repeat-x center bottom`,
          paddingBottom: "50px",
          textAlign: "center",
          marginTop: "-6px"
        }}
      >
        <ContentWrapper>
          <div
            className="paperplane"
            ref={animationContainer}
            css={{
              zIndex: "-1",
              position: "absolute",
              width: "500px",
              top: "-250px",
              left: "50px",
              "@media(max-width: 820px)": {
                width: "350px",
                top: "-120px",
                left: "-50px"
              },
              "@media(min-width: 1400px)": {
                left: "20%"
              }
            }}
          />
          <p
            data-cy="mailing-list-cta"
            css={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "28px",
              paddingBottom: "20px",
              "@media screen and (max-width: 820px)": {
                fontSize: "16px",
                paddingTop: "40px"
              }
            }}
          >
            Be the first to receive all important QHacks updates!
          </p>
          <div
            css={{
              margin: "auto 200px",
              "@media(max-width: 820px)": { margin: "0" }
            }}
          >
            <SignUpForm
              btnColor="#fff"
              btnBackgroundColor="#00205B"
              btnHoverColor="fff"
              btnHoverBackgroundColor="#16498c"
            />
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default MailingListSignup;
