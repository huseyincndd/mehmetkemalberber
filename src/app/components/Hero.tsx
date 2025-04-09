import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
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
            <span className="text-sm font-medium">Şehrin&apos;in En İyi Erkek Kuaförü</span>
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
  );
} 