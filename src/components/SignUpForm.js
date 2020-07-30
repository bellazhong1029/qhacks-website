import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import ActionButton from "../components/ActionButton";
import spinner from "../assets/img/icons/spinner-white.svg";
import circleCheck from "../assets/img/icons/circleSuccess-white.svg";
import circleTimes from "../assets/img/icons/circleError-white.svg";

const SignUpForm = (props) => {
  const [state, setState] = useState({
    email: "",
    result: null,
    message: null,
    boldMessage: ""
  });

  const setresultSuccess = (email) => {
    setState({
      result: "success",
      boldMessage: email,
      message: "has been added to our mailing list!"
    });
    setTimeout(() => resetresult(), 3500);
  };

  const setresultFailure = (errorMsg) => {
    setState({
      result: "failure",
      boldMessage: errorMsg,
      message: ""
    });
    setTimeout(() => resetresult(), 5000);
  };

  const setresultLoading = () => {
    setState({ result: "loading", message: "", boldMessage: "" });
  };

  const resetresult = () => {
    setState({ email: "", result: null, message: "", boldMessage: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setresultLoading();
    const email = state.email;

    addToMailchimp(email)
      .then(({ msg, result }) => {
        console.log(`${result}: ${msg}`);
        if (result === "success") {
          return setresultSuccess(email);
        }
        if (result !== "success") {
          throw msg;
        }
        return setresultFailure(
          "Something went wrong - please try again later."
        );
      })
      .catch((err) => {
        if (err === "The email you entered is not valid.") {
          return setresultFailure(
            "The email you entered is not valid or Try to disable any tracker-blocking feature and resubmit."
          );
        }
        else if (err.includes("is already subscribed")) {
          return setresultFailure(
            "This email address has already been added to our mailing list."
          );
        }
        else {
          return setresultFailure(
            "Something went wrong - please try again later."
          );
        }
      });
  };

  const handleChange = (event) => {
    setState({ email: event.target.value });
  };

  let buttonContent = "";
  switch (state.result) {
    case "loading": {
      buttonContent = (
        <img
          src={spinner}
          css={{
            animation: "spin 2s infinite linear"
          }}
          alt="loading icon"
        />
      );
      break;
    }
    case "success": {
      buttonContent = <img src={circleCheck} alt="success icon" />;
      break;
    }
    case "failure": {
      buttonContent = <img src={circleTimes} alt="fail icon" />;
      break;
    }
    default: {
      buttonContent = "Sign Up";
      break;
    }
  }

  let backgroundColor = "";
  if (state.result === "success") {
    backgroundColor = "#009000";
  } else if (state.result === "failure") {
    backgroundColor = "#FF9F00";
  } else {
    backgroundColor = props.btnBackgroundColor;
  }

  return (
    <div>
      <form
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <input
          type="email"
          placeholder="Please enter your email address"
          css={{
            flexGrow: 2,
            padding: "0 16px",
            height: "48px",
            lineHeight: "48px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            margin: "4px",
            marginRight: "10px",
            ":hover": {
              backgroundColor: "#F0F0F0"
            }
          }}
          onChange={handleChange}
        />
        <ActionButton
          backgroundColor={backgroundColor}
          foregroundColor={props.btnColor}
          hoverBackgroundColor={props.btnHoverBackgroundColor}
          hoverForegroundColor={props.btnHoverColor}
          type="rect"
          css={{
            margin: "4px"
          }}
          disabled={!!state.result}
          data-cy={props.dataCyButton || "signup-button"}
          onClick={handleSubmit}
        >
          {buttonContent}
        </ActionButton>
      </form>
      <p
        css={{
          marginTop: "8px",
          height: "22px",
          fontWeight: "500",
          lineHeight: "22px",
          wordWrap: "break-word"
        }}
      >
        {state.boldMessage ? (
          <strong>
            {state.boldMessage}
            &nbsp;
          </strong>
        ) : (
            ""
          )}
        {state.message}
      </p>
    </div>
  );
};

export default SignUpForm;
