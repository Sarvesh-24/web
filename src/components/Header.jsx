import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[80px] lg:h-[110px]">

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Left Navigation (Desktop) */}
          <nav className="hidden lg:flex space-x-10 pb-[18px] text-[16px] font-serif">
            <a className="text-lime-600">Home</a>
            <a className="hover:text-lime-600 transition">Rooms</a>
            <a className="hover:text-lime-600 transition">Facilities</a>
            <a className="hover:text-lime-600 transition">About</a>
            <a className="hover:text-lime-600 transition">Contact</a>
          </nav>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center lg:pb-[8px]">
            <div className="flex flex-col items-center text-center leading-none font-serif">
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-wide text-gray-700">
                Cocohut Devbagh
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-gray-600 mt-[2px]">
                Home Stay
              </span>
              <span className="text-[7px] sm:text-[8px] uppercase tracking-wide text-gray-400 mt-[3px]">
                Malvan
              </span>
              <span className="text-[7px] sm:text-[8px] tracking-[0.3em] text-gray-500 mt-[4px]">
                ★★★★★
              </span>
            </div>
          </div>

          {/* Call Text */}
          <div className="hidden lg:block pb-[18px] text-[16px] font-serif text-lime-600">
            Call us at: 982-084-5575
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 text-center font-serif space-y-3">
            <a className="block text-lime-600">Home</a>
            <a className="block hover:text-lime-600" href="/gallery">Gallery</a>
            <a className="block hover:text-lime-600">Facilities</a>
            <a className="block hover:text-lime-600">About</a>
            <a className="block hover:text-lime-600">Contact</a>
            <div className="pt-2 text-sm text-lime-600">
              Call us at: 982-084-5575
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
