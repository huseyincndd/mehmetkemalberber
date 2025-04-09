"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

const services = [
  {
    name: "Klasik Saç Kesimi",
    description: "Profesyonel ekibimizle klasik ve modern saç kesimi hizmetleri sunuyoruz. Her müşterinin yüz şekline ve tarzına uygun kesimler yapıyoruz.",
    image: "https://whairconcept.com.tr/uploads/2021/09/erkek-sac-kesimi.webp",
    price: "150 TL",
  },
  {
    name: "Sakal Şekillendirme",
    description:
      "Yüz şeklinize ve tarzınıza uygun profesyonel sakal kesimi ve şekillendirme.",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: "₺100",
  },
  {
    name: "Cilt Bakımı",
    description:
      "Özel sıcak havlu uygulaması ve erkeklere özel cilt bakım ürünleriyle yüz bakımı.",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
    price: "₺200",
  },
  {
    name: "Saç Boyama",
    description:
      "Kaliteli ürünlerle doğal görünümlü gri kapatma veya renk değişimi.",
    image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    price: "₺350",
  },
  {
    name: "Çocuk Saç Kesimi",
    description:
      "Çocuklar için konforlu ve eğlenceli bir ortamda profesyonel saç kesimi.",
    image: "https://noxxhair.com/wp-content/uploads/2025/01/Flat-Top-with-High-Fade-scaled-1-1536x1025.jpg",
    price: "₺100",
  },
  {
    name: "VIP Paket",
    description:
      "Saç kesimi, sakal şekillendirme, cilt bakımı ve içecek ikramı içeren premium hizmet.",
    image: "https://whairconcept.com.tr/uploads/2021/09/vip-bay-kuaforu.webp",
    price: "₺450",
  },
];

interface GalleryImage {
  src: string;
  alt: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Gallery Images
const galleryImages = [
  {
    src: "https://whairconcept.com.tr/uploads/2021/09/erkek-sac-kesimi.webp",
    alt: "Klasik Saç Kesimi",
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Sakal Şekillendirme",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
    alt: "Cilt Bakımı",
  },
  {
    src: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Saç Boyama",
  },
  {
    src: "https://noxxhair.com/wp-content/uploads/2025/01/Flat-Top-with-High-Fade-scaled-1-1536x1025.jpg",
    alt: "Çocuk Saç Kesimi",
  },
  {
    src: "https://whairconcept.com.tr/uploads/2021/09/vip-bay-kuaforu.webp",
    alt: "VIP Paket",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Modern Saç Kesimi",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Saç Bakımı",
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form verileri:", formData);
    alert("Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Berber Studio"
              fill
              className="object-cover object-center transform scale-110 animate-subtle-zoom"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
              aria-hidden="true"
            ></div>
          </div>

          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            <svg
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="hero-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <rect width="100%" height="100%" fill="none" />
                  <path
                    d="M0 20h40M20 0v40"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="block mb-2 text-xl md:text-2xl tracking-wider font-light">Stil ve Özgüven</span>
              <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700">
                BERBER STUDIO
              </span>
              <span className="block mt-2 text-2xl md:text-3xl font-light">ile Tanışın</span>
            </h1>
            
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              Premium erkek saç kesimi, sakal tasarımı ve profesyonel bakım hizmetleri. 
              Modern teknikler ve uzman berberlerimizle kişisel tarzınızı keşfedin.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Link
                href="#services"
                className="w-full py-4 px-8 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-amber-600/30 text-center"
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="#contact"
                className="w-full py-4 px-8 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-full transition duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm text-center"
              >
                Randevu Al
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-amber-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-white text-sm ml-2">5.0 (400+ Değerlendirme)</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <span className="text-sm font-medium">2023 İstanbul'un En İyi Berberi Ödülü</span>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <a href="#services" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Hizmetlerimiz
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Premium erkek saç kesimi, sakal tasarımı ve profesyonel bakım hizmetleri
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col h-[200px]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-semibold text-amber-600">
                        {service.price}
                      </span>
                      <Link
                        href="/iletisim"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
                      >
                        Randevu Al
                        <svg
                          className="ml-2 -mr-1 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/hizmetler"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
              >
                Tüm Hizmetleri Görüntüle
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Hakkımızda
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Berber Studio, modern erkek saç bakımı ve tıraş hizmetleri sunan
                  premium bir berber salonudur. 2010 yılında kurulan salonumuz, en
                  yüksek kalitede hizmet sunmayı ve her müşteriye özel deneyim
                  yaşatmayı hedeflemektedir.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Deneyimli Ekip
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Uzman ve deneyimli berberlerimiz en son teknik ve trendleri
                        takip ederek size en iyi hizmeti sunmaktadır.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Kaliteli Ürünler
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Sadece en kaliteli ürünleri kullanarak saçınızın ve
                        cildinizin sağlığını koruyoruz.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Müşteri Memnuniyeti
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Müşteri memnuniyeti bizim için en önemli öncelik. Salondan
                        mutlu ayrılmanız için elimizden geleni yapıyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Berber Studio İç Mekan"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900">Ekibimiz</h3>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Ahmet Yılmaz"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">
                    Ahmet Yılmaz
                  </h4>
                  <p className="text-sm text-amber-600">Kurucu & Baş Berber</p>
                  <p className="mt-2 text-base text-gray-500">
                    15 yıllık deneyimiyle erkek saç kesiminde uzman.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Mehmet Demir"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">
                    Mehmet Demir
                  </h4>
                  <p className="text-sm text-amber-600">Kıdemli Berber</p>
                  <p className="mt-2 text-base text-gray-500">
                    Sakal şekillendirme ve klasik tıraş konusunda uzman.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                      alt="Can Yılmaz"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900">
                    Can Yılmaz
                  </h4>
                  <p className="text-sm text-amber-600">Berber</p>
                  <p className="mt-2 text-base text-gray-500">
                    Modern kesimler ve saç boyama konusunda uzman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
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

            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.slice(0, 6).map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-white"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
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
            
            <div className="mt-12 text-center">
              <Link
                href="/galeri"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Tüm Galeriyi Görüntüle
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
              onClick={closeModal}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  className="absolute top-4 right-4 text-white hover:text-amber-500 z-10"
                  onClick={closeModal}
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
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <p className="mt-4 text-center text-white text-lg">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Başarılarımız
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Yılların tecrübesi ve kaliteli hizmet anlayışımızla elde ettiğimiz başarılar
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Achievement 1 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">En İyi Erkek Kuaförü</h3>
                <p className="text-gray-500">2023 Yılı Şehir Kuaförler Birliği</p>
              </div>

              {/* Achievement 2 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kalite Sertifikası</h3>
                <p className="text-gray-500">ISO 9001:2015 Kalite Belgesi</p>
              </div>

              {/* Achievement 3 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Müşteri Memnuniyeti</h3>
                <p className="text-gray-500">4.9/5 Yıldız Müşteri Değerlendirmesi</p>
              </div>

              {/* Achievement 4 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">10+ Yıl Tecrübe</h3>
                <p className="text-gray-500">Profesyonel Hizmet Deneyimi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-100 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                İletişim
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Bize ulaşın, randevu alın veya sorularınızı iletin
              </p>
            </div>

            <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  İletişim Bilgileri
                </h3>
                <div className="mt-6 space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-amber-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Atatürk Caddesi No:123</p>
                      <p>Mecidiyeköy, İstanbul</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-amber-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>+90 (212) 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-amber-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>info@berberstudio.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900">Çalışma Saatleri</h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between">
                      <p className="text-gray-500">Pazartesi - Cuma</p>
                      <p className="text-gray-900 font-medium">09:00 - 20:00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-500">Cumartesi</p>
                      <p className="text-gray-900 font-medium">10:00 - 18:00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-500">Pazar</p>
                      <p className="text-gray-900 font-medium">Kapalı</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900">Sosyal Medya</h3>
                  <div className="mt-6 flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-600"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-600"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-600"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <div className="bg-white py-10 px-6 shadow-xl rounded-lg sm:px-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">
                    Randevu Formu
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ad Soyad
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telefon
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Hizmet
                      </label>
                      <div className="mt-1">
                        <select
                          name="service"
                          id="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md"
                        >
                          <option value="">Seçiniz</option>
                          <option value="klasik-sac-kesimi">Klasik Saç Kesimi</option>
                          <option value="sakal-sekillendirme">Sakal Şekillendirme</option>
                          <option value="cilt-bakimi">Cilt Bakımı</option>
                          <option value="sac-boyama">Saç Boyama</option>
                          <option value="cocuk-sac-kesimi">Çocuk Saç Kesimi</option>
                          <option value="vip-paket">VIP Paket</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mesaj
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                      >
                        Gönder
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </div>
    </main>
  );
}
