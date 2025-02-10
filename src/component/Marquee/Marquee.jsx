import React, { memo } from "react";
import Marquee from "react-fast-marquee";

const MyMarquee = ({ title }) => (
  <div className="w-full bg-black py-4 overflow-hidden">
    <Marquee speed={50} gradient={false} pauseOnHover direction="left" loop={0}>
      <span className="text-white text-center capitalize">{title}</span>
    </Marquee>
  </div>
);

export default memo(MyMarquee);
