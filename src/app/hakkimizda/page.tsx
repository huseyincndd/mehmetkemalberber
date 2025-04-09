"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    role: "Kurucu & Baş Berber",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "20 yıllık deneyimiyle modern ve klasik kesim tekniklerinde uzmanlaşmış, sektörün önde gelen isimlerinden.",
  },
  {
    name: "Mehmet Demir",
    role: "Sakal Uzmanı",
    image: "https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Sakal şekillendirme ve tasarımında uzmanlaşmış, müşterilerin yüz şekillerine göre özel tasarımlar yapıyor.",
  },
  {
    name: "Ali Kaya",
    role: "Saç Tasarım Uzmanı",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Modern saç kesim tekniklerinde uzman, trendleri yakından takip eden ve müşterilerine özel tasarımlar sunan deneyimli bir berber.",
  },
];

const values = [
  {
    title: "Kalite",
    description: "En kaliteli ürünler ve ekipmanlarla hizmet veriyoruz.",
    icon: (
      <svg
        className="w-12 h-12 text-amber-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Hijyen",
    description: "Salonumuzda en yüksek hijyen standartlarını uyguluyoruz.",
    icon: (
      <svg
        className="w-12 h-12 text-amber-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Müşterilerimizin memnuniyeti bizim için her şeyden önemli.",
    icon: (
      <svg
        className="w-12 h-12 text-amber-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
  {
    title: "Sürekli Gelişim",
    description: "Sektördeki yenilikleri takip ediyor ve kendimizi sürekli geliştiriyoruz.",
    icon: (
      <svg
        className="w-12 h-12 text-amber-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Hakkımızda"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hakkımızda
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              2010'dan beri kaliteli hizmet anlayışıyla sizlere hizmet veriyoruz
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Hikayemiz
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  2010 yılında küçük bir berber dükkanı olarak başladığımız yolculuğumuzda, bugün şehrin en prestijli erkek kuaförlerinden biri haline geldik. Müşteri memnuniyetini her şeyin üstünde tutan anlayışımız ve sürekli kendimizi geliştirme çabamız sayesinde, sektörde öncü bir konuma ulaştık.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Modern teknikleri klasik berberlik sanatıyla birleştirerek, her müşterimize özel bir deneyim sunuyoruz. Salonumuzda sadece saç kesimi değil, erkekler için özel tasarlanmış bir deneyim yaşatıyoruz.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1634302086887-13b5584e391b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt="Salon İç Mekan"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Değerlerimiz
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Müşterilerimize en iyi hizmeti sunmak için benimsediğimiz değerler
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ekibimiz
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Deneyimli ve uzman kadromuzla sizlere en iyi hizmeti sunuyoruz
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-amber-600">{member.role}</p>
                    <p className="mt-2 text-base text-gray-500">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-amber-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Hemen randevu alın</span>
              <span className="block text-amber-200">
                Size özel hizmet için buradayız.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50"
                >
                  Randevu Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 