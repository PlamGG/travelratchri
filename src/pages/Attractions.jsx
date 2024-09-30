import React, { useState } from 'react';
import { motion } from "framer-motion";
import AttractionCard from '../components/AttractionCard';
import { getTouristAttractions } from '../utils/touristData';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { Link } from 'react-router-dom';

const Attractions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const attractionsPerPage = 9;
  const allAttractions = getTouristAttractions();

  const filteredAttractions = allAttractions.filter(attraction =>
    attraction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attraction.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastAttraction = currentPage * attractionsPerPage;
  const indexOfFirstAttraction = indexOfLastAttraction - attractionsPerPage;
  const currentAttractions = filteredAttractions.slice(indexOfFirstAttraction, indexOfLastAttraction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl font-bold mb-6">All Attractions</h1>
      <div className="mb-6 flex items-center">
        <Input
          type="text"
          placeholder="Search attractions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button variant="outline">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentAttractions.map((attraction, index) => (
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
      <div className="mt-8 flex justify-center">
        {Array.from({ length: Math.ceil(filteredAttractions.length / attractionsPerPage) }, (_, i) => (
          <Button
            key={i}
            onClick={() => paginate(i + 1)}
            variant={currentPage === i + 1 ? "default" : "outline"}
            className="mx-1"
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Plan Your Visit</h2>
        <p className="mb-4">
          Use our interactive map to explore attractions and plan your perfect itinerary.
        </p>
        <Button>
          <MapPin className="h-4 w-4 mr-2" />
          Open Map View
        </Button>
      </div>
    </motion.div>
  );
};

export default Attractions;
