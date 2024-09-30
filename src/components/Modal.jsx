import React, { useEffect } from 'react';

const Modal = ({
  isOpen,
  closeModal,
  images,
  currentIndex,
  handleNextImage,
  handlePrevImage,
}) => {
  if (!isOpen) return null;

  // Handle keydown for left and right arrows
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      handleNextImage(); // Right arrow for next image
    } else if (e.key === 'ArrowLeft') {
      handlePrevImage(); // Left arrow for previous image
    }
  };

  // Add keydown event listener when modal opens
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    // Clean up event listener when modal closes
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={closeModal} // Close modal on click outside
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].image}
          alt="Large Featured Image"
          className="max-w-full max-h-screen rounded-lg"
        />
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white text-3xl"
        >
          &times;
        </button>

        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
        >
          &lt;
        </button>

        <button
          onClick={handleNextImage}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Modal;
