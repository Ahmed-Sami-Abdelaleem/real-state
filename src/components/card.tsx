"use client";
import { useState } from "react";

interface PropertyCardProps {
  images: string[];
  price: string;
  location: string;
  rooms: number;
  floor: number;
  area: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  images,
  price,
  location,
  rooms,
  floor,
  area,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleImageHover = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden w-80  p-4">
      <div
        className="relative group cursor-pointer"
        onMouseEnter={handleImageHover}
      >
        <img
          src={images[currentImage]}
          alt={`Property ${location}`}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          {isWishlisted ? (
            <span className="text-red-500">❤️</span>
          ) : (
            <span>🤍</span>
          )}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{price}</h3>
        <p className="text-gray-600">{location}</p>
        <div className="flex gap-2 mt-2">
          <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
            {rooms} Rooms
          </span>
          <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
            {floor} Floor
          </span>
          <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
            {area} m²
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
