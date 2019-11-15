import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./ContentWrapper";
import PointList from "./PointList.js";
import PointBlurb from "./PointBlurb";
import PointListCompressed from "./PointListCompressed.js";
import PointBlurbCompressed from "./PointBlurbCompressed";

import pascal from "../assets/img/headshots/pascal_siakam.png";


const points = [
  {
    name: "Amy Lu",
    project: "Reeltube",
    projectLink: "https://devpost.com/software/qhacks-v1",
    image: pascal,
    text:
      "In high school, I’d never opened a single computer science course brochure, and now I will be an incoming graduate student in machine learning. QHacks gave me a taster of what tech really was - a creative endeavour with technical tools as the paint brush, and societal-level solution pitching as the frame."
  },
  {
    name:"Matthew",
    title: "Learn Industry Skills from Industry Professionals",
    project:"Qhacks",
    image: pascal,
    text:
      "Learn things you won’t learn in a classroom about the tech industry, founding your own start up, technical interviews and so much more straight from professionals. With over 35 companies in attendance ... "
  },
  {
    name:"Test",
    title: "Test McGee",
    project:"Yeah",
    image: pascal,
    text:
      "This is neato!"
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
      <span css = {{ position: "relative", zIndex: "9999", color:"#ffffffff" }}>
        QHacks has something to offer everyone.
        <br />
        Check out some of the reasons you might want to attend!
      </span>
    );
   
    return (
      <section
        id="points"
        css={{
          background: "00205B",
          backgroundSize: "cover",
          overflowX: "hidden"
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
