// AddAttractionForm.jsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin } from 'lucide-react';
import GoogleMapsSelector from './GoogleMapsSelector';
import { Star } from 'lucide-react'; 

const AddAttractionForm = ({ onSubmit = () => {} }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    rating: 0,
    location: '',
    lat: '',
    lng: '',
  });
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectLocation = (lat, lng, location) => {
    setFormData(prev => ({ ...prev, lat, lng, location }));
    setIsMapOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitError(''); // รีเซ็ตข้อความผิดพลาด

    const newAttraction = {
      ...formData,
      id: Date.now(),
      rating,
      reviews: []
    };

    if (typeof onSubmit === 'function') {
      try {
        onSubmit(newAttraction);
        // รีเซ็ตฟอร์มหลังจากส่งข้อมูลสำเร็จ
        setFormData({
          title: '',
          description: '',
          image: '',
          rating: 0,
          location: '',
          lat: '',
          lng: '',
        });
        setRating(0);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
        setSubmitError('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง');
      }
    } else {
      console.error('onSubmit ไม่ใช่ฟังก์ชัน');
      setSubmitError('ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่ภายหลัง');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>เพิ่มสถานที่ท่องเที่ยวใหม่</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">ชื่อสถานที่</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">คำอธิบาย</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">ลิงก์รูปภาพ</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <Label>คะแนน:</Label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>ตำแหน่ง</Label>
            <div className="flex items-center space-x-2">
              <Input
                value={formData.location}
                readOnly
                placeholder="เลือกตำแหน่งบนแผนที่"
              />
              <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
                <DialogTrigger asChild>
                  <Button type="button" variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>เลือกตำแหน่งบนแผนที่</DialogTitle>
                    <DialogDescription>
                      คลิกบนแผนที่เพื่อเลือกตำแหน่งของสถานที่ท่องเที่ยว
                    </DialogDescription>
                  </DialogHeader>
                  <GoogleMapsSelector 
                    onSelectLocation={handleSelectLocation} 
                    onClose={() => setIsMapOpen(false)}  
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {submitError && (
            <div className="text-red-500 text-sm mt-2">{submitError}</div>
          )}

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="button" className="w-full">เพิ่มสถานที่</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>ยืนยันการเพิ่มสถานที่</AlertDialogTitle>
                <AlertDialogDescription>
                  คุณแน่ใจหรือไม่ว่าต้องการเพิ่มสถานที่ท่องเที่ยวนี้?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
                <AlertDialogAction onClick={handleFormSubmit}>ยืนยัน</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddAttractionForm;
