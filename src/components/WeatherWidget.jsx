import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';

const fetchWeather = async (location) => {
  const API_KEY = '30b64730edd00d5f636769e5d7e02c05'; // Replace with your actual API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Weather data not available');
  }
  return response.json();
};

const WeatherWidget = ({ location }) => {
  const { data: weather, isLoading, error } = useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchWeather(location),
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-500">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-500">Unable to fetch weather data. Please try again later.</div>
      </div>
    );
  }

  // สร้างอ็อบเจ็กต์สำหรับเก็บข้อมูลอากาศในแต่ละวัน
  const dailyWeather = {};
  weather.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString("th-TH");
    if (!dailyWeather[date]) {
      dailyWeather[date] = {
        temp: item.main.temp,
        condition: item.weather[0].description,
        icon: item.weather[0].icon,
      };
    }
  });

  // ดึงข้อมูล 4 วันแรก
  const dates = Object.keys(dailyWeather).slice(0, 4);

  return (
    <Card className="shadow-lg p-4 rounded-lg">
      <CardContent>
        <h2 className="text-xl font-bold text-center mb-4">Weather in {location}</h2>
        <div className="flex justify-between">
          {dates.map((date, index) => (
            <div key={index} className="flex flex-col items-center mx-2">
              <img
                src={`http://openweathermap.org/img/wn/${dailyWeather[date].icon}.png`}
                alt={dailyWeather[date].condition}
                className="w-16 h-16 animate-bounce"
              />
              <p className="text-lg font-semibold">{date}</p>
              <p className="text-lg">
                Temperature: <span className="font-semibold">{dailyWeather[date].temp}°C</span>
              </p>
              <p className="text-md">Condition: {dailyWeather[date].condition}</p>
              {index < dates.length - 1 && (
                <div className="border-l-2 border-gray-300 h-full mx-2"></div> // เพิ่มเส้นแบ่ง
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
