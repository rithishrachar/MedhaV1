import React, { useState, useEffect } from 'react';
import './SliderDemo.css'; // Import the CSS file

const SliderDemo = () => {
  const [active, setActive] = useState(0);

  const items = [
    {
      id: 2,
      backgroundImage: "url('./images/g1.jpg')",
      content: <h1></h1>,
    },
    {
      id: 3,
      backgroundImage: "url('./images/g.jpg')",
      content: (
        <video width="100%" height="100%" controls>
          <source src="video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      id: 4,
      backgroundImage: "url('./images/g3.jpg')",
      content: <h1></h1>,
    },
    {
      id: 5,
      backgroundImage: "url('./images/g4.jpg')",
      content: <h1></h1>,
    },
    {
      id: 6,
      backgroundImage: "url('./images/g5.jpg')",
    },
    {
      id: 7,
      backgroundImage: "url('./images/g6.jpg')",
    },
    {
      id: 8,
      backgroundImage: "url('./images/g7.jpg')",
    },
    {
      id: 9,
      backgroundImage: "url('./images/g8.jpg')",
    },
    {
      id: 10,
      backgroundImage: "url('./images/g9.jpg')",
    },
    {
      id: 11,
      backgroundImage: "url('./images/g10.jpg')",
    },
    {
      id: 12,
      backgroundImage: "url('./images/g11.jpg')",
    },
    {
      id: 13,
      backgroundImage: "url('./images/g12.jpg')",
    },
  ];

  const loadShow = () => {
    items.forEach((item, index) => {
      const element = document.getElementById(`item-${item.id}`);
      if (element) {
        if (index === active) {
          element.style.transform = 'none';
          element.style.zIndex = 1;
          element.style.filter = 'none';
          element.style.opacity = 1;
        } else {
          const stt = Math.abs(active - index);
          const translateX = 200 * stt;
          const scale = 1 - 0.2 * stt;
          const rotateY = active > index ? '1deg' : '-1deg';
          element.style.transform = `translateX(${active > index ? -translateX : translateX}px) scale(${scale}) perspective(16px) rotateY(${rotateY})`;
          element.style.zIndex = -stt;
          element.style.filter = 'blur(5px)';
          element.style.opacity = stt > 2 ? 0 : 0.6;
        }
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div
      style={{
        backgroundImage: "url('./images/bgf.jpg')",
        minHeight: '100vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
        padding: '20px',
      }}
    >
      {/* Title Section */}
      <h1 style={{ 
        color: 'white', 
        fontSize: '3rem', 
        textAlign: 'center', 
        marginBottom: '20px', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
      }}>
        Glimpse of Medha
      </h1>

      {/* Slider Section */}
      <div className="slider">
        {items.map((item, index) => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            className="item"
            style={{ backgroundImage: item.backgroundImage }}
          >
            {item.content}
          </div>
        ))}
        <button
          id="next"
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '50px',
            top: '40%',
            zIndex: 2,
            color: 'yellow',
            background: 'none',
            border: 'none',
            fontSize: '90px',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            opacity: 0.5,
            transition: 'opacity 0.5s',
          }}
        >
          &gt;
        </button>
        <button
          id="prev"
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '50px',
            top: '40%',
            zIndex: 2,
            color: 'yellow',
            background: 'none',
            border: 'none',
            fontSize: '90px',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            opacity: 0.5,
            transition: 'opacity 0.5s',
          }}
        >
          &lt;
        </button>
      </div>
    </div>
  );
};

export default SliderDemo;