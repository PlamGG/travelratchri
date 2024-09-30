import React, { useState, useEffect } from 'react';
import ProfileForm from '../components/ProfileForm';
import AttractionsList from '../components/AttractionsList';
import AddAttractionForm from '../components/AddAttractionForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { getTouristAttractions, addTouristAttraction, updateTouristAttraction, deleteTouristAttraction } from '../utils/touristData';

const UserPage = () => {
  const [attractions, setAttractions] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    lat: '',
    lng: '',
    image: '',
  });
  const [profile, setProfile] = useState({
    name: ' ชื่อผู้ใช้',
    email: 'email@ราชรีมีไร.com',
    bio: 'นักท่องเที่ยวตัวยง',
  });

  useEffect(() => {
    setAttractions(getTouristAttractions());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.lat && formData.lng && formData.image) {
      const newAttraction = addTouristAttraction(formData);
      setAttractions(prev => [...prev, newAttraction]);
      setFormData({ title: '', description: '',location: '', lat: '', lng: '', image: '' });
    }
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
  };

  const handleAttractionEdit = (id, updatedAttraction) => {
    updateTouristAttraction(id, updatedAttraction);
    setAttractions(prev => prev.map(attr => attr.id === id ? updatedAttraction : attr));
  };

  const handleAttractionDelete = (id) => {
    deleteTouristAttraction(id);
    setAttractions(prev => prev.filter(attr => attr.id !== id));
  };

  const handleSelectLocation = (lat, lng) => {
    setFormData(prev => ({ ...prev, lat, lng }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="attractions">My Attractions</TabsTrigger>
          <TabsTrigger value="add">Add Attraction</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <ProfileForm
            profile={profile}
            handleProfileChange={handleProfileChange}
            handleProfileUpdate={handleProfileUpdate}
          />
        </TabsContent>
        <TabsContent value="attractions">
          <AttractionsList
            attractions={attractions}
            handleAttractionEdit={handleAttractionEdit}
            handleAttractionDelete={handleAttractionDelete}
          />
        </TabsContent>
        <TabsContent value="add">
          <AddAttractionForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleSelectLocation={handleSelectLocation}
          />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default UserPage;
