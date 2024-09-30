import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Carousel = ({ images, openModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mt-12 relative">
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden  rounded-lg">
        {/* Container for the image with a fixed height */}
        <div className="w-full h-80 md:h-96">
          <img
            src={images[currentImageIndex].image}
            alt="Featured Image"
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={() => openModal(currentImageIndex)} // Open modal on image click
          />
        </div>

        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
        >
          <MdChevronLeft />
        </button>

        <button
          onClick={handleNextImage}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
        >
          <MdChevronRight />
        </button>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full ${
                currentImageIndex === index ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
