import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Example background color
        color: "white",
        padding: "20px 40px", // Increased padding to make navbar bigger
        zIndex: 1000, // Ensure the navbar is above other content
        display: "flex",
        justifyContent: "space-between", // Space between logo and links
        alignItems: "center", // Vertically center the content
        height: "80px", // Increased height to make navbar bigger
        fontFamily: "sans-serif", // Use a better font
      }}
    >
      {/* Logo on the left */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/logo.png" // Path to your logo
          alt="College Logo"
          style={{
            height: "90px", // Adjust the height of the logo
            width: "auto", // Maintain aspect ratio
            marginRight: "20px", // Add space between logo and links
          }}
        />
      </div>

      {/* Links on the right */}
      <div
        style={{
          display: "flex",
          overflowX: "auto", // Enable horizontal scrolling
          whiteSpace: "nowrap", // Prevent text wrapping
          gap: "30px", // Space between links
          alignItems: "center", // Vertically center the links
          paddingRight: "50px", // Add gap on the right side
        }}
      >
        <a
          href="#section1"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500", // Slightly bold
            transition: "color 0.3s ease", // Smooth hover effect
          }}
          onMouseOver={(e) => (e.target.style.color = "#ffcc00")} // Hover color
          onMouseOut={(e) => (e.target.style.color = "white")} // Default color
        >
          HOME
        </a>
        <a
          href="#section2"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#ffcc00")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          EVENT
        </a>
        <a
          href="#section3"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#ffcc00")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          TEAM
        </a>
        <a
          href="#section4"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#ffcc00")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          ABOUT 
        </a>
        {/* Register Button */}
        <button
          style={{
            background: "linear-gradient(45deg, #ff0000, #000000)", // Red to black gradient
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "opacity 0.3s ease", // Smooth hover effect
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.8")} // Hover effect
          onMouseOut={(e) => (e.target.style.opacity = "1")} // Default state
        >
          REGISTER
        </button>
      </div>
    </nav>
  );
};

export default Navbar;