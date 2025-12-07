// function HeroContent() {
//   return (
//     <section className="bg-[#9cab3b] text-white text-center">
//       <div className="max-w-3xl mx-auto pt-24 pb-48">
//         <h1 className="text-[42px] font-serif mb-6">
//           Shirley’s Home Stay
//         </h1>

//         <p className="text-[22px] font-serif leading-relaxed">
//           Shirley’s Town House is an authentic turn-of-the-century restored
//           brownstone town house built in 1870 located on historic Beacon Street.
//         </p>

//         <div className="mt-10 text-sm underline">
//           2855 Nelsonville Rd, Boston, Massachusetts (MA), 40107
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroContent;


import { FaMapMarkerAlt } from "react-icons/fa";

function HeroContent() {
  return (
    <section className="bg-[#9cab3b] text-white text-center">
      <div
        className="
          max-w-4xl mx-auto
          pt-12 sm:pt-20 lg:pt-24
          pb-20 sm:pb-36 lg:pb-48
          px-4 sm:px-6
        "
      >
        {/* Title */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-[42px]
            font-serif
            mb-4 sm:mb-6
          "
        >
          Cocohut Home Stay
        </h1>

        {/* Description */}
        <p
          className="
            text-base sm:text-lg md:text-xl lg:text-[22px]
            font-serif
            leading-7 sm:leading-relaxed
            mb-8 sm:mb-10
          "
        >
          Cocohut Devbag is a tranquil beachside resort in Devbag, Malvan,
          offering a peaceful stay just steps away from the sea.
        </p>

        {/* Location */}
        <div className="mt-8 sm:mt-12">
          <FaMapMarkerAlt className="mx-auto text-xl sm:text-2xl mb-2 sm:mb-3" />
          <p
            className="
              font-serif
              text-sm sm:text-base lg:text-[18px]
              underline
              leading-6 sm:leading-relaxed
            "
          >
            935 Devbag Sangam Road, Malvan, Maharashtra <br />
            India, 416606
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroContent;
