// "use client";

// import { CldUploadWidget } from "next-cloudinary";
// import React from "react";
// import { Plus, Trash } from "lucide-react";
// import { Button } from "../ui/button";
// import Image from "next/image";

// interface ImageUploadProps {
//   value: string[]; // List of image URLs
//   onChange: (value: string[]) => void; // Function to update image list
//   onRemove: (value: string) => void; // Function to remove an image
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   onChange,
//   onRemove,
//   value,
// }) => {
//   const handleSuccess = (result: { info: { secure_url: string } }) => {
//     const newUrl = result.info.secure_url;
//     onChange([...value, newUrl]); // Append the new URL to the existing list
//   };

//   return (
//     <div className="mb-4 flex flex-wrap items-center gap-4">
//       {value.map((url) => (
//         <div key={url} className="relative w-[200px] h-[200px]">
//           <div className="absolute top-0 right-0 z-10">
//             <Button
//               type="button"
//               onClick={() => onRemove(url)}
//               size="sm"
//               className="bg-red-500 text-white"
//             >
//               <Trash className="h-4 w-4" />
//             </Button>
//           </div>
//           <Image
//             src={url}
//             alt="Uploaded Image"
//             className="object-cover rounded-lg"
//             fill
//           />
//         </div>
//       ))}

//       <CldUploadWidget
//         uploadPreset="lg0dlgjw" // Replace with your actual Cloudinary upload preset
//         onSuccess={handleSuccess}
//       >
//         {({ open }) => (
//           <Button
//             type="button"
//             onClick={() => open?.()}
//             className="w-[200px] h-[200px] bg-gray-200 flex justify-center items-center border border-dashed"
//           >
//             <Plus className="w-6 h-6 text-gray-500" />
//           </Button>
//         )}
//       </CldUploadWidget>
//     </div>
//   );
// };

// export default ImageUpload;


// import { CldUploadWidget } from "next-cloudinary";
// import { Plus, Trash } from "lucide-react";

// import { Button } from "../ui/button";
// import Image from "next/image";

// interface ImageUploadProps {
//   value: string[];
//   onChange: (value: string) => void;
//   onRemove: (value: string) => void;
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   onChange,
//   onRemove,
//   value,
// }) => {
//   const onUpload = (result: any) => {
//     onChange(result.info.secure_url);
//   };

//   return (
//     <div>
//       <div className="mb-4 flex flex-wrap items-center gap-4">
//         {value.map((url) => (
//           <div key={url} className="relative w-[200px] h-[200px]">
//             <div className="absolute top-0 right-0 z-10">
//               <Button type="button" onClick={() => onRemove(url)} size="sm" className="bg-red-1 text-white">
//                 <Trash className="h-4 w-4" />
//               </Button>
//             </div>
//             <Image
//               src={url}
//               alt="collection"
//               className="object-cover rounded-lg"
//               fill
//             />
//           </div>
//         ))}
//       </div>

//       <CldUploadWidget uploadPreset="myyu6boo" onUploadAdded={onUpload}>
//         {({ open }) => {
//           return (
//             <Button type="button" onClick={() => open()} className="bg-grey-1 text-white">
//               <Plus className="h-4 w-4 mr-2" />
//               Upload Image
//             </Button>
//           );
//         }}
//       </CldUploadWidget>
//     </div>
//   );
// };

// export default ImageUpload;


// "use client";

// import React, { useState } from "react";
// import { CldUploadWidget } from "next-cloudinary";
// import { Plus, Trash } from "lucide-react";
// import Image from "next/image";
// import { Button } from "../ui/button";

// interface ImageUploadProps {
//   value: string[];
//   onChange: (value: string[]) => void;
//   onRemove: (value: string) => void;
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   value = [],
//   onChange,
//   onRemove,
// }) => {
//   const handleUpload = (result: { info: { secure_url: string } }) => {
//     const newImageUrl = result.info.secure_url;
//     onChange([...value, newImageUrl]); // Append the new image URL to the existing array
//   };

//   return (
//     <div>
//       {/* Render uploaded images */}
//       <div className="mb-4 flex flex-wrap items-center gap-4">
//         {value.map((url) => (
//           <div key={url} className="relative w-[200px] h-[200px]">
//             {/* Delete Button */}
//             <div className="absolute top-0 right-0 z-10">
//               <Button
//                 type="button"
//                 onClick={() => onRemove(url)}
//                 size="sm"
//                 className="bg-red-500 text-white"
//               >
//                 <Trash className="h-4 w-4" />
//               </Button>
//             </div>
//             {/* Display Image */}
//             <Image
//               src={url}
//               alt="Uploaded Image"
//               className="object-cover rounded-lg"
//               fill
//             />
//           </div>
//         ))}
//       </div>

//       {/* Cloudinary Upload Button */}
//       <CldUploadWidget
//         uploadPreset="lg0dlgjw" // Replace with your actual Cloudinary upload preset
//         onSuccess={handleUpload} // Handle upload success
//       >
//         {({ open }) => (
//           <Button
//             type="button"
//             onClick={() => open?.()}
//             className="w-[200px] h-[200px] bg-gray-200 flex justify-center items-center border border-dashed"
//           >
//             <Plus className="w-6 h-6 text-gray-500" />
//             Upload Image
//           </Button>
//         )}
//       </CldUploadWidget>
//     </div>
//   );
// };

// export default ImageUpload;




"use client";

import React, { useState } from "react";
import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value = [],
  onChange,
  onRemove,
}) => {
  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info !== 'string') {
      const newImageUrl = result.info.secure_url;
      onChange([...value, newImageUrl]); // Append the new image URL to the existing array
    }
  };

  return (
    <div>
      {/* Render uploaded images */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px]">
            {/* Delete Button */}
            <div className="absolute top-0 right-0 z-10">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                size="sm"
                className="bg-red-500 text-white"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            {/* Display Image */}
            <Image
              src={url}
              alt="Uploaded Image"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>

      {/* Cloudinary Upload Button */}
      <CldUploadWidget
        uploadPreset="lg0dlgjw" // Replace with your actual Cloudinary upload preset
        onSuccess={handleUpload} // Handle upload success
      >
        {({ open }) => (
          <Button
            type="button"
            onClick={() => open?.()}
            className="w-[200px] h-[200px] bg-gray-200 flex justify-center items-center border border-dashed"
          >
            <Plus className="w-6 h-6 text-gray-500" />
            Upload Image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;