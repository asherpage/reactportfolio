import { useEffect } from "react";
import { gsap } from "gsap";

const useSmoothScroll = (targetRef) => {
  useEffect(() => {
    gsap.registerPlugin("scrollTo");

    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const target = targetRef.current;
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target.offsetTop,
          autoKill: false,
        },
      });
    };

    const triggerSmoothScroll = () => {
      document.querySelectorAll(".smooth-scroll-trigger").forEach((link) => {
        link.addEventListener("click", handleSmoothScroll);
      });
    };

    triggerSmoothScroll();

    return () => {
      document.querySelectorAll(".smooth-scroll-trigger").forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, [targetRef]);
};

export default useSmoothScroll;
