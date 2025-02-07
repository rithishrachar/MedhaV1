import React, { useState } from "react";

const media = [
  { type: "image", src: "https://th.bing.com/th?id=OIP.boKSNbj7RH49rDoexAGv2AHaLY&w=201&h=309&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { type: "image", src: "https://th.bing.com/th?id=OIP.PvTnK77emL8gBtJPUi7rSAHaNL&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
  { type: "image", src: "https://th.bing.com/th/id/OIP.R2mjn-0G05l_5L6vfNjBuwHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { type: "image", src: "https://th.bing.com/th/id/OIP.5SWtr9ui3KUemmOBO9D3zwHaHc?w=149&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#111",
        position: "relative",
      }}
    >
      <button
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          background: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={goToPrevious}
      >
        &#10094;
      </button>

      <div
        style={{
          width: "90vw",
          maxWidth: "400px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {media[currentIndex].type === "image" ? (
          <img
            src={media[currentIndex].src}
            alt={`carousel-item-${currentIndex}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              objectFit: "cover",
            }}
          />
        ) : (
          <video
            src={media[currentIndex].src}
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              objectFit: "cover",
            }}
          />
        )}
      </div>

      <button
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          background: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;