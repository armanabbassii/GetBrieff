import React from "react";
// import Subscribe from "./EmailBar";
import HeroHome from "./Hero/HeroHome.jsx";
import Footer from "./footer.jsx";
import Appreciation from "./appreciation.jsx";
import Conferences from "./conferences.jsx";
// import Articles from "./Articles.jsx";

function HeroBrief() {
  return (
    <div>
      <HeroHome />
      <Conferences />
      {/* <Articles /> */}
      <Appreciation />
      <Footer />
    </div>
  );
}

export default HeroBrief;
