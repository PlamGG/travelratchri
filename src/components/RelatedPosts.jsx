import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RelatedPosts = ({ latestPosts }) => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link to={`/article/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-bold">{post.title}</h3>
                  <p className="text-white text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.excerpt || 'Read more...'}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
