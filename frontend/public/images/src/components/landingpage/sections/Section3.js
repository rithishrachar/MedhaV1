import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome

const Section3 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Event 1",
      image: "/images/quizz.png",
      button: "Learn More",
      marginTop: "50px",
      marginLeft: "870px",
      content: "This is content for Event 1", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
    },
    {
      id: 2,
      title: "Event 2",
      image: "/images/webd.png",
      button: "Learn More",
      marginTop: "50px",
      marginLeft: "370px",
      content: "This is content for Event 2", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
    },
    {
      id: 3,
      title: "Event 3",
      image: "/images/baymancode.png",
      button: "Learn More",
      marginTop: "380px",
      marginLeft: "620px",
      content: "This is content for Event 3", // Popup content
      titlePosition: { top: "10px", left: "10px" }, // Custom position for title
    },
    {
      id: 4,
      title: "Event 4",
      image: "/images/reels.png",
      button: "Learn More",
      marginTop: "380px",
      marginLeft: "170px",
      content: "This is content for Event 4", // Popup content
      titlePosition: { top: "10px", left: "10px" }, // Custom position for title
    },
    {
      id: 5,
      title: "Event 5",
      image: "/images/productL.png",
      button: "Learn More",
      marginTop: "380px",
      marginLeft: "1070px",
      content: "This is content for Event 5", // Popup content
      titlePosition: { top: "30px", left: "10px" }, // Custom position for title
    },
    {
      id: 6,
      title: "Event 6",
      image: "/images/itmanager1.png",
      button: "Learn More",
      marginTop: "710px",
      marginLeft: "370px",
      content: "This is content for Event 6", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
    },
    {
      id: 7,
      title: "Event 7",
      image: "/images/gaming.png",
      button: "Learn More",
      marginTop: "710px",
      marginLeft: "870px",
      content: "This is content for Event 7", // Popup content
      titlePosition: { top: "20px", left: "10px" }, // Custom position for title
    },
  ];

  const [isInView, setIsInView] = useState(Array(cardsData.length).fill(false));
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setIsInView((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url('/images/bgf.jpg')",
        color: "white",
        minHeight: "190vh",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          marginBottom: "12px",
          color: "white",
          fontFamily: "'DcFandom', sans-serif",
        }}
      >
        Events
      </h1>

      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            data-index={index}
            className="card"
            style={{
              position: "absolute",
              top: card.marginTop,
              left: card.marginLeft,
              backgroundImage: `url('${card.image}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "5px solid grey",
              borderRadius: "10px",
              padding: "15px",
              height: "335px",
              width: "220px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              animation: "glow 1.5s infinite alternate",
              opacity: isInView[index] ? 1 : 0,
              transform: isInView[index] ? "rotateY(0deg)" : "rotateY(90deg)",
              transition:
                "transform 0.6s ease-in-out, opacity 0.6s ease-in-out, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
            }}
          >
            <h2
              style={{
                position: "absolute", // Position the title absolutely within the card
                top: card.titlePosition.top, // Custom top positioning
                left: card.titlePosition.left, // Custom left positioning
                fontSize: "1.2rem",
                color: "gold",
                marginBottom: "10px",
                fontFamily: "'DcFandom', sans-serif",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {card.title}
            </h2>
            <button
              style={{
                position: "absolute",
                bottom: "10px", // Position button at the bottom of the card
                border: "1px solid white",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
                width: "100px",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => setActivePopup(card.id)} // Set active popup
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 0, 0, 0.3)"; // Slight red color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"; // Reset to transparent
              }}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>

      {/* Popup for each card */}
      {activePopup && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
          onClick={() => setActivePopup(null)} // Close popup on click outside
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparent white background
              padding: "20px",
              borderRadius: "10px",
              width: "70%", // 70% width of screen
              height: "70%", // 70% height of screen
              color: "black",
              maxHeight: "80vh", // Prevent popup from being too tall
              overflowY: "auto", // Enable scrolling if content overflows
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing on popup content click
          >
            {/* Close icon */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "30px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => setActivePopup(null)}
            >
              &times;
            </div>
            <h2>{cardsData.find((card) => card.id === activePopup).title}</h2>
            <p>{cardsData.find((card) => card.id === activePopup).content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section3;
