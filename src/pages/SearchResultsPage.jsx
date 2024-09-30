import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { getTouristAttractions } from "../utils/touristData"; // นำเข้าข้อมูลสถานที่ท่องเที่ยว
import { getBlogPosts } from "../utils/blogUtils"; // นำเข้าข้อมูลบล็อก

const SearchResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const attractions = getTouristAttractions(); // ใช้ข้อมูลจริงของสถานที่ท่องเที่ยว
  const blogPosts = getBlogPosts(); // ใช้ข้อมูลจริงของบล็อก

  const filteredAttractions = searchTerm
    ? attractions.filter(attraction =>
        attraction.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const filteredBlogPosts = searchTerm
    ? blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const combinedResults = [
    ...filteredAttractions.map(attraction => ({ ...attraction, type: 'attraction' })), // เพิ่มประเภทสำหรับสถานที่ท่องเที่ยว
    ...filteredBlogPosts.map(post => ({ ...post, type: 'blog' })) // เพิ่มประเภทสำหรับบล็อกโพสต์
  ]; 

  const resultsPerPage = 8; // จำนวนการ์ดที่ต้องการแสดงในแต่ละหน้า
  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน
  const totalResults = combinedResults.length; // จำนวนผลลัพธ์ทั้งหมด

  // คำนวณผลลัพธ์ที่จะแสดงในหน้า
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = combinedResults.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalResults / resultsPerPage); // จำนวนหน้าทั้งหมด

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8"
    >
      {/* หัวข้อการค้นหา */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">ผลการค้นหาสำหรับ: {searchTerm}</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="ค้นหาสถานที่ท่องเที่ยวหรือบทความ..."
            className="pl-10 pr-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2">
            ค้นหา
          </Button>
        </div>
      </div>

      {/* แสดงผลการค้นหาเป็นการ์ดแนวนอน */}
      <div className="space-y-6">
        {currentResults.length > 0 ? (
          currentResults.map((item) => (
            <Link 
              key={item.id} 
              to={item.type === 'attraction' ? `/attraction/${item.id}` : `/article/${item.id}`} 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // เลื่อนหน้าจอขึ้น
              className="block"
            >
              <div className="flex border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* ปรับขนาดภาพให้เหมาะสม */}
                <img src={item.image} alt={item.title} className="w-52 h-52 object-cover" /> 
                
                {/* ข้อความด้านขวา */}
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    {/* หมวดหมู่ที่ดึงมาจาก category หรือไม่ */}
                    {item.category && (
                      <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
                    )}
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-600">{item.description || item.content.substring(0, 100)}...</p>
                  </div>
                  
                  {/* วันที่ */}
                  <p className="text-sm text-gray-400 mt-2">{item.date}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          searchTerm && <p className="text-gray-500">ไม่พบข้อมูลที่ตรงกับการค้นหา</p>
        )}
      </div>

      {/* ปุ่มสำหรับเปลี่ยนหน้า */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <Button 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ก่อนหน้า
          </Button>
          <span className="text-lg">
            หน้า {currentPage} / {totalPages}
          </span>
          <Button 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            ถัดไป
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default SearchResultsPage;
