import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const NestedText = () => {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "50% 50%",
          end: "100% 50%",
          scrub: 0.3,
          pin: true,
        },
      });

      tl.to(".text1", { scale: 1.5, opacity: 1, color: "#ff5733" }, "a")
        // .to(".text2", { scale: 1.2, opacity: 1, color: "#33ff57" }, "b")
        // .to(".text3", { scale: 1.2, opacity: 1, color: "#3357ff" }, "c");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative flex flex-col items-center gap-5 p-10">
      {/* First Text Block */}
      <div className="w-full text-center  text1 md:text-5xl font-bold opacity-0 transition-all duration-500">
        Welcome to Climax Hosiery
      </div>

      {/* Second Text Block
      <div className="text2 text-3xl font-bold opacity-50 transition-all duration-500">
        Smooth Scroll Effects
      </div> */}

      {/* Third Text Block
      <div className="text3 text-3xl font-bold opacity-50 transition-all duration-500">
        Powered by React & GSAP
      </div> */}
    </div>
  );
};

export default NestedText;
