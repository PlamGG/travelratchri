import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ProfileForm = ({ profile, handleProfileChange, handleProfileUpdate }) => (
  <Card>
    <CardHeader>
      <CardTitle>โปรไฟล์</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleProfileUpdate} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">ชื่อ</Label>
          <Input
            id="name"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">อีเมล</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleProfileChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">ประวัติ</Label>
          <Textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleProfileChange}
            rows={3}
          />
        </div>
        <Button type="submit">อัปเดตโปรไฟล์</Button>
      </form>
    </CardContent>
  </Card>
);

export default ProfileForm;
