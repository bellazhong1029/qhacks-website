import React from "react";

import menuClose from "../assets/img/icons/mobileMenuClose.svg";
import hamburger from "../assets/img/icons/mobileMenuOpen.svg";
import crown from "../assets/img/logo/qhacksCrown-colored.svg";
import waveLineBlack from "../assets/img/backgrounds/waveLineBlack.png";

const MobileMenu = (props) => (
  <div
    css={{
      height: "50px",
      width: "100%",
      padding: "15px",
      "@media(min-width: 820px)": {
        display: "none"
      }
    }}
  >
    <input type="image" align="left" src={crown} css={{ width: "48px" }} />
    <input
      type="image"
      align="right"
      onClick={props.toggleMenu}
      src={hamburger}
      css={{ width: "32px", height: "24px" }}
      alt="Open menu"
    />
    <div
      className={props.isMenuVisible ? "no-scroll" : ""}
      css={{
        display: props.isMenuVisible ? "block" : "none",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        top: "0px",
        left: "0px",
        backgroundColor: "#FBFBFB"
      }}
    >
      <div
        css={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          top: "0px",
          left: "0px",
          background: `url(${waveLineBlack}) no-repeat center bottom`
        }}
      >
        <input
          type="image"
          align="right"
          css={{ padding: "32px" }}
          src={menuClose}
          onClick={props.toggleMenu}
          alt="Close menu"
        />
        <div
          css={{
            marginTop: "100px",
            display: "grid",
            gridTemplateColumns: "1fr"
          }}
        >
          <div
            css={{
              margin: "15px auto",
              textAlign: "center"
            }}
          >
            <img
              src={crown}
              css={{ width: "150px", paddingBottom: "20px" }}
              alt="QHacks Crown"
            />
            {props.menuItems.map((i) => (
              <div key={i} css={{ paddingBottom: "24px" }}>
                <a
                  href={`#${i}`}
                  onClick={props.toggleMenu}
                  css={{
                    fontSize: "20px",
                    fontWeight: "550",
                    color: "#000000",
                    textTransform: "uppercase"
                  }}
                >
                  {i}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;
