"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Klasik saç kesimi",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Modern saç modeli",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Sakal şekillendirme",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    alt: "Saç bakımı",
  },
  {
    src: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Saç boyama",
  },
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "VIP hizmet",
  },
  {
    src: "https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Saç ve sakal kesimi",
  },
  {
    src: "https://images.unsplash.com/photo-1519500528352-2d1460421452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Berber salonu iç mekan",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galeri
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Berber Studio'da yapılan çalışmalardan örnekler
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-0 right-0 -mt-12 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-center text-white">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
} 