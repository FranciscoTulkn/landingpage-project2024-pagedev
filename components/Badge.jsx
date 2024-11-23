'use client';
import CountUp from "react-countup";


const badge = ({ 
  containerStyles, 
  icon, 
  endCountNum, 
  endCountText, 
  badgeText
}) => {
  return <div className={`badge ${containerStyles}`}> 
    <div className="pl-4 text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-primary">
          <CountUp end={endCountNum} duration={4} delay={1}  />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
  </div>
};

export default badge

