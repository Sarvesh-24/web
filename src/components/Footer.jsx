export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto 
        px-6 sm:px-10 lg:px-12 
        pt-16 sm:pt-24 lg:pt-28 
        pb-20 sm:pb-28 lg:pb-36
      ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-center">

          {/* LEFT TEXT */}
          <div className="text-base sm:text-lg leading-8 sm:leading-9 font-serif 
            max-w-md text-center md:text-left mx-auto md:mx-0">
            Cocohut Devbagh is a tranquil beachside resort in Devbag, Malvan,
            offering a peaceful stay just steps away from the sea.
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <img
              src="/logo-white.png"
              alt="Cocohut Devbagh Home Stay"
              className="w-28 sm:w-32 lg:w-36 opacity-90"
            />
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-6 sm:space-y-10 
            text-center md:text-right">
            <div className="text-sm sm:text-base leading-7 sm:leading-8">
              935 Devbag Sangam Road, Malvan, Maharashtra <br />
              India, 416606
            </div>

            <div className="text-lg sm:text-xl tracking-wider">
              982-084-5575
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/20 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 
          text-xs sm:text-sm text-gray-300 text-center md:text-left">
          Copyright © 2025 Cocohut Devbagh
        </div>
      </div>

    </footer>
  );
}
