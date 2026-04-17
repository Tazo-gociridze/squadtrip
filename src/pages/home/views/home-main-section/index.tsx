import React, { useMemo } from 'react';
import { Button, Input, Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import HomeMainSectionCarousel from '../../components/home-main-section/carousel-section';
import HomeMainSectionText from '../../components/home-main-section/text-section';
import { Link } from 'react-router-dom';
import { useAuth } from '@/store/auth';

const { Panel } = Collapse;

// Интерфейсы для типизации
interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
  bg: string;
}

interface FeatureItem {
  icon: string;
  t: string;
}

const HomeMainSection: React.FC = () => {
  const services: ServiceItem[] = useMemo(() => [
    { title: "Management", desc: "Voting & decision-making tools. Task assignment.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", bg: "hover:bg-blue-50" },
    { title: "Finance", desc: "Bill splitting, payment reminders & tracking.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", bg: "hover:bg-emerald-50" },
    { title: "Documents", desc: "Easy file sharing for tickets and bookings.", icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", bg: "hover:bg-purple-50" },
    { title: "Updates", desc: "Real-time notifications and status tracking.", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", bg: "hover:bg-orange-50" },
    { title: "Storage", desc: "Centralized dashboard and secure data storage.", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4", bg: "hover:bg-pink-50" }
  ], []);

  const features: FeatureItem[] = useMemo(() => [
    { icon: "🗳️", t: "Group voting" },
    { icon: "💰", t: "Expense tracking" },
    { icon: "📋", t: "Task management" },
    { icon: "🗺️", t: "Travel maps" }
  ], []);

  // Данные для новых секций
  const steps = useMemo(() => [
    { num: "1", title: "Build Your Trip", desc: "Create your trip, add destination, dates, and plans." },
    { num: "2", title: "Invite Friends", desc: "Share the trip with your group and start planning together." },
    { num: "3", title: "Manage Everything", desc: "Vote on decisions, split expenses, and keep everything organized in one place." }
  ], []);

  const faqs = useMemo(() => [
    { q: "Is my payment information secure?", a: "Yes, SquadTrip uses secure systems to protect your data and transactions." },
    { q: "How does expense splitting work?", a: "You can easily divide costs among group members, track who paid, and send reminders." },
    { q: "What happens if plans change?", a: "You can update trip details anytime, and all members will see changes instantly." },
    { q: "Do I need to download an app?", a: "No, you can use SquadTrip directly from your browser." }
  ], []);

  const [user] = useAuth();
  return (
    <div className="font-['Plus_Jakarta_Sans'] select-none overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-main-background-2 bg-cover bg-bottom bg-fixed bg-no-repeat transition-transform duration-1000 scale-105" />
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#5234353f] to-[#000000b9] backdrop-blur-[1px]">
          <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2 xl:gap-x-56 px-10 text-white w-full">
            <HomeMainSectionText />
            <HomeMainSectionCarousel />
          </div>
        </div>
      </section>

      {/* Main Bottom Section Area */}
      <section className="relative z-10 -mt-12 w-full rounded-t-[4rem] 
        bg-[linear-gradient(135deg,_#e0f2fe_0%,_#ffffff_50%,_#fce7f3_100%)]
        pt-24 pb-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] px-4 md:px-20 lg:px-48"
      >
        {/* Services Section */}
        <div className="w-full">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-50 pb-10">
            <div>
              <span className="text-[#b9b9fa] font-bold tracking-widest uppercase text-xs">Features</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">Our Services</h2>
            </div>
            <p className="text-slate-400 max-w-xs text-lg font-medium leading-relaxed mt-9">
              Everything you need to plan a perfect group trip without the stress.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className={`group relative flex flex-col rounded-[2.5rem] bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#b9b9fa]/30 ${service.bg}`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#b9b9fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800 leading-tight">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400 font-medium">{service.desc}</p>
                <div className="mt-8 flex items-center text-xs font-bold text-[#b9b9fa] opacity-0 transition-opacity group-hover:opacity-100 uppercase tracking-tighter">
                  Explore <span className="ml-2">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-40 w-full">
          <div className="text-center mb-16">
            <span className="text-[#b9b9fa] font-bold tracking-widest uppercase text-xs">Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 italic font-['Caveat']">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-10 rounded-[3rem] bg-white/50 border border-white hover:bg-white transition-all duration-300 shadow-sm text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#b9b9fa] text-white font-black mb-6 shadow-lg shadow-[#b9b9fa]/30">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Memories / Drama Section */}
        <div className="mt-40 w-full">
          <div className="text-center !mb-32">
            <h2 className="text-5xl md:text-7xl text-slate-700 font-['Caveat'] tracking-tight">
              Keep the memories, lose the drama
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="group flex flex-col rounded-[3.5rem] bg-[#f3efff] p-10 md:p-12 transition-all hover:rotate-1">
              <h3 className="mb-8 text-3xl font-bold italic text-[#6b4fa3] font-['Caveat']">— The Problem</h3>
              <ul className="space-y-5">
                {["Endless group chat discussions", "Confusion about shared expenses", "Difficulties choosing destinations", "No clear responsibilities"].map((text) => (
                  <li key={text} className="flex items-center gap-4 text-sm font-semibold text-[#6b4fa3]/80">
                    <span className="text-red-400 text-lg">✕</span> {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col rounded-[3.5rem] bg-[#fff9db] p-10 md:p-12 shadow-2xl shadow-yellow-100 md:-translate-y-10 ring-[8px] md:ring-[12px] ring-white">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">The Solution</div>
              <h3 className="mb-8 text-3xl font-bold italic text-[#857621] font-['Caveat']">— Our Solution</h3>
              <div className="rounded-[2.5rem] bg-white/70 p-8 backdrop-blur-md shadow-inner">
                <ul className="space-y-4">
                  {["Vote on destinations", "Track shared expenses", "Assign planning tasks", "All info in one place"].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm font-bold text-slate-700">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-[10px] text-white font-black">✔</span> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group flex flex-col rounded-[3.5rem] bg-[#eaf7ff] p-10 md:p-12 transition-all hover:-rotate-1">
              <h3 className="mb-8 text-3xl font-bold italic text-[#3b7ba3] font-['Caveat']">— Key Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((item) => (
                  <div key={item.t} className="flex items-center gap-5 p-4 rounded-3xl bg-white/50 transition-colors hover:bg-white">
                    <span className="text-2xl" role="img" aria-label={item.t}>{item.icon}</span>
                    <span className="text-sm font-bold text-slate-700">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-40 w-full max-w-8xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#b9b9fa] font-black tracking-widest uppercase text-[11px]">
              Support
            </span>
            <h2 className="text-5xl md:text-6xl text-slate-900 mt-2 font-['Caveat'] tracking-tight">
              FAQ
            </h2>
          </div>

          <Collapse
            ghost
            expandIconPosition="right"
            expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} className="text-[#b9b9fa] text-xl" />}
            className="faq-collapse"
          >
            {faqs.map((faq, idx) => (
              <Panel
                header={
                  <span className="text-xl font-extrabold text-slate-800 tracking-tight leading-none">
                    {faq.q}
                  </span>
                }
                key={idx}
                className="mb-4 rounded-[2rem] bg-white/60 border border-white overflow-hidden shadow-sm"
              >
                <div className="px-4 pb-4">
                  <p className="text-slate-500 text-[17px] font-medium leading-relaxed tracking-wide">
                    {faq.a}
                  </p>
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>

        {/* Early Access CTA Section */}
        <div className="mt-40 w-full">
          <div className="relative overflow-hidden rounded-[3rem] md:rounded-[4rem] bg-white py-20 md:py-24 px-6 md:px-10 border border-slate-100 text-center shadow-inner">
            <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-indigo-50/50 blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-50/50 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="text-[#b9b9fa] font-black text-xs uppercase tracking-[0.3em]">Limited Access</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
                Ready for your next adventure?
              </h2>
              <p className="mt-8 text-slate-500 text-lg font-medium leading-relaxed">
                Join our exclusive early access list and help us redefine how friends travel together. No more drama, just memories.
              </p>


              {
                user
                  ? <div></div>
                  : <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Input
                      placeholder="Enter your email"
                      className="h-16 w-full sm:max-w-sm rounded-full border-slate-200 px-8 text-lg font-medium shadow-sm focus:border-[#b9b9fa] focus:ring-2 focus:ring-[#b9b9fa]/20"
                    /><Link to={'/login'}>
                      <Button
                        size="large"
                        className="h-16 w-full sm:w-auto rounded-full border-none bg-[#FEBAD1] px-12 text-lg font-bold text-white shadow-xl shadow-indigo-100 transition-all hover:scale-105 hover:!bg-[#FEBAD1] hover:!text-white active:scale-95"
                      >
                        Join the Waitlist
                      </Button>
                    </Link>
                  </div>
              }



            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMainSection;