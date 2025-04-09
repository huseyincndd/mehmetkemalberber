"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed w-full z-20 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-black/90 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold transition-colors duration-300"
            >
              <span className={`${scrolled ? "text-amber-600" : "text-amber-500"}`}>Berber</span>
              <span className={`${scrolled ? "text-gray-900" : "text-white"}`}>Studio</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Ana Sayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/hizmetler"
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Hizmetler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/galeri"
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Galeri
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/hakkimizda"
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Hakkımızda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/iletisim"
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/iletisim"
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                scrolled
                  ? "bg-amber-600 text-white hover:bg-amber-700"
                  : "bg-amber-500 text-white hover:bg-amber-600"
              }`}
            >
              Randevu Al
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-amber-600 hover:bg-gray-100"
                  : "text-white hover:text-white hover:bg-black/10"
              }`}
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menüyü aç</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-xl mt-1">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hizmetler"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hizmetler
            </Link>
            <Link
              href="/galeri"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              href="/hakkimizda"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <Link
              href="/iletisim"
              className="block px-3 py-3 mt-4 rounded-md text-base font-medium bg-amber-600 text-white text-center hover:bg-amber-700 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 