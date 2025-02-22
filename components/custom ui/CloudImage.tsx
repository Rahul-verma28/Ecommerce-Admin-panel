"use client";

import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

const CloudImage = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleSuccess = (result: { info: { secure_url: string } }) => {
    // Add the new image URL to the array of URLs
    setImageUrls((prevUrls) => [...prevUrls, result.info.secure_url]);
  };

  return (
    <div>
      {imageUrls.length > 0 && (
        <div className="mt-4">
          <p>Uploaded Images:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Uploaded ${index + 1}`}
                className="border rounded shadow"
                style={{ maxWidth: "300px" }}
              />
            ))}
          </div>
        </div>
      )}
      <CldUploadWidget
        uploadPreset="lg0dlgjw"
        onSuccess={handleSuccess} // Updated to use onSuccess
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Upload Images
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default CloudImage;
