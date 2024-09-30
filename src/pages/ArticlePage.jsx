import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPostById, getBlogPosts } from '../utils/blogUtils';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import RelatedPosts from '../components/RelatedPosts';
import ArticleContent from '../components/ArticleContent';

const ArticlePage = () => {
  const { id } = useParams();
  const post = getBlogPostById(parseInt(id));
  const allPosts = getBlogPosts();

  // Filter out the current post and select 3 latest posts
  const latestPosts = allPosts.filter(p => p.id !== parseInt(id)).slice(0, 3);

  // If post not found, display a message
  if (!post) {
    return <div>Article not found</div>;
  }

  // State for managing modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === post.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? post.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8"
    >
      <ArticleContent
        title={post.title}
        image={post.image}
        date={post.date}
        content={post.content}
      />

      <Carousel images={post.gallery} openModal={openModal} />
      
      <RelatedPosts latestPosts={latestPosts} />

      {/* Modal for displaying large images */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        images={post.gallery}
        currentIndex={currentImageIndex}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
      />
    </motion.div>
  );
};

export default ArticlePage;
