import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Actual data for the cards
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Designer',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'Bob Brown',
      role: 'Developer',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Charlie Davis',
      role: 'Marketing',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 6,
      name: 'Eve White',
      role: 'HR',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 7,
      name: 'Frank Wilson',
      role: 'Sales',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 8,
      name: 'Grace Lee',
      role: 'Support',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 9,
      name: 'Grace Lee',
      role: 'Support',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    }
  ];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' ,
      
      paddingBottom:'80px'
    }}>
      <h1 style={{ fontFamily: "'Bangers', cursive", color: '#ED1D24' }}>
        Meet Our Team
      </h1>

      {/* Card Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          margin: '2rem auto', // Center the grid with equal margins
          maxWidth: '1200px', // Limit the maximum width of the grid
          alignItems: 'center',
        }}
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{
              height: '400px',
              width: '300px',
              backgroundImage: "url('/images/teamcard1.png')", // Add background image
              backgroundSize: 'cover', // Ensure the image covers the card
              backgroundPosition: 'center', // Center the background image
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              color: 'white', // Adjust text color for better visibility
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better readability
              transform: hoveredCard === member.id ? 'scale(1.05)' : 'scale(1)', // Scale up on hover
              transition: 'transform 0.3s ease', // Smooth transition
            }}
            onMouseEnter={() => setHoveredCard(member.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '48px',
                marginLeft: '5px',
                border: '3px solid white', // Add border to the image for better visibility
              }}
            />
            <h3 style={{ margin: '1rem 0 0.5rem', color: 'inherit' }}>{member.name}</h3>
            <p style={{ color: 'inherit' }}>{member.role}</p>
          </div>
        ))}
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

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 20px',
          background: '#0047AB',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Team;