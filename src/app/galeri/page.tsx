"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://whairconcept.com.tr/uploads/2021/09/erkek-sac-kesimi.webp",
    alt: "Klasik Saç Kesimi",
    category: "Saç Kesimi"
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Sakal Şekillendirme",
    category: "Sakal"
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
    alt: "Cilt Bakımı",
    category: "Bakım"
  },
  {
    src: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Saç Boyama",
    category: "Saç Boyama"
  },
  {
    src: "https://noxxhair.com/wp-content/uploads/2025/01/Flat-Top-with-High-Fade-scaled-1-1536x1025.jpg",
    alt: "Çocuk Saç Kesimi",
    category: "Saç Kesimi"
  },
  {
    src: "https://whairconcept.com.tr/uploads/2021/09/vip-bay-kuaforu.webp",
    alt: "VIP Paket",
    category: "VIP"
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Modern Saç Kesimi",
    category: "Saç Kesimi"
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Saç Bakımı",
    category: "Bakım"
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    alt: "Saç ve Sakal Kesimi",
    category: "Saç Kesimi"
  },
  {
    src: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Saç Stili",
    category: "Saç Kesimi"
  },
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "VIP Hizmet",
    category: "VIP"
  },
  {
    src: "https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Saç ve Sakal Kesimi",
    category: "Saç Kesimi"
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ["Tümü", ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = selectedCategory === "Tümü" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with proper spacing */}
      <div className="pt-16"> {/* Add padding to push content down below header */}
        <div className="relative bg-black py-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Galeri"
              fill
              className="object-cover opacity-40" 
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Galeri
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Çalışmalarımızdan ve salonumuzdan kareler
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-white"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-500 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="mt-4 text-center text-white text-lg">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
} 