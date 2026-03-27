import React from 'react';
import { Input } from 'antd';
import {
  InstagramOutlined,
  FacebookOutlined,
  TikTokOutlined
} from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white px-6 py-10 md:px-12 lg:px-24">
      <div className="mx-auto w-full">

        {/* Newsletter Section - Full Width */}
        <div className="mb-10 w-full space-y-6">
          <p className="w-full text-sm font-medium text-slate-600 leading-relaxed tracking-tight">
            We are currently testing SquadTrip with university students. Sign up to get early access and help us build the future of group travel planning.
          </p>

          <div className="w-full">
            <Input
              placeholder=""
              variant="outlined"
              className="h-14 w-full rounded-md border-slate-200 bg-white shadow-sm transition-all focus:border-[#b9b9fa] focus:ring-1 focus:ring-[#b9b9fa]/20"
            />
          </div>
        </div>

        {/* Bottom Bar: Logo, Nav, Socials */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-50 pt-8 md:flex-row">

          {/* Logo - Aligned Left on Desktop */}
          <div className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 md:w-1/4">
            SQUAD<span className="text-[#b9b9fa]">TRIP</span>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:w-2/4 lg:gap-x-10">
            {['About us', 'Services', 'Resources', 'Pricing'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-[#b9b9fa]"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Icons - Aligned Right on Desktop */}
          <div className="flex items-center justify-end gap-6 md:w-1/4">
            <a
              href="https://www.instagram.com/squadtrip.1?igsh=MWFpcTQ0NXozYTJrMg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-400 transition-colors hover:text-slate-900"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://tiktok.com/@squadtrip8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-400 transition-colors hover:text-slate-900"
            >
              <TikTokOutlined />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;