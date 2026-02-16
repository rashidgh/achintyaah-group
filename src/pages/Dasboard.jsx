import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarosel";
import AboutUs from "../components/AboutUs";
import ScrollToTop from "../components/ScrollToTop";
import useTheme from "../hooks/useTheme";
import Projects from "../components/OurBusiness";
import Footer from "../components/Footer";
import LeadershipSection from "../components/LeadershipSection";
import ProjectShowcaseSection from "../components/projectSlider/ProjectShowcaseSection";
import CoreValue from "../components/CoreValue";

const Dashboard = () => {
  const [theme, setTheme] = useTheme(); // ✅ SINGLE SOURCE

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${theme === "night"
        ? "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
        : "bg-white text-black"
        }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <HeroCarousel />
      {/* <OurClients theme={theme} /> */}
      <Projects theme={theme} />
      <AboutUs theme={theme} />
      <CoreValue theme={theme} />
      <ProjectShowcaseSection theme={theme} />
      <LeadershipSection theme={theme} />
      <Footer theme={theme} />
      <ScrollToTop theme={theme} />
    </div>
  );
};

export default Dashboard;
