import React from 'react';
import Image from 'next/image';

interface ActivityProps {
  activity: {
    id: string;
    name: string;
    description: string;
    image: string;
    duration: string;
    price: number;
    currency: string;
  };
}

export function ActivityCard({ activity }: ActivityProps) {
  return (
    <div className="image-box style10">
      <div className="details">
        <div className="room-box-responsive">
          <h2 className="box-title travel-title">
            {activity.name}
          </h2>
          <p className="text-justify">{activity.description}</p>
          <div className="amenities">
            <span className="duration">{activity.duration}</span>
          </div>
          <div className="price-section">
            <span className="price">
              {activity.currency} {activity.price}
            </span>
            <span className="font11">Inclusive All Taxes</span>
          </div>
          <a className="button yellow full-width btn-small select-rooms">
            Select Tour
          </a>
        </div>
      </div>
    </div>
  );
}