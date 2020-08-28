import React from "react";
import Helmet from "react-helmet";

import "./index.css";
import Landing from "../components/Landing";
import OpeningSummary from "../components/OpeningSummary";
import SellingPoints from "../components/SellingPoints";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import favicon from "../assets/img/icons/favicon.ico";
import sharingImage from "../assets/img/logo/sharingImage2021.png";
import MailingListSignup from "../components/MailingListSignup";
import Features from "../components/Features";
import EventSchedule from "../components/EventSchedule";
import ToTopButton from "../components/ToTopButton";

export default () => {
  return (
    <div>
      <Helmet
        title="QHacks | Queen's University | Winter 2021"
        meta={[
          {
            name: "description",
            content:
              "QHacks is Queen’s University’s annual hackathon, happening January 22nd - January 24th, 2021."
          },
          {
            name: "keywords",
            content: "Hackathon, Queen's University, Kingston, QHacks, Queensu"
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
            content: "QHacks | Queen's University | Winter 2021"
          },
          {
            property: "og:image",
            content: sharingImage
          },
          {
            property: "og:description",
            content:
              "QHacks is back for round six - entirely virtually! We’re bringing together students from all over North America for a wild 36 hours - designing, developing, demoing, game-playing, and yoga-doing from our home base at Queen’s University. Whether you’re a first-timer or a seasoned veteran, QHacks has something to satisfy your interests! This weekend is about inclusiveness for all disciplines - students from any level of skill, from any field of study, are encouraged to bring their innovative ideas for a weekend of virtual problem-solving! The only prerequisites for this weekend are a love for tech and drive to learn!"
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
        <MailingListSignup />
        <OpeningSummary />
        <Features />
        <SellingPoints />
        <EventSchedule />
        <Speakers />
        <Sponsors />
        <FAQs />
        <Footer />
        <ToTopButton />
      </div>
    </div>
  );
};
