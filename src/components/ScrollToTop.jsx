import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = window.innerHeight * 0.6;
      setVisible(window.scrollY > homeHeight);
    };

    handleScroll();

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
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`
        group fixed bottom-6 right-6 z-50
        h-12 w-12 rounded-full
        flex items-center justify-center

        bg-gradient-to-br from-cyan-400 to-blue-500
        text-black

        shadow-[0_0_15px_rgba(34,211,238,0.25)]
        transition-all duration-500 ease-out

        hover:scale-110
        hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
        active:scale-95

        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"
        }
      `}
    >
      {/* Animated Gradient Ring */}
      <span
        className="
          absolute -inset-[3px] rounded-full
          bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400
          opacity-70 blur-[5px]
          animate-scroll-glow
          group-hover:opacity-100
        "
      />

      {/* Button Icon */}
      <FaArrowUp
        size={17}
        className="
          relative z-10
          transition-transform duration-300
          group-hover:-translate-y-1
        "
      />
    </button>
  );
};

export default ScrollToTop;
