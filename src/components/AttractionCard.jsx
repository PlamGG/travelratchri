import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";
import WeatherWidget from './WeatherWidget';
import MapView from './MapView';

const AttractionCard = ({ attraction, showDetails = false }) => {
  return (
    <Link to={`/attraction/${attraction.id}`} className="block">
      <Card className="overflow-hidden transition-shadow hover:shadow-lg cursor-pointer">
        <img src={attraction.image} alt={attraction.title} className="w-full h-48 object-cover" />
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{attraction.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {attraction.description}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{attraction.location}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-400" />
              <span>{attraction.rating.toFixed(1)}</span>
            </div>
          </div>
          {showDetails && (
            <>
              <div className="mt-4">
                <WeatherWidget location={attraction.location} />
              </div>
              <div className="mt-4">
                <MapView location={{ lat: attraction.lat, lng: attraction.lng, name: attraction.title }} />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default AttractionCard;
