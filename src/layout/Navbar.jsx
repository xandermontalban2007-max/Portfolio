import { useEffect, useState } from "react";

import Logo from "../components/navigation/Logo";
import DesktopNav from "../components/navigation/DesktopNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        flex justify-center
        pt-5
        transition-all duration-500
      `}
    >
      <div
        className={`
          flex
          h-16
          w-[95%]
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          px-6
          transition-all
          duration-500

          ${
            scrolled
              ? "border-white/70 bg-white/70 shadow-2xl backdrop-blur-2xl"
              : "border-white/40 bg-white/45 backdrop-blur-xl"
          }
        `}
      >
        <Logo />

        <DesktopNav />
      </div>

      {scrolled && (
        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-70" />
      )}
    </header>
  );
}