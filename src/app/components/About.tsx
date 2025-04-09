import Image from "next/image";

export default function About() {
  return (
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
  );
} 