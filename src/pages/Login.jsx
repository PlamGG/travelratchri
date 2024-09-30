import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // จำลองการเข้าสู่ระบบ (ไม่ตรวจสอบข้อมูลจริง)
    if (username && password) {
      alert(`Login successful! Welcome ${username}!`);
      navigate('/user');  // เปลี่ยนไปยังหน้าที่ต้องการ
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleGoogleLogin = () => {
    alert('Google login simulated!');
    navigate('/user');  // เปลี่ยนไปยังหน้าที่ต้องการ
  };

  const handleFacebookLogin = () => {
    alert('Facebook login simulated!');
    navigate('/user');  // เปลี่ยนไปยังหน้าที่ต้องการ
  };

  const handlePhoneLogin = () => {
    alert('Phone login simulated!');
    navigate('/user');  // เปลี่ยนไปยังหน้าที่ต้องการ
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-background"
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login to TravelGuide</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <div className="mt-4 flex justify-around">
            <Button onClick={handleGoogleLogin} className="w-full mx-1">Login with Google</Button>
            <Button onClick={handleFacebookLogin} className="w-full mx-1">Login with Facebook</Button>
          </div>
          <div className="mt-4">
            <Button onClick={handlePhoneLogin} className="w-full">Login with Phone</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Login;
