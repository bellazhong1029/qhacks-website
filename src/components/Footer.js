import React from "react";
import moment from "moment";

import ContentWrapper from "./ContentWrapper";
import SignUpForm from "./SignUpForm.js";

import mail from "../assets/img/icons/socialMail.svg";
import twitter from "../assets/img/icons/socialTwitter.svg";
import logo from "../assets/img/logo/qhacksCrown-white.svg";
import facebook from "../assets/img/icons/socialFacebook.svg";
import instagram from "../assets/img/icons/socialInstagram.svg";
import wordmark from "../assets/img/logo/qhacksWordmark-white.svg";
import MediaQuery from "react-responsive";

const navigateLinks = [
  {
    label: "QHacks 2018",
    url: "https://2018.qhacks.io",
    dataCy: "footer-2018-link"
  },
  {
    label: "Local Hack Day",
    url: "https://localhackday.mlh.io/",
    dataCy: "footer-lhd-link"
  },
  {
    label: "QHacks Blog",
    url: "https://medium.com/@qhacks",
    dataCy: "footer-blog-link"
  },
  {
    label: "QHacks Dashboard",
    url: "https://app.qhacks.io",
    dataCy: "footer-dashboard-link"
  },
  {
    label: "MLH Code of Conduct",
    url: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
    dataCy: "footer-mlh-code-of-conduct-link"
  }
];

const socialLinks = [
  {
    icon: mail,
    url: "mailto:hello@qhacks.io",
    label: "hello@qhacks.io",
    dataCy: "footer-email-link"
  },
  {
    icon: twitter,
    url: "https://twitter.com/qhacks19",
    label: "Follow us on Twitter",
    dataCy: "footer-twitter-link"
  },
  {
    icon: facebook,
    url: "https://fb.com/qhacks",
    label: "Like us on Facebook",
    dataCy: "footer-facebook-link"
  },
  {
    icon: instagram,
    url: "https://instagram.com/qhacks19",
    label: "Follow us on Instagram",
    dataCy: "footer-instagram-link"
  }
];

const finePrint = {
  color: "#bebebe",
  fontSize: "12px"
};

const [smallScreens, mediumScreens, largeScreens] = [
  "@media(max-width: 950px)",
  "@media (min-width: 950px) and (max-width: 1200px)",
  "@media(min-width: 1200px)"
];

const Footer = () => (
  <footer css={{ backgroundColor: "#11213f", color: "#ffffff" }}>
    <ContentWrapper>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          paddingTop: "80px",
          " h3": {
            color: "inherit",
            textTransform: "uppercase"
          },
          [smallScreens]: {
            display: "block",
            textAlign: "center"
          }
        }}
      >
        <div
          css={{
            [smallScreens]: {
              marginLeft: "auto",
              marginRight: "auto"
            },
            maxWidth: "455px"
          }}
        >
          <span>
            <img
              height="34px"
              src={logo}
              css={{ marginBottom: "5px", paddingRight: "13px" }}
              alt="QHacks Crown"
            />
            <img height="37px" src={wordmark} alt="QHacks Wordmark" />
          </span>
          <p
            css={{
              fontSize: "12px",
              lineHeight: "20px",
              paddingTop: "40px",
              paddingRight: "20px",
              paddingBottom: "40px",
              lineHeight: "1.67",
              [smallScreens]: { paddingLeft: "24px", paddingRight: "24px" }
            }}
          >
            QHacks is Queen’s University’s annual hackathon! QHacks was founded
            in 2016 with a mission to advocate and incubate the tech community
            at Queen’s University and throughout Canada. Going into our fourth
            year we have been aggressively growing to become one of the biggest
            and most exciting hackathons in North America.
          </p>
          <h3>Stay Connected</h3>
          <p
            css={{
              fontSize: "12px",
              lineHeight: "20px",
              paddingTop: "12px",
              paddingBottom: "4px"
            }}
          >
            Sign up for our mailing list for the latest updates.
          </p>
          <div
            css={{
              alignItems: "left",
              justifyContent: "left",
              display: "flex",
              marginLeft: "-8px",
              paddingBottom: "64px",
              [smallScreens]: {
                marginLeft: "0px",
                paddingBottom: "24px"
              }
            }}
          >
            <MediaQuery query="screen and (max-width: 950px)">
              <SignUpForm
                fontSize={14}
                backgroundColor="#c81c2e"
                foregroundColor="white"
                dataCy="footer-signup-button"
                center={true}
              />
            </MediaQuery>
            <MediaQuery query="screen and (min-width: 950px)">
              <SignUpForm
                fontSize={14}
                backgroundColor="#c81c2e"
                foregroundColor="white"
                dataCy="footer-signup-button"
              />
            </MediaQuery>
          </div>
          <div css={{ [smallScreens]: { display: "none" } }}>
            <p
              data-cy="footer-address"
              css={{ ...finePrint, marginBottom: "5px" }}
            >
              Queen&#39;s University | 99 University Ave, Kingston, ON
            </p>
            <a
              data-cy="footer-dev-plug"
              css={{ ...finePrint, fontWeight: "400" }}
              href="https://github.com/qhacks/qhacks-website"
              target="_blank"
              rel="external noopener"
            >
              {"< />"} with ♡ by Queen&#39;s students
            </a>
            <p
              data-cy="footer-copyright-notice"
              css={{
                ...finePrint,
                paddingBottom: "32px",
                marginTop: "6px"
              }}
            >
              Copyright © {moment().year()} QHacks
            </p>
          </div>
        </div>
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "80px",
            [smallScreens]: {
              paddingTop: "0px",
              paddingBottom: "50px"
            }
          }}
        >
          <h3>Navigate</h3>
          <ul
            css={{
              paddingTop: "30px",
              listStyleType: "none",
              ">li": { paddingBottom: "23px" },
              " a": {
                color: "inherit",
                fontWeight: 600,
                textDecoration: "none",
                ":hover": {
                  color: "#ed253a"
                }
              }
            }}
          >
            {navigateLinks.map(({ label, url, dataCy }) => (
              <li key={url}>
                <a href={url} data-cy={dataCy}>{`${label} ▸`}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            [largeScreens]: {
              paddingTop: "80px"
            },
            [mediumScreens]: {
              paddingTop: "80px"
            }
          }}
        >
          <h3 css={{ [smallScreens]: { display: "none" } }}>Get in touch</h3>
          <div
            css={{
              paddingTop: "30px",
              listStyleType: "none",
              ">div": { paddingBottom: "18px" },
              " a": {
                textDecoration: "none",
                textAlign: "left",
                color: "inherit",
                fontWeight: "bold"
              },
              display: "grid",
              [smallScreens]: {
                marginLeft: "auto",
                marginRight: "auto",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                maxWidth: "196px",
                paddingTop: "0px",
                paddingBottom: "60px"
              }
            }}
          >
            {socialLinks.map(({ icon, label, url, dataCy }) => (
              <div
                key={url}
                css={{
                  display: "grid",
                  gridTemplateColumns: "min-content auto",
                  ":hover": {
                    " a": {
                      color: "#ed253a",
                      ">div": {
                        backgroundColor: "#ed253a"
                      }
                    }
                  },
                  [smallScreens]: {
                    display: "block",
                    width: "40px",
                    height: "40px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }
                }}
              >
                <a aria-label={label} href={url} css={{}}>
                  <div
                    css={{
                      backgroundColor: "#e3e3e3",
                      mask: `url(${icon}) no-repeat center center`,
                      maskSize: "100% 100%",
                      width: "28px",
                      height: "28px",
                      marginRight: "16px",
                      marginTop: "-5px",
                      ":hover": {
                        backgroundColor: "#ed253a"
                      },
                      [smallScreens]: {
                        width: "40px",
                        height: "40px"
                      }
                    }}
                  />
                </a>
                <a
                  css={{ [smallScreens]: { display: "none" } }}
                  href={url}
                  data-cy={dataCy}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          css={{
            [largeScreens]: { display: "none" },
            [mediumScreens]: { display: "none" }
          }}
        >
          <p
            data-cy="footer-address"
            css={{ ...finePrint, marginBottom: "5px" }}
          >
            Queen&#39;s University | 99 University Ave, Kingston, ON
          </p>
          <a
            data-cy="footer-dev-plug"
            css={{ ...finePrint, fontWeight: "400" }}
            href="https://github.com/qhacks/qhacks-website"
            target="_blank"
            rel="external noopener"
          >
            {"< />"} with ♡ by Queen&#39;s students
          </a>
          <p
            data-cy="footer-copyright-notice"
            css={{ ...finePrint, marginTop: "6px", paddingBottom: "32px" }}
          >
            Copyright © {moment().year()} QHacks
          </p>
        </div>
      </div>
    </ContentWrapper>
  </footer>
);

export default Footer;
