import React, { useState } from 'react';
import { getBlogPosts } from '../utils/blogUtils';
import BlogPost from '../components/BlogPost';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const blogPosts = getBlogPosts();

  const loadMore = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + POSTS_PER_PAGE);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Travel Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, visiblePosts).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BlogPost post={post} />
          </motion.div>
        ))}
      </div>
      {visiblePosts < blogPosts.length && (
        <div className="text-center mt-8">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </motion.div>
  );
};

export default Blog;