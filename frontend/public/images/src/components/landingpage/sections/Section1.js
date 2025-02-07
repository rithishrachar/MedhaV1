import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Section1 = () => {
  const titleRef = useRef(null);
  const ironmanRef = useRef(null);
  const batmanRef = useRef(null);

  const targetDate = new Date("2024-12-31T23:59:59").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(titleRef.current, {
      filter: "drop-shadow(0px 0px 15px red) drop-shadow(0px 0px 60px white)",
      repeat: -1,
      yoyo: true,
      duration: 5.5,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      ironmanRef.current,
      { x: "-100%" },
      { x: 0, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      batmanRef.current,
      { x: "100%" },
      { x: 0, duration: 2, ease: "power2.out" }
    );
  }, []);

  const formatTime = ({ days, hours, minutes, seconds }) =>
    `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <section id="section1" style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {/* Background Image */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/images/bg3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(3px)",
        zIndex: -1
      }}></div>

      {/* Title Image */}
      <img
        ref={titleRef}
        src="/images/title.png"
        alt="Medha"
        className="title-image"
      />

      {/* Countdown Timer */}
      <div className="countdown-timer">
        {formatTime(timeRemaining)}
      </div>

      {/* Ironman Image */}
      <img
        ref={ironmanRef}
        src="/images/ironman.jpg"
        alt="Ironman"
        className="ironman-image"
      />

      {/* Batman Image */}
      <img
        ref={batmanRef}
        src="/images/batman.jpg"
        alt="Batman"
        className="batman-image"
      />

      {/* Responsive CSS */}
      <style>
        {`
          /* Default styles for large screens */
          .title-image {
            position: absolute;
            top: -20%;
            left: 13%;
            width: 1100px;
            height: auto;
            object-fit: contain;
          }

          .countdown-timer {
            position: absolute;
            top: 74%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            z-index: 2;
            font-family: 'AvengersFont', sans-serif;
            font-size: 100px;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            background: linear-gradient(to right, red 50%, black 50%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            opacity: 0.9;
          }

          .ironman-image {
            position: absolute;
            top: 1%;
            left: -4%;
            width: 570px;
            height: auto;
            object-fit: contain;
          }

          .batman-image {
            position: absolute;
            top: 3%;
            right: -5%;
            width: 580px;
            height: auto;
            object-fit: contain;
          }

          /* Styles for small screens (phones) */
          @media (max-width: 768px) {
            .title-image {
              top: 10%;
              left: 50%;
              transform: translateX(-50%);
              width: 90%;
              max-width: 500px;
            }

            .countdown-timer {
              top: 50%;
              font-size: 50px;
            }

            .ironman-image {
              top: 10%;
              left: -10%;
              width: 40%;
              max-width: 300px;
            }

            .batman-image {
              top: 10%;
              right: -10%;
              width: 40%;
              max-width: 300px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Section1;