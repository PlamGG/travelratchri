import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const GoogleMapsSelector = ({ onSelectLocation, onClose }) => {
  const [mockLocation] = useState({
    lat: 13.5275, // ตัวอย่างละติจูด
    lng: 99.8115, // ตัวอย่างลองจิจูด
    location: "ราชบุรี, ไทย", 
  });

  const handleConfirm = () => {
    onSelectLocation(mockLocation.lat, mockLocation.lng, mockLocation.location);
    onClose(); 
  };

  return (
    <div>

      <div style={{ width: '100%', height: '400px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span>แผนที่ (Mock-up) คลิกที่นี่เพื่อเลือกตำแหน่ง</span>
      </div>
      <div className="flex justify-between mt-4">
        <Button onClick={handleConfirm}>ยืนยันตำแหน่ง</Button>
      </div>
    </div>
  );
};

export default GoogleMapsSelector;
