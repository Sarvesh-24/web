import { FaWifi, FaPlug, FaDesktop, FaSnowflake } from "react-icons/fa";


function About() {
  return (
    <section className="bg-white">
  <div
    className="
      max-w-6xl mx-auto
      px-4 sm:px-6 lg:px-8
      grid grid-cols-1 lg:grid-cols-2
      gap-12 lg:gap-40
    "
  >
    {/* IMAGE — FIRST ALWAYS */}
    <div
        className="
            relative
            -mt-12        /* mobile */
            md:-mt-24     /* tablet */
            lg:-mt-28     /* desktop/laptop */
            z-20
            flex justify-center lg:justify-start
        "
    >
    
      <img
        src="/about.jpg"
        alt="About"
        className="
          w-full
          max-w-[360px] sm:max-w-[420px] lg:w-[460px]
          h-[260px] sm:h-[360px] lg:h-[640px]
          object-cover
        "
      />
    </div>

    {/* CONTENT */}
    <div
      className="
        lg:pt-24
        lg:-ml-6
        text-center lg:text-left
      "
    >
      <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-serif text-black mb-6 lg:mb-10">
        About
      </h2>

      <p className="uppercase tracking-[0.2em] text-[11px] sm:text-[12px] font-semibold text-black mb-6 lg:mb-8">
        6 rooms, all equipped with great facilities
      </p>

      <p className="text-sm sm:text-[16px] leading-relaxed lg:leading-[1.8] text-gray-500 mb-10 lg:mb-14 max-w-md mx-auto lg:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua ut
        enim ad minim veniam, quis nostrud exercitation.
      </p>

      <ul className="space-y-5 lg:space-y-6 max-w-md mx-auto lg:mx-0">
        <li className="flex items-center gap-4 justify-start">
            <FaWifi className="text-[#9cab3b] text-lg w-5 shrink-0" />
            <span className="text-gray-500">Free Wi-Fi</span>
        </li>

        <li className="flex items-center gap-4 justify-start">
            <FaPlug className="text-[#9cab3b] text-lg w-5 shrink-0" />
            <span className="text-gray-500">Charging Points</span>
        </li>

        <li className="flex items-center gap-4 justify-start">
            <FaDesktop className="text-[#9cab3b] text-lg w-5 shrink-0" />
            <span className="text-gray-500">Work Tables</span>
        </li>

        <li className="flex items-center gap-4 justify-start">
            <FaSnowflake className="text-[#9cab3b] text-lg w-5 shrink-0" />
            <span className="text-gray-500">Air Conditioner</span>
        </li>
        </ul>

    </div>
  </div>
</section>

  );
}

export default About;
