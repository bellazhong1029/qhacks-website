import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import qicLogo from "../assets/img/sponsors/qic.svg";
import eceLogo from "../assets/img/sponsors/ece.svg";
import mmieLogo from "../assets/img/sponsors/mmie.svg";
import mlhLogo from "../assets/img/sponsors/mlhText.svg";
import githubLogo from "../assets/img/sponsors/github.svg";
import sodexoLogo from "../assets/img/sponsors/sodexo.svg";
import pccLogo from "../assets/img/sponsors/pcc.png";
import kingstonLogo from "../assets/img/sponsors/kingston.svg";
import bloombergLogo from "../assets/img/sponsors/bloomberg.svg";
import stickermuleLogo from "../assets/img/sponsors/stickermule.svg";
import schoolOfComputingLogo from "../assets/img/sponsors/schoolOfComputing.svg";
import asusAmsEngSocLogo from "../assets/img/sponsors/asusAmsEngSoc.png";

const Sponsors = () => (
  <section
    id="sponsors"
    css={{
      position: "relative",
      zIndex: "9999",
      paddingBottom: "60px",
      color: "#FFFFFF",
      opacity: "1",
      "img": {
        transition: "0.3s",
        ":hover": {
          transform: "scale(1.1)"
        }
      }
    }}
  >
    <ContentWrapper>
      <div
        css={{
          position: "relative",
          zIndex: "9999",
          background: "#ffffff",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          paddingTop: "0px",
          paddingBottom: "0.5px"
        }}
      >
        {/* Sponsors */}
        {/* <div>
        <h1>Sponsors</h1>
        </div> */}

        {/* Partners */}

        <div
          css={{
            position: "relative",
            zIndex: "9999",
            paddingTop: "70px",
            paddingBottom: "70px"
          }}
        >
          <h1 css={{ paddingBottom: "40px" }}>Our Partners</h1>
          <p
            css={{
              position: "relative",
              zIndex: "9999",
              fontWeight: "bold",
              color: "#000000",
              paddingBottom: "24px",
              ">a": {
                color: "#c81c2e",
                textDecoration: "underline",
                ":hover": { textDecoration: "none" }
              }
            }}
          >
            Interested in partnering? Contact us at{" "}
            <a
              data-cy="partners-email-prompt"
              href="mailto:partnership@qhacks.io"
              css={{
                zIndex: "9999",
                fontSize: "16px",
                fontWeight: "bold"
              }}
            >
              partnership@qhacks.io
            </a>
          </p>
          {/* <ActionButton
            backgroundColor="#f8f8f8"
            foregroundColor="#c81c2e"
            type="rounded"
            link="https://qhacks.nyc3.cdn.digitaloceanspaces.com/documents/QHacksPartnershipPackage.pdf"
          >
            Partnership Package
          </ActionButton> */}
        </div>

        {/* School */}
        <div
          css={{
            zIndex: "9999",
            marginBottom: "100px"
          }}
        >
          {/* School Row 1 */}
          <div
            css={{
              zIndex: "9999",
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "25px"
            }}
          >
            <SponsorLink url="https://www.ece.queensu.ca">
              <img
                src={eceLogo}
                css={{
                  zIndex: "9999",
                  width: "200px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="ECE Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 2 */}
          <div
            css={{
              zIndex: "9999",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="http://www.cs.queensu.ca">
              <img
                src={schoolOfComputingLogo}
                alt="Queen's School of Computing"
                css={{
                  zIndex: "9999",
                  marginTop: "20px",
                  width: "400px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
              />
            </SponsorLink>
            {/*asusAmsEngSocLogo*/}
            <SponsorLink url="https://www.queensu.ca/">
              <img
                src={asusAmsEngSocLogo}
                alt="AMS, ASUS, and EngSoc"
                css={{
                  width: "280px",
                  marginTop: "20px",
                  "@media(max-width: 980px)": {
                    width: "200px"
                  },
                  "@media(max-width: 680px)": {
                    width: "150px"
                  },
                  "@media(max-width: 820px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
              />
            </SponsorLink>
          </div>

          {/* School Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://smith.queensu.ca/grad_studies/mei">
              <img
                src={mmieLogo}
                css={{
                  width: "400px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
                alt="MMIE Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://queensu.ca/innovationcentre">
              <img
                src={qicLogo}
                css={{
                  width: "400px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
                alt="QIC Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 4 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://dining.queensu.ca">
              <img
                src={sodexoLogo}
                css={{
                  width: "350px",
                  "@media(max-width: 980px)": {
                    width: "290px"
                  },
                  "@media(max-width: 680px)": {
                    width: "230px"
                  },
                  "@media(max-width: 460px)": {
                    width: "210px"
                  }
                }}
                alt="Sodexo and Coca-Cola Logo"
              />
            </SponsorLink>
            <SponsorLink url="http://thepcc.net">
              <img
                src={pccLogo}
                css={{
                  width: "230px",
                  "@media(max-width: 980px)": {
                    width: "190px"
                  },
                  "@media(max-width: 680px)": {
                    width: "130px"
                  },
                  "@media(max-width: 820px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
                alt="P&CC Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 5 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://www.cityofkingston.ca/city-hall/projects-construction/mayors-innovation-challenge">
              <img
                src={kingstonLogo}
                css={{
                  width: "180px",
                  "@media(max-width: 980px)": {
                    width: "150px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "100px"
                  }
                }}
                alt="City of Kingston Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 6 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://www.bloomberg.com/canada">
              <img
                src={bloombergLogo}
                css={{
                  width: "200px",
                  marginTop: "30px",
                  "@media(max-width: 980px)": {
                    width: "180px"
                  },
                  "@media(max-width: 680px)": {
                    width: "160px",
                    marginBottom: "10px"
                  },
                  "@media(max-width: 460px)": {
                    width: "130px"
                  }
                }}
                alt="Bloomberg Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://www.stickermule.com/ca">
              <img
                src={stickermuleLogo}
                css={{
                  width: "150px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="Stickermule Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://education.github.com/pack">
              <img
                src={githubLogo}
                css={{
                  width: "150px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="GitHub Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 6 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr"
            }}
          >
            <SponsorLink url="https://mlh.io">
              <img
                src={mlhLogo}
                css={{
                  width: "150px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="MLH Logo"
              />
            </SponsorLink>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
