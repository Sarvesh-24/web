export default function CTA() {
  return (
    <section className="bg-white text-center 
      py-16 sm:py-20 lg:py-24 
      px-6 sm:px-8">

      {/* divider */}
      <div className="w-12 sm:w-14 h-[2px] bg-[#9AAA43] mx-auto mb-6" />

      {/* heading */}
      <h2 className="
        text-2xl sm:text-3xl lg:text-4xl
        font-serif text-black mb-4 sm:mb-6
      ">
        Planning a trip to Malvan?
      </h2>

      {/* subtitle */}
      <p className="
        max-w-3xl mx-auto
        text-base sm:text-lg
        text-gray-600
        leading-7 sm:leading-8
        mb-10 sm:mb-12
      ">
        Cocohut Devbagh is a peaceful beachside retreat in Malvan, offering a
        perfect escape surrounded by pristine beaches, scenic sunsets, and the
        calm of nature. Featuring comfortable stays with modern facilities,
        it’s an ideal choice for travelers seeking relaxation and coastal charm.
      </p>

      {/* buttons */}
      <div className="
        flex flex-col sm:flex-row
        justify-center
        gap-4 sm:gap-6
      ">
        {/* Make My Trip */}
        <a
          href="https://www.makemytrip.com/hotels/coco_hut_devbaug-details-malvan.html"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 sm:px-8
            py-3 sm:py-4
            bg-[#9AAA43] text-white
            uppercase tracking-widest
            text-xs sm:text-sm
            font-semibold
            hover:bg-[#879535] transition
          "
        >
          Make My Trip
        </a>

        {/* Booking.com */}
        <a
          href="https://www.booking.com/hotel/in/coco-hut-devbaug.en-gb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 sm:px-8
            py-3 sm:py-4
            border-2 border-[#9AAA43]
            text-[#9AAA43]
            uppercase tracking-widest
            text-xs sm:text-sm
            font-semibold
            hover:bg-[#9AAA43] hover:text-white transition
          "
        >
          Booking.com
        </a>
      </div>
    </section>
  );
}

