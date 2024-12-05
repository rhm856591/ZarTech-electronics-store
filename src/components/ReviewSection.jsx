import React from 'react'
import {reviews} from "@/data"

const ReviewSection = () => {
    return (
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{review.name}</span>
                <span className="text-yellow-500">★ {review.rating}</span>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewSection;
  