import { useState, useEffect, useRef } from 'react';
import { FaHeart, FaInstagram } from 'react-icons/fa';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import BirthdayPage from './BirthdayPage';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.jpeg';
import img13 from '../assets/img13.jpeg';

const images = [
  { src: img1, caption: 'She’s sunshine wrapped in grace ☀️' },
  { src: img2, caption: 'Cute? More like cuteness overloaded 💖' },
  { src: img3, caption: 'Smiles sweeter than cupcakes 🧁' },
  { src: img4, caption: 'A sparkle in her eyes, and magic in her soul ✨' },
  { src: img5, caption: 'Little moments. Big heart. 💫' },
  { src: img6, caption: 'Pretty. Playful. Perfectly her 💕' },
  { src: img7, caption: 'She’s poetry in a world that speaks too loud 📖' },
  { src: img8, caption: 'Giggles, glam, and golden vibes 🌸' },
  { src: img9, caption: 'The kind of girl you meet once and never forget 🌈' },
  { src: img10, caption: 'Wrapped in warmth, woven with wonder 🌷' },
  { src: img11, caption: 'Eyes full of dreams, heart full of love 🌙' },
  { src: img12, caption: 'She is the softest chaos you will ever love 💗' },
  { src: img13, caption: 'More than beautiful — she’s magic in motion 🌻' }
];


export default function MirrorOfMemories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBirthdayPage, setShowBirthdayPage] = useState(false);
  const slideshowRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, []);

  // Swipe support
  useEffect(() => {
    const slider = slideshowRef.current;
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => (startX = e.touches[0].clientX);
    const handleTouchMove = (e) => (endX = e.touches[0].clientX);
    const handleTouchEnd = () => {
      if (startX - endX > 50) goToNext();
      if (endX - startX > 50) goToPrevious();
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Show BirthdayPage on manual click only
  if (showBirthdayPage) {
    return <BirthdayPage />;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden text-gray-800">
      <h1 className="text-5xl font-bold text-pink-500 tracking-widest mb-8 text-center">
        Mirror of Memories
      </h1>

      <div
        className="relative w-full max-w-6xl h-[700px] flex items-center justify-center overflow-hidden"
        ref={slideshowRef}
      >
        <button
          onClick={goToPrevious}
          className="absolute left-2 z-30 text-4xl text-pink-300 hover:text-pink-500 transition-all"
        >
           <MdArrowBackIosNew />
        </button>

        <div className="relative w-full h-full">
         {images.map((img, index) => {
  const isActive = index === currentIndex;
  const offsetIndex = index - currentIndex;
  let translateX = offsetIndex * 220;

  return (
    <div
      key={index}
      className={`absolute top-1/2 left-1/2 transform transition-all duration-500 ease-in-out ${
        isActive
          ? 'z-20 scale-125 opacity-100 blur-0 w-72 h-[450px] border-4 border-white shadow-xl'
          : 'z-10 scale-90 opacity-30 blur-sm w-40 h-[300px]'
      } rounded-xl overflow-hidden`}
      style={{
        transform: `translate(-50%, -50%) translateX(${translateX}px)`,
      }}
    >
      {img.src.includes('.mp4') ? (
        <video
          src={img.src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={img.src}
          alt={`Memory ${index + 1}`}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
})}
        </div>

        <button
          onClick={goToNext}
          className="absolute right-2 z-30 text-4xl text-pink-300 hover:text-pink-500 transition-all"
        >
        <MdArrowForwardIos />
        </button>
      </div>

      <p className="mt-2text-xl font-medium text-center max-w-xl">
        {images[currentIndex].caption}
      </p>

      <button
        className="mt-6 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold text-lg shadow-md hover:bg-pink-600 transition-all"
        onClick={() => setShowBirthdayPage(true)}
      >
        🎁 Click to Reveal Birthday Surprise
      </button>
    </div>
  );
}
