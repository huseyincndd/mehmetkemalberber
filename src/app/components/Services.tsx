import Image from "next/image";

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
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hizmetlerimiz
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Berber Studio&apos;da size sunduğumuz profesyonel hizmetler
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {services.map((service) => (
            <div key={service.name} className="group relative">
              <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <p className="text-lg font-medium text-amber-600">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 