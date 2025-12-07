// function HeroImage() {
//   return (
//     <section
//       className="h-[520px] bg-cover bg-center relative"
//       style={{ backgroundImage: "url('/hero.jpg')" }}
//     />
//   );
// }

// export default HeroImage;


function HeroImage() {
  return (
    <section
      className="
        relative
        w-full
        h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px]
        bg-cover bg-center
      "
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Bottom gradient */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          h-32 sm:h-40 md:h-48 lg:h-56
          bg-gradient-to-b from-transparent to-[#9cab3b]
        "
      />
    </section>
  );
}

export default HeroImage;
