import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTouristAttractionById } from '../utils/touristData';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Clock, DollarSign, CalendarDays, Activity, Truck, AlertCircle, Star } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import MapView from './MapView';
import { Alert, AlertDescription } from "@/components/ui/alert";

const AttractionDetails = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [newReview, setNewReview] = useState({ reviewer: '', comment: '', rating: 0 });
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const { data: attraction, isLoading, error } = useQuery({
    queryKey: ['attraction', id],
    queryFn: () => getTouristAttractionById(parseInt(id)),
  });

  const addReviewMutation = useMutation({
    mutationFn: (review) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ ...review, id: Date.now() });
        }, 1000);
      });
    },
    onSuccess: (review) => {
      queryClient.setQueryData(['attraction', id], (oldData) => ({
        ...oldData,
        reviews: [...(oldData.reviews || []), review],
      }));
    },
  });

  const handleAddReview = (review) => {
    addReviewMutation.mutate(review);
  };

  const handleReviewSubmit = () => {
    if (newReview.reviewer && newReview.comment && newReview.rating) {
      handleAddReview(newReview);
      setNewReview({ reviewer: '', comment: '', rating: 0 });
    }
  };

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const NoDataAlert = () => (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>No data available for this section.</AlertDescription>
    </Alert>
  );

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => handleRatingChange(index + 1)} // การคลิกที่ดาวจะเปลี่ยนคะแนน
          />
        ))}
        <span className="ml-2">{rating}/5</span>
      </div>
    );
  };

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!attraction) return <div>Attraction not found</div>;

  // การแสดงรูปภาพใน Gallery
  const renderGallery = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {attraction.gallery && attraction.gallery.length > 0 ? (
          attraction.gallery.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105"
            />
          ))
        ) : (
          <NoDataAlert />
        )}
      </div>
    );
  };

  // การแสดงรีวิวแบบจำกัด 5 ความคิดเห็น
  const renderReviews = () => {
    const reviewsToShow = showMoreReviews ? attraction.reviews : attraction.reviews.slice(0, 5);

    return (
      <div className="reviews-list mt-4">
        <h3 className="text-xl font-semibold mb-2">User Reviews</h3>
        {attraction.reviews && attraction.reviews.length > 0 ? (
          <>
            {reviewsToShow.map((review, index) => (
              <div key={index} className="review-item mb-4 p-4 border border-gray-200 rounded-lg shadow-sm transition-transform transform hover:shadow-lg">
                <h4 className="font-bold">รีวิวโดย: {review.reviewer}</h4>
                <p className="mt-2">ความคิดเห็น: {review.comment}</p>
                <div className="mt-2">{renderStars(review.rating)}</div>
              </div>
            ))}
            {attraction.reviews.length > 5 && (
              <button
                onClick={() => setShowMoreReviews(!showMoreReviews)}
                className="text-blue-500 mt-4"
              >
                {showMoreReviews ? 'แสดงน้อยลง' : 'ดูเพิ่ม'}
              </button>
            )}
          </>
        ) : (
          <p>ยังไม่มีรีวิว</p>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold">{attraction.title}</CardTitle>
            {attraction.category && <Badge variant="secondary">{attraction.category}</Badge>}
          </div>
        </CardHeader>
        <CardContent>
          {attraction.image && (
            <img src={attraction.image} alt={attraction.title} className="w-full h-96 object-cover rounded-lg mb-4" />
          )}
          <p className="text-lg mb-4">{attraction.description}</p>

          <Tabs defaultValue="info" className="mt-6">
  <TabsList className="flex flex-wrap justify-start mb-4"> {/* เพิ่ม mb-4 เพื่อเพิ่มระยะห่างด้านล่าง */}
    <TabsTrigger value="info">ข้อมูล</TabsTrigger>
    <TabsTrigger value="activities">กิจกรรม</TabsTrigger>
    <TabsTrigger value="amenities">สิ่งอำนวยความสะดวก</TabsTrigger>
    <TabsTrigger value="weather">สภาพอากาศ</TabsTrigger>
    <TabsTrigger value="map">แผนที่</TabsTrigger>
    <TabsTrigger value="gallery">แกลเลอรี</TabsTrigger>
    <TabsTrigger value="reviews">รีวิว</TabsTrigger>
  </TabsList>


            {/* Info Tab */}
            <TabsContent value="info">
              <div className="grid md:grid-cols-2 gap-4">
                {attraction.openingHours && (
                  <div className="flex items-center">
                    <Clock className="mr-2" />
                    <div>
                      <h3 className="font-semibold">Opening Hours</h3>
                      <p>{attraction.openingHours}</p>
                    </div>
                  </div>
                )}
                {attraction.entryFee && (
                  <div className="flex items-center">
                    <DollarSign className="mr-2" />
                    <div>
                      <h3 className="font-semibold">Entry Fee</h3>
                      <p>Adult: ฿{attraction.entryFee.adult}, Child: ฿{attraction.entryFee.child}</p>
                    </div>
                  </div>
                )}
                {attraction.bestTimeToVisit && (
                  <div className="flex items-center">
                    <CalendarDays className="mr-2" />
                    <div>
                      <h3 className="font-semibold">Best Time to Visit</h3>
                      <p>{attraction.bestTimeToVisit}</p>
                    </div>
                  </div>
                )}
                {attraction.recommendedDuration && (
                  <div className="flex items-center">
                    <Clock className="mr-2" />
                    <div>
                      <h3 className="font-semibold">Recommended Duration</h3>
                      <p>{attraction.recommendedDuration}</p>
                    </div>
                  </div>
                )}
              </div>
              {!attraction.openingHours && !attraction.entryFee && !attraction.bestTimeToVisit && !attraction.recommendedDuration && <NoDataAlert />}
            </TabsContent>

            {/* Activities Tab */}
            <TabsContent value="activities">
              {attraction.activities && attraction.activities.length > 0 ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">Activities</h3>
                  <ul className="list-disc pl-5">
                    {attraction.activities.map((activity, index) => (
                      <li key={index} className="mb-1">
                        <Activity className="inline-block mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NoDataAlert />
              )}
            </TabsContent>

            {/* Amenities Tab */}
            <TabsContent value="amenities">
              {attraction.amenities && attraction.amenities.length > 0 ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">Amenities</h3>
                  <ul className="list-disc pl-5">
                    {attraction.amenities.map((amenity, index) => (
                      <li key={index} className="mb-1">
                        <Truck className="inline-block mr-2" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NoDataAlert />
              )}
            </TabsContent>

            {/* Weather Tab */}
            <TabsContent value="weather">
              {attraction.location ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">Weather</h3>
                  <WeatherWidget location={attraction.location} />
                </>
              ) : (
                <NoDataAlert />
              )}
            </TabsContent>

            {/* Map Tab */}
            <TabsContent value="map">
              {attraction.lat && attraction.lng ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">Map</h3>
                  <MapView location={{ lat: attraction.lat, lng: attraction.lng, name: attraction.title }} />
                  {attraction.transportation && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-1">Transportation</h4>
                      <p className="flex items-center">
                        <Truck className="mr-2" size={16} />
                        {attraction.transportation}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <NoDataAlert />
              )}
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery">
              <h3 className="text-xl font-semibold mb-2">Gallery</h3>
              {renderGallery()}
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews">
              {renderReviews()}

              {/* แบบฟอร์มเพิ่มรีวิว */}
              <div className="add-review-form mt-8">
  <h3 className="text-xl font-semibold mb-2">Add a Review</h3>
  <input
    type="text"
    value={newReview.reviewer}
    onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
    placeholder="Your Name"
    className="border rounded p-2 mb-2 w-full"
  />
  <textarea
    value={newReview.comment}
    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
    placeholder="Your Review"
    className="border rounded p-2 mb-2 w-full"
  />
  <div className="flex items-center mb-2">
    <span>Rating: </span>
    {renderStars(newReview.rating)} {/* แสดงดาวสำหรับการให้คะแนน */}
  </div>
  <button onClick={handleReviewSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
    Submit Review
  </button>
</div>

            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttractionDetails;
