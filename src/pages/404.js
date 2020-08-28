import React from "react";

import "./index.css";
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import ActionButton from "../components/ActionButton";
import notFoundImg from "../assets/img/icons/404.svg";

export default () => (
  <div
    css={{
      backgroundColor: "#f8f8f8",
      minHeight: "100vh",
      bottomMargin: "20px"
    }}
  >
    {/* <Header standaloneVersion={true} /> */}
    <section
      css={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
      }}
    >
      <ContentWrapper>
        <div
          css={{
            paddingTop: "200px"
          }}
        >
          <img
            src={notFoundImg}
            css={{
              width: "650px",
              "@media(max-width: 1450px)": {
                width: "450px"
              },
              "@media(max-width: 680px)": {
                width: "400px"
              },
              "@media(max-width: 460px)": {
                width: "250px"
              }
            }}
            data-cy="test-sponsor-image"
            alt="Tucows Logo"
          />
          <h1
            css={{
              fontSize: "44px",
              marginBottom: "20px",
              fontWeight: "700",
              "@media(max-width: 1450px)": {
                fontSize: "38px"
              }
            }}
          >
            Oops!
          </h1>
          <p
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginBottom: "30px",
              "@media(max-width: 1450px)": {
                fontSize: "20px"
              }
            }}
          >
            The webpage you are looking for is not here!
          </p>
          <ActionButton
            dataCy="404-button"
            backgroundColor="#f8f8f8"
            foregroundColor="#00205b"
            link="https://qhacks.io/"
            type="rounded"
            target="_self"
          >
            Go Back
          </ActionButton>
        </div>
      </ContentWrapper>
    </section>
  </div>
);
