import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Height of Home section (adjust if needed)
      const homeHeight = window.innerHeight * 0.6;

      setVisible(window.scrollY > homeHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-cyan-500/90 text-black
        shadow-lg shadow-cyan-500/30
        backdrop-blur-md
        transition-all duration-300 ease-out
        hover:scale-110 hover:bg-cyan-400
        active:scale-95
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
