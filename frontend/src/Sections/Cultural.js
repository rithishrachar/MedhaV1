import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const CulturalEvents = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const cardStyle = (backgroundImage) => ({
    border: '2px solid transparent',
    borderRadius: '8px',
    padding: '16px',
    margin: '18px',
    width: '300px',
    border: '2px solid white',
    height: '300px',
    textAlign: 'center',
    fontSize: '14px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    animation: "glow 1.5s infinite alternate",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
  });

  const hoverEffect = {
    transform: 'translateY(-10px)',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
    border: '2px solid rgba(255, 255, 255, 0.7)',
  };

  const imageStyle = {
    width: '100px',
    height:'120px',
    borderRadius: '8px',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  };

  const pageTitleStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    paddingTop:'90px',
   
    color: "red",
  };

  const events = [
    {
      title: 'SPECTRA (BRAND RANGOLI)',
      image: '/images/capa.png',
      backgroundImage: "url('/images/bgf.jpg')",
      rules: [
        'Participants: 2 make a team',
        'Duration: 1 hour',
        'Student coordinators: ',
        'Shreevatsa: 86600 49762',
        'Sushmitha Amin: 9834063924',

        
      ],
    },
    {
      title: 'ZENBLAZE (CORPORATE WALK)',
      image: '/images/capa.png',
      backgroundImage: "url('/images/bgf.jpg')",
      rules: [
       'Participants: 6-8 make a team',
        'Duration: 10 Minutes',
        'Student coordinators:', 'Prajna Kundar: 9110464528',
                                    ' Raksha T: 99451 38003'

      ],
    },
    {
      title: 'AURA (SPOT DANCE)',
      image: '/images/capa.png',
      backgroundImage: "url('/images/bgf.jpg')",
      rules: [
        'Participants: 1',
        'Duration: 3+ 1 Minutes',
        'Student coordinator: Prakrithiji: 8277091324',
        
      ],
    },
    {
      title: 'HIDDEN TRAIL (TREASURE HUNT)',
      image: '/images/capa.png',
      backgroundImage: "url('/images/bgf.jpg')",
      rules: [
        'Participants: 2 make a team',
      'Student coordinators:' ,'Akhilesh: 8105456871',
        'Puneeth G Mallaya: 8792009632'

      ],
    },
    {
      title: 'IRIS (PHOTOGRAPHY)',
      image: '/images/capa.png',
      backgroundImage: "url('/images/bgf.jpg')",
      rules: [
        'Participants: 2',
        'Student coordinators:', 
        'Vishnu Ashok- 7034069185',
        'Naijin Johny- 9380727878',
      ],
    },
    {
      title: 'MOVIE QUIZ',
      image: '/images/capa.png',
      backgroundImage: "url('/images/bgf.jpg')",
      rules: [
        'Participants: 2',
        'Student coordinators:',
        'Hisham Hussain- 7338549200',
        'Abhin- 9731445371.',
      ],
    },
    {
      title: 'Ad-Vengers',
      image: '/images/capa.png',
      backgroundImage: "url('/images/bgf.jpg')",
      rules: [
        'Participants: 2',
        'Student coordinators:',
        'Shruthi-8431742695',
        'Nismitha-7619531629'
      ],
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <h1 style={pageTitleStyle}>Cultural Events</h1>
      <div style={containerStyle}>
        {events.map((event, index) => {
          const originalStyles = cardStyle(event.backgroundImage);

          return (
            <div
              key={index}
              style={originalStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = hoverEffect.transform;
                e.currentTarget.style.boxShadow = hoverEffect.boxShadow;
                e.currentTarget.style.border = hoverEffect.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = originalStyles.transform;
                e.currentTarget.style.boxShadow = originalStyles.boxShadow;
                e.currentTarget.style.border = originalStyles.border;
              }}
            >
              <img src={event.image} alt={event.title} style={imageStyle} />
              <h3>{event.title}</h3>
              <button
                onClick={() => handleEventClick(event)}
                style={{
                  padding: '10px 20px',
                  background: 'blue',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '60px',
                }}
              >
                View Rules
              </button>
            </div>
          );
        })}
      </div>
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
            textAlign: 'center',
          }}>
            <h2>{selectedEvent.title}</h2>
            <h3>Rules:</h3>
            <ul style={{ textAlign: 'left', listStyleType: 'disc', paddingLeft: '20px' }}>
              {selectedEvent.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <button
              onClick={handleClosePopup}
              style={{
                padding: '10px 20px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
      <div style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        paddingBottom:"100px"
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '10px 20px',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '20px',
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CulturalEvents;