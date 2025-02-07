
import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Section3 = () => {
  const cardsData = [
    // ... (your cardsData array remains the same)
     { id: 1, title: "Event 1", image: "/images/quizz.png", button: "Learn More", marginTop: "50px", marginLeft: "870px", content: "This is content for Event 1", titlePosition: { top: "20px", left: "10px" }, coordinators: [ { name: "John Doe", number: "123-456-7890" }, { name: "Jane Smith", number: "987-654-3210" }, ], }, { id: 2, title: "Event 2", image: "/images/webd.png", button: "Learn More", marginTop: "50px", marginLeft: "370px", content: "This is content for Event 2", titlePosition: { top: "20px", left: "10px" }, coordinators: [ { name: "Alice Johnson", number: "555-555-5555" }, { name: "Bob Brown", number: "444-444-4444" }, ], }, { id: 3, title: "Event 3", image: "/images/baymancode.png", button: "Learn More", marginTop: "400px", marginLeft: "620px", content: "This is content for Event 3", titlePosition: { top: "10px", left: "10px" }, coordinators: [ { name: "Charlie Davis", number: "333-333-3333" }, { name: "Diana Evans", number: "222-222-2222" }, ], }, { id: 4, title: "Event 4", image: "/images/reels.png", button: "Learn More", marginTop: "400px", marginLeft: "170px", content: "This is content for Event 4", titlePosition: { top: "10px", left: "10px" }, coordinators: [ { name: "Ethan Green", number: "111-111-1111" }, { name: "Fiona Harris", number: "999-999-9999" }, ], }, { id: 5, title: "Event 5", image: "/images/productL.png", button: "Learn More", marginTop: "400px", marginLeft: "1070px", content: "This is content for Event 5", titlePosition: { top: "30px", left: "10px" }, coordinators: [ { name: "George King", number: "888-888-8888" }, { name: "Hannah Lee", number: "777-777-7777" }, ], }, { id: 6, title: "Event 6", image: "/images/itmanager1.png", button: "Learn More", marginTop: "745px", marginLeft: "370px", content: "This is content for Event 6", titlePosition: { top: "20px", left: "10px" }, coordinators: [ { name: "Ian Moore", number: "666-666-6666" }, { name: "Jessica Nelson", number: "555-555-5555" }, ], }, { id: 7, title: "Event 7", image: "/images/gaming.png", button: "Learn More", marginTop: "745px", marginLeft: "870px", content: "This is content for Event 7", titlePosition: { top: "20px", left: "10px" }, coordinators: [ { name: "Kevin Parker", number: "444-444-4444" }, { name: "Laura Quinn", number: "333-333-3333" }, ], }, ];

  

  const [isInView, setIsInView] = useState(Array(cardsData.length).fill(false));
  const [activePopup, setActivePopup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
    id="event-section"
      style={{
        backgroundImage: "url('/images/bgf.jpg')",
        color: "white",
        minHeight: isMobile ? "auto" : "190vh",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px rgba(14, 192, 236, 0.7), 0 0 20px rgba(9, 107, 236, 0.7), 0 0 30px rgba(12, 133, 238, 0.7);
            }
            100% {
              box-shadow: 0 0 10px rgba(241, 5, 201, 0.7), 0 0 20px rgba(238, 3, 238, 0.7), 0 0 30px rgba(222, 14, 187, 0.7);
            }
          }
        `}
      </style>

      <h1
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "red",
          fontWeight: "bold",
          fontSize: "55px",
          fontFamily: "'AvengersFont', sans-serif",
          textTransform: "uppercase",
        }}
      >
        Events
      </h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          ...(isMobile && {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }),
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            data-index={index}
            className="card"
            style={{
              backgroundImage: `url(${card.image})`, // Fixed syntax
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "5px solid grey",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              animation: "glow 1.5s infinite alternate",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              opacity: isInView[index] ? 1 : 0,
              transform: isInView[index]
                ? "rotateY(0deg)"
                : isMobile
                ? "translateY(20px)"
                : "rotateY(90deg)",
              transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
              ...(!isMobile && {
                position: "absolute",
                top: card.marginTop,
                left: card.marginLeft,
                height: "335px",
                width: "220px",
              }),
              ...(isMobile && {
                position: "relative",
                width: "85%",
                height: "250px",
                margin: "10px 0",
                transform: isInView[index]
                  ? "translateY(0)"
                  : "translateY(20px)",
              }),
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0, 0, 0, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.3)";
              }
            }}
          >
            <h2
              style={{
                position: "absolute",
                top: card.titlePosition.top,
                left: card.titlePosition.left,
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
                bottom: "10px",
                border: "1px solid white",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
                width: "100px",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => setActivePopup(card.id)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
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
          onClick={() => setActivePopup(null)}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "20px",
              borderRadius: "10px",
              width: isMobile ? "90%" : "70%",
              height: isMobile ? "80%" : "70%",
              color: "black",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
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

            {!isMobile && (
              <>
                
               
              </>
            )}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h2 style={{ marginBottom: "10px" }}>
                {cardsData.find((card) => card.id === activePopup).title}
              </h2>
              <p>{cardsData.find((card) => card.id === activePopup).content}</p>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "20px",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h3>Event Coordinators:</h3>
              {cardsData
                .find((card) => card.id === activePopup)
                .coordinators.map((coordinator, index) => (
                  <div key={index}>
                    <p>
                      {coordinator.name} - {coordinator.number}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Updated "Click here for cultural Events" button */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: isMobile ? "90%" : "600px",
          cursor: "pointer",
          ...(isMobile && {
            position: "relative",
            bottom: "auto",
            left: "auto",
            transform: "none",
            marginTop: "20px", // Adjust this value to create the desired gap
            width: "100%",
            padding: "20px",
          }),
        }}
      >
        <Link
          to="/Cultural" // Use 'to' prop for navigation
          style={{
            display: "block",
            textDecoration: "none",
            color: "white",
            backgroundImage: "url('/images/sec2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            border:"5px solid purple",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
              fontSize: "1.5rem",
              color: "white",
              fontWeight: "bold",
              marginBottom: "10px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Click here for Cultural Events
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Explore our exciting cultural events!
          </p>
        </Link>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .cultural-event-button {
              position: relative;
              bottom: auto;
              left: auto;
              transform: none;
              margin-top: 20px; /* Adjust this value to create the desired gap */
              width: 100%;
              padding: 20px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Section3; // Fixed export statement