import { useState } from "react";

export default function Gallery() {
  const images = [
    '/G6.webp',
    '/G7.webp',
    '/G8.webp',
    '/G9.avif',
    '/g10.avif',
    '/G1.webp',
    '/G2.webp',
    '/G3.webp',
    '/G4.webp',

  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="bg-white py-24" id="gallery">
      {/* Heading */}
      <h2 className="text-4xl font-serif text-center mb-16">
        Gallery
      </h2>

      {/* Container with side spacing */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Gapless grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-500 hover:scale-105 block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={activeImage}
            alt="Expanded"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

