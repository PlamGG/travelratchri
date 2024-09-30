import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import AttractionCard from './AttractionCard';

const AttractionsList = ({ attractions = [], handleAttractionEdit, handleAttractionDelete }) => (
  <Card>
    <CardHeader>
      <CardTitle>สถานที่ท่องเที่ยวของฉัน</CardTitle>
    </CardHeader>
    <CardContent>
      <AnimatePresence>
        {attractions.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <AttractionCard
                  attraction={attraction}
                  onEdit={(updatedAttraction) => handleAttractionEdit(attraction.id, updatedAttraction)}
                  onDelete={() => handleAttractionDelete(attraction.id)}
                  editable
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>ไม่มีสถานที่ท่องเที่ยวในขณะนี้</p>
          </div>
        )}
      </AnimatePresence>
    </CardContent>
  </Card>
);

export default AttractionsList;
