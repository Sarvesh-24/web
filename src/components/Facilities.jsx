export default function Facilities() {
  return (
    <section className="py-24 bg-white">
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-black mb-4">Facilities</h2>
        <div className="w-12 h-[2px] bg-[#9AAA43] mx-auto" />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="text-center">
          <img
            src="/boating.webp"
            alt="Delicious Cooking"
            className="w-full h-[380px] object-cover mb-8"
          />
          <h3 className="text-2xl font-serif text-black mb-4">
            Boating
          </h3>
          <p className="text-gray-600 leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <a
            href="#"
            className="text-sm uppercase tracking-widest text-[#9AAA43] hover:underline"
          >
            Read More
          </a>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <img
            src="/camp.webp"
            alt="Swimming Pool"
            className="w-full h-[380px] object-cover mb-8"
          />
          <h3 className="text-2xl font-serif text-black mb-4">
            Camping Tent
          </h3>
          <p className="text-gray-600 leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <a
            href="#"
            className="text-sm uppercase tracking-widest text-[#9AAA43] hover:underline"
          >
            Read More
          </a>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <img
            src="/parking.webp"
            alt="Garden Terrace"
            className="w-full h-[380px] object-cover mb-8"
          />
          <h3 className="text-2xl font-serif text-black mb-4">
            Parking 
          </h3>
          <p className="text-gray-600 leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <a
            href="#"
            className="text-sm uppercase tracking-widest text-[#9AAA43] hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
