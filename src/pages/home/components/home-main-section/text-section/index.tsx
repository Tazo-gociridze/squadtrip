import React from 'react';
import { Button } from 'antd';

const HomeMainSectionText: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-8 pl-7 2xl:pl-32 max-w-3xl">
      {/* Main Headline - Bold and Tight */}
      <h1 className="text-[42px] leading-[1.1] md:text-[64px] xl:text-[80px] font-black tracking-[-0.04em] text-white">
        Plan Group <br />
        Trips Without <br />
        the Chaos <span className="inline-block animate-bounce-slow">✈️</span> 🧳
      </h1>

      {/* Description - Elegant Cursive/Italic */}
      <div className="max-w-xl">
        <p className="text-xl md:text-[26px] leading-[1.4] text-white/85 font-['Caveat'] italic tracking-wide">
          SquadTrip helps friends plan trips together, vote on decisions, 
          track shared expenses, and coordinate tasks — all in one place.
        </p>
      </div>

      {/* Button - Dark & Rounded */}
      <Button 
        type="primary"
        size="large"
        className="h-[60px] px-12 rounded-[20px] bg-[#120822] border-none text-white font-bold text-lg hover:!bg-[#221638] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/40"
      >
        Get in touch
      </Button>
    </div>
  );
};

export default HomeMainSectionText;