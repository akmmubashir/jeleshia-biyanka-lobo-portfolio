import React from "react";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ExperienceSection from "../components/experienceSection";
import EducationSection from "../components/educationSection";

const HomePage = () => {
  return (
    <div className="bgColor overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default HomePage;
