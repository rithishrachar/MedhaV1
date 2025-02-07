  import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Section5 = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="section1"
      style={{
        background: "linear-gradient(to bottom, #0A0A0A, #1E1E1E)",
        height: isMobile ? "auto" : "80vh",
        minHeight: isMobile ? "100svh" : "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "2rem 0" : 0,
      }}
    >
      {/* Blur effect for top and bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3vh",
          background: "rgba(14, 0, 0, 0.93)",
          filter: "blur(5px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3vh",
          background: "rgba(18, 1, 2, 1)",
          filter: "blur(5px)",
        }}
      ></div>

      {/* Main Content Container */}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: isMobile ? "95%" : "90%",
          position: "relative",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "2rem" : 0,
        }}
      >
        {/* Header: "Marvel vs DC Fest" */}
        <div
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? 0 : "10px",
            textAlign: "center",
            width: "100%",
            fontSize: isMobile ? "1.8rem" : "2.5rem",
            color: "red",
            fontWeight: "bold",
            fontFamily: "'Bangers', cursive",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(255, 215, 0, 0.5)",
            marginBottom: isMobile ? "1rem" : 0,
          }}
        >
          <h1 
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "red", // Updated text color to white
            fontWeight: "bold",
            fontSize: "55px",
            fontFamily: "'AvengersFont', sans-serif", // Use the custom font here
            textTransform: "uppercase",
          }}>MEDHA &nbsp;TEAM </h1>
        </div>

        {/* Main Content Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: isMobile ? "auto" : "55vh",
            gap: "15px",
            flexDirection: isMobile ? "column-reverse" : "row",
          }}
        >
          {/* Left Section: Tagline and Button */}
          <div
            style={{
              width: isMobile ? "100%" : "40%",
              height: isMobile ? "auto" : "25vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: isMobile ? "center" : "flex-start",
              textAlign: isMobile ? "center" : "left",
              gap: "20px",
            }}
          >
            {/* Tagline */}
            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                fontStyle: "italic",
                lineHeight: "1.5",
                textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)",
                maxWidth: "600px",
              }}
            >
              Witness the ultimate clash of heroes and villains. Choose your side!
            </p>

            {/* Button with navigation */}
            <button
              style={{
                background: "linear-gradient(to right, #ED1D24, #000000)",
                color: "#FFFFFF",
                border: "1px solid #FFD700",
                borderRadius: "25px",
                padding: isMobile ? "8px 16px" : "10px 20px",
                fontSize: isMobile ? "0.9rem" : "1rem",
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: isMobile ? "100%" : "auto",
              }}
              onClick={() => navigate('/team')}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(to right, #000000, #0047AB)";
                e.target.style.boxShadow = "0 0 10px rgba(0, 71, 171, 0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(to right, #ED1D24, #000000)";
                e.target.style.boxShadow = "none";
              }}
            >
              see our team
              <span style={{ fontSize: "1.2rem" }}>⚡</span>
            </button>
          </div>

          {/* Right Section: Framed Image */}
          <div
            style={{
              width: isMobile ? "100%" : "43%",
              height: isMobile ? "35vh" : "35vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              border: "1px solid rgba(255, 215, 0, 0.3)",
              overflow: "hidden",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.7)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.3)";
            }}
          >
            <img
              src="images/team2.jpg"
              alt="Marvel vs DC Characters"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;