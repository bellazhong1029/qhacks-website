import React from "react";
import fetch from "unfetch";
import Helmet from "react-helmet";
import Particles from 'react-particles-js';
import backgroundGradient from "../assets/img/backgrounds/backgroundGradient.svg";



import "./index.css";
import Landing from "../components/Landing";
import OpeningSummary from "../components/OpeningSummary";
import SellingPoints from "../components/SellingPoints";
import Speakers from "../components/Speakers";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer"
import favicon from "../assets/img/icons/favicon.ico";
import sharingImage from "../assets/img/logo/sharingImage2020.png";

export default () => {
 
  return (
   
      <div css={{ 
        background: `url(${backgroundGradient}) no-repeat center center`,
        backgroundSize: "cover",
        overflowX: "hidden" }}>
        <Helmet
          title="QHacks | Queen's University | Winter 2020"
          meta={[
            {
              name: "description",
              content:
                "QHacks is Queen’s University’s annual hackathon, happening January 31st - February 2nd, 2020."
            },
            {
              name: "keywords",
              content:
                "Hackathon, Queen's University, Kingston, QHacks, Queensu"
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0"
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:url",
              content: "https://qhacks.io/"
            },
            {
              property: "og:title",
              content: "QHacks | Queen's University | Winter 2020"
            },
            {
              property: "og:image",
              content: sharingImage
            },
            {
              property: "og:description",
              content:
                "QHacks is back for round five! We're bringing in students from all over North America to come together for a wild 36 hours - designing, developing, demoing, cup-stacking, and foosball-playing at our home base at Queen's University. Whether you're a first timer or a seasoned veteran, QHacks definitely has something to satisfy your interests. This weekend is about inclusiveness for all disciplines - students from any level of skill, from any field of study are encouraged to bring their innovative ideas for a weekend of creative problem solving! The only prerequisites for this weekend are a love for tech and drive to learn."
            },
            {
              property: "og:site_name",
              content: "QHacks"
            },
            {
              property: "og:locale",
              content: "en_US"
            }
          ]}
          link={[
            {
              rel: "shortcut icon",
              href: `${favicon}`
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <Landing />
          <OpeningSummary />
          <SellingPoints />
          <Speakers />
          <FAQs />
          <Footer />
       </div>
      </div>
      
  );
};



