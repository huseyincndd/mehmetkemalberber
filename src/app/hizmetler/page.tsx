"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

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

export default function Services() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Hizmetlerimiz"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hizmetlerimiz
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Premium erkek saç kesimi, sakal tasarımı ve profesyonel bakım hizmetleri
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
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
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 