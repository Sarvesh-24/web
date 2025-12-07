import { FaGoogle, FaStar } from "react-icons/fa";

export default function GoogleReviewCard() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        
        <a
          href="http://google.com/travel/search?gsas=1&ts=GhwSGhIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyAhAA&qs=MjdDaVVJcU5lWl9kN0k1N0w5QVJENXY3WHd6LXJ4bHZFQkdnMHZaeTh4TVd4a2FqRXlibXhzRUFFOAI&ap=ugEHcmV2aWV3cw&ictx=111&sa=X&ved=0CAAQ5JsGahcKEwjIjpOziquRAxUAAAAAHQAAAAAQBA"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xl border border-gray-200 rounded-md px-10 py-8 flex items-center justify-between hover:shadow-lg transition"
        >
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaGoogle className="text-2xl text-[#4285F4]" />
              <span className="text-lg font-semibold text-black">
                Google Reviews
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-black">5</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${
                      i < 4 ? "text-yellow-400" : "text-yellow-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-1">
              18 reviews
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-sm uppercase tracking-widest text-black font-medium hover:underline">
            View Reviews →
          </div>

        </a>
      </div>
    </section>
  );
}
