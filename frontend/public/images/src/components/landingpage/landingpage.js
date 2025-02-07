import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";


const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/your-background-image.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Ensures the background stays fixed while scrolling
        position: "relative",
        overflow: "hidden", // To ensure background doesn't overflow
      }}
    >
      <Navbar /> {/* Use the Navbar component here */}
      <Section1 id="section1" />
      <Section2 id="section2" />
      <Section3 id="section3" />
      <Section4 id="section4" />
      <Section5 id="section5" />
      <Section7 id="section7" />
      <Section6 id="section6" />
    </div>
  );
};

export default LandingPage;