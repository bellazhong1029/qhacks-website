import React, { Component } from "react";
import MediaQuery from "react-responsive";
import PointList from "./PointList.js";
import PointBlurb from "./PointBlurb";
import PointListCompressed from "./PointListCompressed.js";
import PointBlurbCompressed from "./PointBlurbCompressed";

import ContentWrapper from "./ContentWrapper";

const points = [
  {
    name:"Matthew",
    project:"Qhacks",
    title: "Celebrate Diversity and Sustainability",
    image: "../img/logos/qhacksAppIcon.png",
    text:
      "This year we celebrate all the different people and things that make tech great! As we move forward, we have to use our abilities to make the world a better place for everyone who lives in it. That’s why this year we have chosen to promote diversity and sustainability by including speakers, mentors and workshops of all different backgrounds and making our event zero waste. "
  },
  {
    name:"Matthew",
    title: "Learn Industry Skills from Industry Professionals",
    project:"Qhacks",
    image: "../img/logos/qhacksAppIcon.png",
    text:
      "Learn things you won’t learn in a classroom about the tech industry, founding your own start up, technical interviews and so much more straight from professionals. With over 35 companies in attendance ... "
  }
//   {
//     title: " ",
//     // image: 
//     text:
//       " "
//   }
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
      <span css = {{color:"#ffffffff"}}>
        QHacks has something to offer everyone.
        <br />
        Check out some of the reasons you might want to attend!
      </span>
    );
   
    return (
      <section
        id="points"
        css={{
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
