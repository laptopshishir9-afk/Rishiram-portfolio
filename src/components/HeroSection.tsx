import React from 'react';
import { FileDown, Mail, MessageSquare, MapPin, Award, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { cvData } from '../data/cvData';
import { ProfilePhotoFrame } from './ProfilePhotoFrame';

interface HeroSectionProps {
  onOpenCvModal: () => void;
  photoUrl: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCvModal,
  photoUrl,
}) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#ffffff] via-[#f7faf8] to-[#f0f6f2] border-b border-[#e2ebe5] pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden"
    >
      {/* Subtle geometric pattern accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#143d2b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf3ed] border border-[#d2e2d7] text-xs font-semibold text-[#143d2b] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#205c3b] animate-pulse"></span>
              <span>Available in Doha, Qatar • 15+ Years Industry Experience</span>
            </div>

            {/* Candidate Name */}
            <h1
              id="hero-candidate-name"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#143d2b] uppercase"
            >
              {cvData.name}
            </h1>

            {/* Job Title */}
            <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
              <h2
                id="hero-job-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#205c3b] tracking-normal"
              >
                {cvData.title}
              </h2>
              <span className="hidden sm:inline-block text-[#52796f]">•</span>
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#52796f]">
                <MapPin className="w-4 h-4 text-[#205c3b]" />
                {cvData.location}
              </span>
            </div>

            {/* Professional Introduction */}
            <p
              id="hero-intro-text"
              className="mt-5 text-lg sm:text-xl font-medium text-[#1e2420] leading-relaxed max-w-3xl"
            >
              “{cvData.heroIntro}”
            </p>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="mt-3.5 text-sm sm:text-base text-[#3f4e44] leading-relaxed max-w-3xl"
            >
              {cvData.heroSupporting}
            </p>

            {/* Key Qualifications Snapshot Pills */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#dbe5df] text-xs font-medium text-[#2b332d]">
                <ShieldCheck className="w-4 h-4 text-[#205c3b]" />
                <span>15+ Years Operations & Inventory</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#dbe5df] text-xs font-medium text-[#2b332d]">
                <Truck className="w-4 h-4 text-[#205c3b]" />
                <span>Qatar Light Driving License (Manual)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#dbe5df] text-xs font-medium text-[#2b332d]">
                <Award className="w-4 h-4 text-[#205c3b]" />
                <span>Fruits & Veg / FMCG / DPH / LHH</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#dbe5df] text-xs font-medium text-[#2b332d]">
                <CheckCircle2 className="w-4 h-4 text-[#205c3b]" />
                <span>Forklift & Banana Ripening Certified</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Download CV */}
              <button
                type="button"
                onClick={onOpenCvModal}
                id="hero-download-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm sm:text-base font-semibold text-white bg-[#143d2b] hover:bg-[#1b4332] active:bg-[#0f2d20] shadow-sm transition-all focus:ring-2 focus:ring-[#205c3b] focus:ring-offset-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download CV</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                id="hero-contact-me-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm sm:text-base font-semibold text-[#143d2b] bg-white border border-[#c8d6cc] hover:bg-[#f4f8f5] hover:border-[#143d2b] transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-[#205c3b]" />
                <span>Contact Me</span>
              </a>

              {/* WhatsApp */}
              <a
                href={cvData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm sm:text-base font-semibold text-[#0e3b26] bg-[#e1efe6] hover:bg-[#d0e5d8] border border-[#b4d6c1] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#143d2b]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Subtle note */}
            <div className="mt-5 flex items-center gap-2 text-xs text-[#63756b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52796f]"></span>
              <span>Direct employer contact & verified operational record • Doha, Qatar</span>
            </div>
          </div>

          {/* Unique Oval Framed Photo Column */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <ProfilePhotoFrame photoUrl={photoUrl} />
          </div>
        </div>
      </div>
    </section>
  );
};
