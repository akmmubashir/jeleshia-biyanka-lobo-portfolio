import React from "react";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ExperienceSection from "../components/experienceSection";
import EducationSection from "../components/educationSection";
import SkillsSection from "../components/skillsSection";
import ContactSection from "../components/contact";
import Footer from "../components/footer";
import { fetchEducationData, fetchProfileData, fetchSkillsData, fetchContactData } from "../utils/utilsService";

export default async function HomePage() {
  const educationData = await fetchEducationData();
  const profileData = await fetchProfileData();
  const skillsData = await fetchSkillsData();
  const contactData = await fetchContactData();

  return (
    <div className="bg-[#2a2a2a] overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection data={educationData} />
      <SkillsSection data={skillsData} />
      <ContactSection data={contactData} />
      <Footer />
    </div>
  );
}
