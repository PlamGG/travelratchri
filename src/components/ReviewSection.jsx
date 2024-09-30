import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

const ReviewSection = ({ attractionId, reviews, onAddReview }) => {
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() && rating > 0) {
      onAddReview({ attractionId, content: newReview, rating });
      setNewReview('');
      setRating(0);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p>{review.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block mb-2">Your Rating:</label>
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
        <Textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          className="mb-4"
          rows={4}
        />
        <Button type="submit">Submit Review</Button>
      </form>
    </div>
  );
};

export default ReviewSection;