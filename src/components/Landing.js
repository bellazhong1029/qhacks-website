import React from "react";


import Header from "./Header";
// import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";
import Particles from 'react-particles-js';
import Countdown from 'react-countdown-now';

import Rocket from "../assets/img/icons/Rocket.svg";
import Planet from "../assets/img/icons/Planet.svg";
import logo from "../assets/img/logo/qhacksCrown-colored.svg";
import word from "../assets/img/logo/qhacksWordmark-white.svg";
import backgroundGradient from "../assets/img/backgrounds/backgroundGradient.svg";

// const applyButtonCSS = {
//   margin: "25px 0 100px 0",
//   "@media(max-width: 820px)": {
//     margin: "30px 0 45px auto"
//   }
// };


const Landing = () => (
  <div
    id=""
    css={{
      width: "100%",
      // background: `url(${backgroundGradient}) no-repeat center center`,
      // backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "600px"
      }
    }}
  >
    <Header standaloneVersion={false} />
    <ContentWrapper>
      <section
        css={{
          gridTemplateColumns: "auto 1fr",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            "@media(min-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "100px"
            },
            "@media (min-width: 821px) and (max-width: 1199px)": {
              paddingRight: "50px",
              paddingTop: "100px"
            },
            "@media (max-width: 820px)": {
              paddingTop: "80px"
            }
          }}
        >
          {/*
          <img
            src={Planet}
            css={{
              width: "75vw",
              maxWidth: "350px",
              //"@media(min-width: 821px)": { display: "none" }
            }}
            alt="QHacks Illustration"
          />           */}
          <br />

          <img
            class="center"
            data-cy="qhacks-wordmark"
            src={logo}
            css={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "40px",
              width: "100vw",
              maxWidth: "200px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "192px",
                paddingBottom: "8px"
              }
            }}
            alt="QHacks Wordmark"
          />

          <img
            class="center"
            data-cy="qhacks-wordmark"
            src={word}
            css={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "40px",
              paddingBottom: "18px",
              width: "100vw",
              maxWidth: "300px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "192px",
                paddingBottom: "8px"
              }
            }}
            alt="QHacks Wordmark"
          />
          
          <h2
            data-cy="qhacks-information"
            css={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "22px",
              textAlign: "center",
              // paddingBottom: "30px",
              "@media(max-width: 820px)": {
                paddingBottom: "24px"
              }
            }}
          >
            Queen’s University • January 31st - February 2nd, 2020
          </h2>
          <img src={Rocket} css={{position: "absolute", left: "50px", top: "300px", "@media(max-width: 1080px)": {display: "none"}}}/>
          <img src={Planet} css={{position: "absolute", width: "400px", right: "-100px", top: "300px", "@media(max-width: 1080px)": {display: "none"}}}/>
          <h2
            data-cy="qhacks-tagline"
            css={{
              padding: "50px 0 30px 0",
              color: "#00205B",
              fontWeight: 500,
              fontSize: "70px",
              letterSpacing: "10px",
              textAlign: "center",
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "20px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
          <Countdown date={"2020-01-31T17:30:00"}/>
          </h2>
          <h2
            data-cy="qhacks-tagline"
            css={{
              padding: "20px 0 30px 0",
              color: "#C9CCFF",
              fontWeight: 500,
              fontSize: "20px",
              wordSpacing: "25px",
              textAlign: "center",
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "20px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}>
              Days : Hours : Minutes : Seconds
            </h2>
            <h2
            data-cy="qhacks-tagline"
            css={{
              padding: "20px 0 100px",
              color: "#d3d3d3",
              fontWeight: 500,
              textAlign: "center",
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "20px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Queen’s University’s 5th annual hackathon.
            <br />
            Join us for an unforgettable experience!
          </h2>
          {/* <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={applyButtonCSS}
            link="https://app.qhacks.io/qhacks-2019/apply"
            type="rounded"
          >
            Apply
          </ActionButton> */}
        </div>
      </section>
      
    </ContentWrapper>
  </div>
);

export default Landing;
