import React, { useRef } from "react";

const Section2 = () => {
  const videoRef = useRef(null);

  // Ensure the video always plays and only allows muting/unmuting
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted; // Toggle mute/unmute
    }
  };

  // Prevent pausing the video
  const handleVideoPause = (e) => {
    e.preventDefault();
    const video = videoRef.current;
    if (video) {
      video.play(); // Force the video to continue playing
    }
  };

  return (
    <>
      {/* Add the @font-face definition in a <style> tag */}
      <style>
        {`
          @font-face {
            font-family: 'AvengersFont';
            src: url('/fonts/AVENGEANCE HEROIC AVENGER.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
          /* Cosmic background animation */
          @keyframes cosmicEffect {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 100%;
            }
          }
          .cosmic-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/images/stars.jpg'); /* Background image with stars */
            background-size: 200% 200%;
            background-position: 0 0;
            animation: cosmicEffect 20s infinite linear;
            z-index: 0;
            filter: blur(5px);
          }
          /* Arc Reactor Glow Effect */
          @keyframes arcReactorGlow {
            0% {
              box-shadow: 0 0 20px 10px rgba(0, 123, 255, 0.6);
            }
            50% {
              box-shadow: 0 0 40px 20px rgba(0, 123, 255, 0.8);
            }
            100% {
              box-shadow: 0 0 20px 10px rgba(0, 123, 255, 0.6);
            }
          }
          .arc-reactor {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 123, 255, 0.8), rgba(0, 123, 255, 0.4));
            animation: arcReactorGlow 3s infinite ease-in-out;
            z-index: 1;
          }
          /* Superman Flying Animation */
          @keyframes supermanFlying {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px); /* Move up */
            }
            100% {
              transform: translateY(0);
            }
          }
          .superman-container {
            position: absolute;
            right: 3%;
            bottom: 6%;
            z-index: 2;
            animation: supermanFlying 3s infinite ease-in-out; /* Apply flying animation */
          }
          /* Media Queries for Responsiveness */
          @media (max-width: 768px) {
            .superman-container img {
              width: 150px !important; /* Reduce Superman image size */
              height: auto;
            }
            .superman-container {
              right: 1%; /* Adjust position for smaller screens */
              bottom: 10%;
            }
            /* Left Image */
            div[style*="left: 1%"] img {
              width: 150px !important; /* Reduce left image size */
              height: auto;
            }
            /* Adjust text size and positioning for smaller screens */
            h1 {
              font-size: 40px !important;
            }
            p {
              font-size: 1rem !important;
            }
            /* Adjust the main container for smaller screens */
            div[style*="width: 70%"] {
              width: 90% !important;
              height: 80% !important;
            }
          }
          @media (max-width: 480px) {
            .superman-container img {
              width: 150px !important; /* Further reduce Superman image size */
            }
            div[style*="left: 1%"] img {
              width: 150px !important; /* Further reduce left image size */
            }
            h1 {
              font-size: 30px !important;
            }
            p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
      <section
        id="about-section"
        style={{
          position: "relative",
          backgroundImage: "url('/images/bgf.jpg')", // Updated background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          color: "white",
          display: "flex", // Use Flexbox to divide into two vertical sections
          justifyContent: "space-between", // Space out the two sections
          alignItems: "stretch", // Stretch both sections vertically
        }}
      >
        {/* Left Section - Full Video */}
        <div
          style={{
            flex: 1, // Take up half of the available width
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            controls={false} // Disable default controls
            onClick={handleVideoClick} // Allow muting/unmuting on click
            onPause={handleVideoPause} // Prevent pausing
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the video covers the entire section
            }}
          >
            <source src="/videos/dj1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section - Existing Content */}
        <div
          style={{
            flex: 1, // Take up half of the available width
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* Cosmic Animated Background */}
          <div className="cosmic-background"></div>
          {/* Arc Reactor Glow Effect */}
          <div className="arc-reactor"></div>
          {/* Background Blur */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundImage: "url('/images/bgf.jpg')", // Updated background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
              zIndex: 0,
            }}
          ></div>
          {/* Image Layer with Reduced Opacity */}
          <div
            style={{
              position: "relative",
              width: "70%",
              height: "70%",
              borderRadius: "20px",
              border: "10px solid transparent",
              zIndex: 1,
              overflow: "hidden", // Ensure the pseudo-element stays within the bounds
            }}
          >
            {/* Pseudo-element for the image with reduced opacity */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundImage: "url('/images/sec2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.45, // Reduced opacity for the image only
                zIndex: 1,
              }}
            ></div>
            {/* Text Container (no opacity change) */}
            <div
              style={{
                position: "relative",
                zIndex: 2, // Ensure text is above the image
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                padding: "20px",
              }}
            >
              <div
                style={{
                  maxWidth: "800px",
                  textAlign: "center",
                  color: "white", // Text color remains white
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
                    fontSize: "30px",
                    fontFamily: "'AvengersFont', sans-serif", // Use the custom font here
                    textTransform: "uppercase",
                  }}
                >
                  &nbsp;About &nbsp;&nbsp; Medha
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  Medha is a platform dedicated to empowering students and professionals through skill development and career guidance. Our mission is to bridge the gap between education and employment.
                </p>
              </div>
            </div>
          </div>
          {/* Left Image */}
          <div
            style={{
              position: "absolute",
              left: "10%",
              top: "1%",
              zIndex: 2,
            }}
          >
            <img
              src="/images/capa.png"
              alt="Left Image"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
          {/* Right Image - Superman with Flying Effect */}
          <div className="superman-container">
            <img
              src="/images/superman.png"
              alt="Right Image"
              style={{ width: "150px", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;