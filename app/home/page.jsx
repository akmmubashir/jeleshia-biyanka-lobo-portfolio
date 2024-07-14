import React from "react";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ExperienceSection from "../components/experienceSection";

const HomePage = () => {
  return (
    <div className="bgColor overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
};

export default HomePage;
