import React from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPostsByCategory } from '../utils/blogUtils';
import BlogPost from '../components/BlogPost';
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { category } = useParams();
  const posts = getBlogPostsByCategory(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Category: {category}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryPage;