import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./ContentWrapper";
import PointList from "./PointList.js";
import PointBlurb from "./PointBlurb";
import PointListCompressed from "./PointListCompressed.js";
import PointBlurbCompressed from "./PointBlurbCompressed";

import jacobLaframboise from "../assets/img/headshots/jacobLaframboise.jpg";
import amyLu from "../assets/img/headshots/amyLu.png";
import cooperLeong from "../assets/img/headshots/cooperLeong.png";


const points = [
  {
    name: "Amy Lu",
    project: "Reeltube",
    projectLink: "https://devpost.com/software/qhacks-v1",
    image: amyLu,
    text:
      "In high school, I’d never opened a single computer science course brochure, and now I will be an incoming graduate student in machine learning. QHacks gave me a taster of what tech really was - a creative endeavour with technical tools as the paint brush, and societal-level solution pitching as the frame."
  },
  {
    name: "Cooper Leong",
    project: "ESPECT",
    projectLink: "https://devpost.com/software/espect",
    image: cooperLeong,
    text:
      "Events such as QHacks have allowed me to delve into topics without fear. I used to find it time consuming and intimidating to learn enough to feel confident about a topic, but now I can tackle it head on. It has been just under a year since my first hackathon, and I can say that it has changed my life for the best, and I look forward to participating in many more!"
  },
  {
    name: "Jacob Laframboise",
    project: "Spoiler No Spoiling!",
    projectLink: "https://devpost.com/software/qhacks-zgmlxr",
    image: jacobLaframboise,
    text:
      "QHacks was an exciting environment to learn and code in, and I really enjoyed the challenge. The sponsors were really cool and the event was a lot of fun!"
  }
];

class SellingPoints extends Component {
  state = {
    currentPoint: 0
  };

  nextPoint() {
    this.setState({
      currentPoint: Math.min(
        this.state.currentPoint + 1,
        points.length - 1
      )
    });
  }

  prevPoint() {
    this.setState({
      currentPoint: Math.max(this.state.currentPoint - 1, 0)
    });
  }

  render() {

    const blurb = (
      <span css={{ color: "#000000" }}>
        QHacks has something to offer everyone.
        <br />
        Check out what some past hackers have to say about the event!
      </span>
    );

    return (
      <section
        id="testimonials"
        css={{
          "@media(max-width:1000px)": {
            paddingTop: "50px",
            paddingBottom: "60px",
            overflowX: "hidden",
            overflowY: "hidden"
          }
        }}
      >
        <ContentWrapper>
          <MediaQuery query="screen and (min-width: 1000px)">
            <div
              css={{
                height: "575px",
                position: "relative"
              }}
            >
              <PointBlurb
                nextPoint={() => this.nextPoint()}
                prevPoint={() => this.prevPoint()}
                firstPoint={!this.state.currentPoint}
                lastPoint={
                  this.state.currentPoint === points.length - 1
                }
                text={blurb}
              />
              <PointList
                currentPoint={this.state.currentPoint}
                points={points}
              />
            </div>
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 1000px)">
            <div css={{ margin: "0 0 80px 0" }}>
              <PointBlurbCompressed text={blurb} />
              <PointListCompressed
                currentPoint={this.state.currentPoint}
                points={points}
              />
            </div>
          </MediaQuery>
        </ContentWrapper>
      </section>
    );
  }
}

export default SellingPoints;
