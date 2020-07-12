import React, { useState } from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";
import MailingListSignUp from "./MailingListSignup";

import backgroundImage from "../assets/img/backgrounds/landingBG.png";
import graphicMobile from "../assets/img/backgrounds/backgroundMobile.png";
import waveLineRed from "../assets/img/backgrounds/waveLineRed.png";
import logo from "../assets/img/logo/qhacksCrown-colored.svg";
import word from "../assets/img/logo/qhacksWordmark-colored.svg";
import mailIcon from "../assets/img/icons/mail.svg";
import mailOpen from "../assets/img/icons/mailOpen.svg";

const applyButtonCSS = {
  alignItems: "center",
  position: "relative",
  margin: "40px 0 40px auto",
  "@media(max-width: 820px)": {
    margin: "30px auto 45px auto",
    padding: "5px 10px 5px 10px"
  }
};

const mailingButtonCSS = {
  alignItems: "center",
  position: "relative",
  margin: "15px 0 5px auto",
  fontWeight: "550",
  fontSize: "15px",
  ":hover:not(:disabled)": {
    backgroundColor: "#ffffff",
    color: "#16498c",
    border: "2px solid #16498c"
  },
  "@media(max-width: 820px)": {
    display: "none"
  }
};

function Landing() {
  const [mail, setMail] = useState({ onMouse: false, onClick: false });

  return (
    <div
      css={{
        width: "100%",
        paddingBottom: "80px",
        background: `url(${backgroundImage}) no-repeat center top`,
        backgroundSize: "1400px auto",
        "@media (min-width: 820px) and (max-width: 1200px)": {
          backgroundSize: "1200px auto"
        },
        "@media(max-width: 820px)": {
          minHeight: "600px",
          background: `url(${waveLineRed}) no-repeat center bottom`
        }
      }}
    >
      <Header standaloneVersion={false} />
      <ContentWrapper>
        <section
          css={{
            textAlign: "center",
            marginRight: "auto",
            "@media(max-width: 820px)": {
              display: "block"
            }
          }}
        >
          <div
            css={{
              marginLeft: "55%",
              textAlign: "left",
              paddingRight: "auto",
              "@media(min-width: 1200px)": {
                paddingTop: "150px"
              },
              "@media (min-width: 820px) and (max-width: 1200px)": {
                paddingRight: "50px",
                paddingTop: "100px"
              },
              "@media (max-width: 820px)": {
                margin: "0",
                textAlign: "center",
                paddingTop: "80px"
              }
            }}
          >
            <img
              src={graphicMobile}
              css={{
                width: "350px",
                display: "block",
                margin: "0 auto",
                "@media(min-width: 820px)": {
                  display: "none"
                }
              }}
            />

            <img
              src={word}
              css={{
                paddingTop: "20px",
                paddingBottom: "10px",
                paddingRight: "10px",
                width: "280px",
                "@media (min-width: 820px) and (max-width: 1200px)": {
                  width: "200px"
                },
                "@media(max-width: 820px)": {
                  paddingTop: "12px",
                  width: "250px"
                }
              }}
              alt="QHacks Wordmark"
            />
            <img
              src={logo}
              css={{
                paddingBottom: "20px",
                paddingLeft: "10px",
                width: "140px",
                "@media (min-width: 820px) and (max-width: 1200px)": {
                  width: "100px",
                  paddingLeft: "5px"
                },
                "@media(max-width: 820px)": {
                  display: "none"
                }
              }}
              alt="QHacks Wordmark"
            />
            <h2
              data-cy="qhacks-information"
              css={{
                zIndex: "2",
                color: "#000000",
                fontWeight: 600,
                fontSize: "22px",
                marginTop: "20px",
                marginBottom: "20px",
                "@media (min-width: 820px) and (max-width: 1200px)": {
                  fontSize: "20px"
                },
                "@media(max-width: 820px)": {
                  fontSize: "15px",
                  fontWeight: 600,
                  paddingBottom: "20px"
                }
              }}
            >
              Queen’s University • February 1st - 3rd, 2021
            </h2>
            <h2
              data-cy="qhacks-tagline"
              css={{
                marginTop: "30px",
                marginBottom: "15px",
                fontWeight: 500,
                lineHeight: "30px",
                "@media(max-width: 820px)": {
                  fontSize: "15px",
                  lineHeight: "1.6"
                }
              }}
            >
              Queen’s University’s 5th annual hackathon.
              <br />
              Join us for an unforgettable experience!
            </h2>
            <ActionButton
              dataCy="apply-button"
              backgroundColor="#00205B"
              foregroundColor="#ffffff"
              hoverBackgroundColor="#16498c"
              hoverForegroundColor="#ffffff"
              style={applyButtonCSS}
              link="https://app.qhacks.io"
              type="rounded"
            >
              Apply Now
            </ActionButton>
          </div>
          {!mail.onClick && (
            <div
              css={{
                textAlign: "left",
                "@media(min-width: 1200px)": {
                  paddingLeft: "50px",
                  paddingTop: "50px"
                },
                "@media  (max-width: 1200px)": {
                  paddingLeft: "20px",
                  paddingTop: "50px"
                }
              }}
            >
              <button
                onMouseEnter={() => setMail({ ...mail, onMouse: true })}
                onMouseLeave={() => setMail({ ...mail, onMouse: false })}
                onClick={() => setMail({ ...mail, onClick: !mail.onClick })}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "0"
                }}
              >
                <a href="/#mailinglist">
                  <ActionButton
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    style={mailingButtonCSS}
                    type="rounded"
                  >
                    {!mail.onMouse && (
                      <img
                        src={mailIcon}
                        css={{
                          width: "28px",
                          paddingRight: "8px"
                        }}
                      />
                    )}
                    {mail.onMouse && (
                      <img
                        src={mailOpen}
                        css={{
                          width: "28px",
                          paddingRight: "8px"
                        }}
                      />
                    )}
                    Sign up for our mailing list
                  </ActionButton>
                </a>
              </button>

              <h3
                css={{
                  fontWeight: 300,
                  fontSize: "18px",
                  textDecoration: "underline",
                  padding: "0 auto 0 10px",
                  "@media(max-width: 820px)": {
                    display: "none"
                  }
                }}
              >
                to receive important QHacks announcements!
              </h3>
            </div>
          )}
        </section>
      </ContentWrapper>

      {mail.onClick && (
        <div
          css={{
            display: "block",
            marginTop: "150px"
          }}
        >
          <MailingListSignUp onClick={mail.onClick} setMail={setMail} />
        </div>
      )}
    </div>
  );
}

export default Landing;
