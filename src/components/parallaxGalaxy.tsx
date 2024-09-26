import React, { useEffect, useRef, ReactNode } from "react";

interface ParallaxGalaxyProps {
  children: ReactNode;
}

const ParallaxGalaxy: React.FC<ParallaxGalaxyProps> = ({ children }) => {
  const galaxyRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (galaxyRef.current) {
      // Adjust background positions based on scroll
      const layers =
        galaxyRef.current.querySelectorAll<HTMLElement>(".parallax-layer");
      layers.forEach((layer) => {
        const depth = layer.getAttribute("data-depth");
        const movement = scrollPosition * (depth ? parseFloat(depth) : 0);
        layer.style.transform = `translateY(${movement}px)`;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-auto overflow-hidden bg-black" ref={galaxyRef}>
      {/* Parallax Layers */}
      <div
        className="parallax-layer absolute inset-0 bg-[url('/path-to-stars-image.jpg')]"
        data-depth="0.1"
      />
      <div
        className="parallax-layer absolute inset-0 bg-[url('/path-to-galaxy-foreground-image.png')]"
        data-depth="0.3"
      />
      <div
        className="parallax-layer absolute inset-0 bg-[url('/path-to-far-stars-image.png')]"
        data-depth="0.05"
      />

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxGalaxy;
