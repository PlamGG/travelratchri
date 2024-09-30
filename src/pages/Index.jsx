import React from 'react';
import { Link } from 'react-router-dom';
import AttractionCard from '../components/AttractionCard';
import { getTouristAttractions } from '../utils/touristData';
import { getBlogPosts } from '../utils/blogUtils';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlogPost from '../components/BlogPost';

const Index = () => {
  const attractions = getTouristAttractions();
  const blogPosts = getBlogPosts().slice(0, 3); // Get only the first 3 blog posts

  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[400px] rounded-lg overflow-hidden"
      >
        <img src="https://siamrath.co.th/sites/default/files/styles/1140/public/img/20230224/501ccd7040fb265c0b5442e0d6e26606ca5ad1b2ee38d43d0e239be63fc23112.jpeg?itok=nK-A__Xi" alt="Travel Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">เที่ยวราชบุรีกับ ราชรีมีไร</h1>
            <Link to="/blog">
              <Button size="lg">Explore Our Blog</Button>
            </Link>
          </div>
        </div>
      </motion.div>
      
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Attractions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.slice(0, 3).map((attraction, index) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AttractionCard attraction={attraction} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/attractions">
            <Button>View All Attractions</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
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
        <div className="text-center mt-8">
          <Link to="/blog">
            <Button>Read More Posts</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;