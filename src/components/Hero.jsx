export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#a8ad47] via-[#a8ad47]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 pb-24">
        
        <h1 className="text-white text-3xl md:text-5xl font-serif max-w-4xl">
          Shirley’s Town House is an authentic turn-of-the-century
          restored brownstone town house
        </h1>

        <p className="text-white/90 mt-6 max-w-2xl">
          Built in 1870, located on historic Beacon Street.
        </p>

      </div>

    </section>
  );
}
