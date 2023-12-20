// ImageGallery.jsx
import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Image Gallery</h2>
      <div className="mt-2 flex flex-nowrap overflow-x-auto mx-1 lg:gap-8 lg:mx-0 scrollbar-hide">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-64 rounded-md overflow-hidden relative "
          >
            <div className="aspect-h-1 aspect-w-1 border-2 rounded-lg shadow-lg">
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="h-full w-full rounded-lg object-cover object-center "
              />
            </div>
            <div className="mt-2 p-2">
              <p className="font-medium">helo</p>
              <p className="text-sm">hu</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
