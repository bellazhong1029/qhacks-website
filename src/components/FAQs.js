import React from "react";
import ContentWrapper from "./ContentWrapper";

const linkCss = {
  position: "relative",
  textDecoration: "underline",
  color: "#00205B",
  fontWeight: 500
};

const questionsAndAnswers = [
  {
    question: "Will QHacks 2021 be in-person or virtual?",
    answer:
      "QHacks 2021 will be a virtual event! Who doesn’t want to hack from bed?!"
  },
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon is a sprint-like competition where people from a variety of backgrounds come together to collaborate on software and hardware projects!"
  },
  {
    question: "Who is invited?",
    answer:
      "Any college or university student at any skill level! All you need is a passion for tech/data/design and a willingness to learn! We welcome applicants from all fields of study."
  },
  {
    question: "Where is it?",
    answer: (
      <span>
        QHacks is entirely virtual! Follow our{" "}
        <a
          css={linkCss}
          href="https://linktr.ee/QHacks"
          rel="social media links"
          target="_blank"
        >
          social media{" "}
        </a>
        for announcements!
      </span>
    )
  },
  {
    question: "How much does it cost to attend?",
    answer: "Absolutely nothing! Not one penny. (Remember those?)"
  },
  {
    question: "What if I don’t have a team?",
    answer:
      "Not to worry! We'll have a team-formation session prior to the hackathon for you to find people you’d like to work with. There will be plenty of other people in the same situation, and we’ll have you up and running in no time!"
  },
  {
    question: "Can I work on a past project?",
    answer: "No. All projects must be started from scratch at the event."
  },
  {
    question: "Is there a Code of Conduct?",
    answer: (
      <span>
        Yes! Hackers are expected to adhere to the{" "}
        <a
          css={linkCss}
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          rel="external noopener"
          target="_blank"
        >
          Major League Hacking Code of Conduct.
        </a>
      </span>
    )
  },
  {
    question: "How do I apply?",
    answer: (
      <span>
        Follow our{" "}
        <a
          css={linkCss}
          href="https://linktr.ee/QHacks"
          rel="social media links"
          target="_blank"
        >
          social media{" "}
        </a>
        and check back here to see when applications will be released! Remember,
        you don't need to be an expert hacker or to have been to a hackathon
        before - we just want to see what makes you creative and unique!
      </span>
    )
  },
  {
    question: "Have additional questions?",
    answer: (
      <span>
        Feel free to reach out to us at{" "}
        <a
          rel="external noopener"
          target="_blank"
          css={linkCss}
          href="mailto:hello@qhacks.io"
        >
          hello@qhacks.io
        </a>{" "}
        or on our{" "}
        <a
          css={linkCss}
          href="https://linktr.ee/QHacks"
          rel="social media links"
          target="_blank"
        >
          social media{" "}
        </a>
        direct messages!
      </span>
    )
  }
];

const FAQs = () => (
  <section
    id="faq"
    css={{
      // backgroundImage:
      //   "linear-gradient(to left, rgba(248,248,248,0), rgba(248,248,248,1))",
      background: "rgba(248, 248, 248, 1)",
      padding: "60px 0 0 0"
    }}
  >
    <ContentWrapper>
      <div
        css={{
          color: "#000000",
          padding: "0px 0 114px 0",
          "@media(max-width: 780px)": {
            padding: "0 0 120px 0",
            position: "relative",
            zIndex: "2"
          }
        }}
      >
        <h1>Frequently Asked Questions</h1>
        <div
          css={{
            paddingTop: "36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media(max-width: 1000px)": {
              display: "block"
            }
          }}
        >
          {questionsAndAnswers.map(({ question, answer }) => (
            <div
              key={question}
              css={{
                padding: "0px 64px 40px 0px",
                "@media(max-width: 780px)": {
                  paddingRight: "24px"
                }
              }}
            >
              <h2
                css={{
                  paddingBottom: "10px",
                  fontWeight: "500"
                }}
              >
                {question}
              </h2>
              <p css={{ fontSize: "14px", lineHeight: "20px" }}>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default FAQs;
