import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl font-bold mb-6">ติดต่อเรา</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            เราอยากฟังความคิดเห็นจากคุณ! ไม่ว่าคุณจะมีคำถามเกี่ยวกับเนื้อหาของเรา ต้องการร่วมงานกับเรา หรือแค่ต้องการทักทาย อย่าลังเลที่จะติดต่อเรา
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">อีเมล</h3>
              <p>contact@ราชรีมีไร.com</p>
            </div>
            <div>
              <h3 className="font-semibold">โทรศัพท์</h3>
              <p>+66 1234 5678</p>
            </div>
            <div>
              <h3 className="font-semibold">ที่อยู่</h3>
              <p>123 ถนนท่องเที่ยว, ราชบุรี, ไทย</p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">ชื่อ</label>
              <Input id="name" type="text" placeholder="ชื่อของคุณ" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">อีเมล</label>
              <Input id="email" type="email" placeholder="อีเมลของคุณ" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">ข้อความ</label>
              <Textarea id="message" placeholder="ข้อความของคุณ" rows={5} required />
            </div>
            <Button type="submit">ส่งข้อความ</Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
