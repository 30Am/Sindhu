import Image from "next/image";

const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/12.png",
];

export default function TrustBar() {
  const scrollBrands = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-[#f9f9fe] border-t border-b border-[#e8e8f0] py-6 sm:py-10 flex items-center overflow-hidden w-full relative">
      <div className="w-full relative flex items-center overflow-hidden">
        {/* Fading margins for the continuous loop effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#f9f9fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#f9f9fe] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee items-center py-4">
          {scrollBrands.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="h-[90px] w-[90px] sm:h-[130px] sm:w-[130px] mx-4 sm:mx-6 flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 group relative"
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={logo}
                  alt={`Partner logo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
