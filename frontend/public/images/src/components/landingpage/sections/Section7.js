import React, { useState, useRef } from 'react';

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef(null); // Reference to the audio element

  // Function to handle page flip and play sound
  const handlePageFlip = (newPage) => {
    setCurrentPage(newPage);
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind to the start
      audioRef.current.play(); // Play the sound
    }
  };

  return (
    <>
      {/* Audio element for the flip sound */}
      <audio ref={audioRef} src="/sounds/page-flip.mp3" preload="auto"></audio>

      <div className="book" style={{ '--c': currentPage }}>
        {/* Page 1 */}
        <div className="page" style={{ '--i': 0 }}>
          <div className="front" onClick={() => handlePageFlip(1)}>
            <h1>Medha</h1>
            <h3>2025.<br />Marvel vs DC</h3>
          </div>
          <div className="back" onClick={() => handlePageFlip(0)}>
            <h2>Lorem Ipsum</h2>
            <img src="/images/page1.jpg" alt="Page 1 Image" />
            <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, modi, perspiciatis molestias cum neque
            delectus eum eveniet repellat iusto totam magnam cupiditate quaerat quis.</p>
          </div>
        </div>

        {/* Page 2 */}
        <div className="page" style={{ '--i': 1 }}>
          <div className="front" onClick={() => handlePageFlip(2)}>
            <img src="/images/page2.jpg" alt="Page 2 Image" />
            <p>2. Dolor Molestias aspernatur repudiandae sed quos debitis recusandae consectetur ab facilis voluptates
            sint vero eos, consequuntur delectus?</p>
          </div>
          <div className="back" onClick={() => handlePageFlip(1)}>
            <img src="/images/page3.jpg" alt="Page 3 Image" />
          </div>
        </div>

        {/* Pages 3-6 (duplicates) */}
        {[2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="page" style={{ '--i': index }}>
            <div className="front" onClick={() => handlePageFlip(index + 1)}>
              <h2>Sit amet</h2>
              <img src={`/images/page${index + 2}.jpg`} alt={`Page ${index + 2} Image`} />
              <p>4. Consectetur adipisicing elit. Dignissimos illo voluptate sapiente provident tempore ea voluptates
              perferendis tenetur eos nulla, doloribus! Distinctio a nostrum ipsum, adipisci at mollitia.</p>
            </div>
            <div className="back" onClick={() => handlePageFlip(index)}>
              <img src={`/images/page${index + 2}.jpg`} alt={`Page ${index + 2} Image`} />
              <p>5. Debitis recusandae consectetur ab facilis voluptates sint vero eos, consequuntur delectus temporibus
              harum dolorem provident eaque perferendis.</p>
            </div>
          </div>
        ))}

        {/* Final Pages */}
        <div className="page" style={{ '--i': 7 }}>
          <div className="front" onClick={() => handlePageFlip(8)}>
            <h2>Consectetur</h2>
            <img src="/images/page9.jpg" alt="Page 9 Image" />
            <p>6. Adipisicing elit. Sed, fuga aspernatur? Numquam, molestias unde! Voluptatibus sint aspernatur qui
            dolore est itaque ipsum consequuntur neque asperiores non obcaecati harum, perspiciatis voluptate!</p>
          </div>
          <div className="back" onClick={() => handlePageFlip(7)}>
            <img src="/images/page10.jpg" alt="Page 10 Image" />
            <p>7. Temporibus, eum nobis? Adipisci, a? Eaque vel amet ut reprehenderit.</p>
          </div>
        </div>

        <div className="page" style={{ '--i': 8 }}>
          <div className="front" onClick={() => handlePageFlip(9)}>
            <img src="/images/page11.jpg" alt="Page 11 Image" />
          </div>
          <div className="back" onClick={() => handlePageFlip(8)}>
            <h3>Finalis</h3>
            <img src="/images/page12.jpg" alt="Page 12 Image" />
            <p>9. Lorem ipsum dolor sit, amet consectetur adipisicing elit. code by Roko, eniam vero, magni dignissimos
            deleniti hic ratione sequi ullam eos.</p>
          </div>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          display: flex;
          height: 100dvh;
          perspective: 1000px;
          font: 16px/1.4 sans-serif;
          overflow: hidden;
          background-color: #232425;
          background-image: url('/images/bg5.png');
          background-size: cover;
          background-position: center;
        }

        .book {
          display: flex;
          margin: auto;
          width: 600px;
          height: 500px;
          pointer-events: none;
          transform-style: preserve-3d;
          transition: translate 1s;
          translate: calc(min(var(--c), 1) * 50%) 0%;
          rotate: 1 0 0 30deg;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .page {
          --z: 5px;

          flex: none;
          display: flex;
          width: 100%;
          pointer-events: all;
          user-select: none;
          transform-style: preserve-3d;
          border: 1px solid #0008;
          transform-origin: left center;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1),
              rotate 1s cubic-bezier(0.4, 0, 0.2, 1) calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms);
          translate: calc(var(--i) * -100%) 0px 0px;
          transform: translateZ(calc((var(--c) - var(--i) - 0.5) * var(--z)));
          rotate: 0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg);
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
        }

        .page.flipping {
          rotate: 0 1 0 -180deg;
          transform: translateZ(calc((var(--c) - var(--i) - 0.5) * var(--z))) rotateY(-180deg);
        }

        .front,
        .back {
          flex: none;
          width: 100%;
          padding: 2rem;
          backface-visibility: hidden;
          background-color: #fff;
          translate: 0px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .back {
          background-image: linear-gradient(to right, #fff 80%, #ddd 100%);
          translate: -100% 0;
          rotate: 0 1 0 180deg;
          height: 100%;
        }

        .page img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        h1, h2, h3 {
          color: #333;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        p {
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export default FlipBook;