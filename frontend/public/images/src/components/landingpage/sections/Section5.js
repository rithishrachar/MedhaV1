import React from "react";

const Section5 = () => {
  return (
    <section
      id="section1"
      style={{
        background: "linear-gradient(to bottom, #0A0A0A, #1E1E1E)", // Dark gradient background
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
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
          width: "90%",
          position: "relative",
        }}
      >
        {/* Header: "Marvel vs DC Fest" */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            textAlign: "center",
            width: "100%",
            fontSize: "2.5rem",
            color: "#FFD700", // Gold accent color
            fontWeight: "bold",
            fontFamily: "'Bangers', cursive", // Comic-style font for Marvel vs DC theme
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(255, 215, 0, 0.5)", // Glow effect
          }}
        >
          <h1>MARVEL VS DC FEST</h1>
        </div>

        {/* Main Content Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "55vh",
            gap: "15px",
          }}
        >
          {/* Left Section: Tagline and Button */}
          <div
            style={{
              width: "40%",
              height: "25vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
              gap: "20px",
            }}
          >
            {/* Tagline */}
            <p
              style={{
                fontSize: "1.2rem",
                color: "#FFFFFF", // Soft white text
                fontFamily: "'Poppins', sans-serif", // Clean sans-serif font
                fontStyle: "italic", // Italicized for sophistication
                lineHeight: "1.5",
                textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)", // Subtle glow
              }}
            >
              Witness the ultimate clash of heroes and villains. Choose your side!
            </p>

            {/* Button */}
            <button
              style={{
                background: "linear-gradient(to right, #ED1D24, #000000)", // Marvel red to black gradient
                color: "#FFFFFF",
                border: "1px solid #FFD700", // Gold border
                borderRadius: "25px",
                padding: "10px 20px",
                fontSize: "1rem",
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "linear-gradient(to right, #000000, #0047AB)"; // DC blue to black gradient
                e.target.style.boxShadow = "0 0 10px rgba(0, 71, 171, 0.5)"; // DC blue glow
              }}
              onMouseOut={(e) => {
                e.target.style.background = "linear-gradient(to right, #ED1D24, #000000)"; // Marvel red to black gradient
                e.target.style.boxShadow = "none";
              }}
            >
             see our team
              <span style={{ fontSize: "1.2rem" }}>⚡</span> {/* Lightning bolt icon */}
            </button>
          </div>

          {/* Right Section: Framed Image */}
          <div
            style={{
              width: "43%",
              height: "35vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              border: "1px solid rgba(255, 215, 0, 0.3)", // Subtle gold border
              overflow: "hidden",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.7)"; // Highlight border on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.3)";
            }}
          >
            <img
              src="images/team2.jpg" // Replace with your image path
              alt="Marvel vs DC Characters"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Gentle zoom effect on hover
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