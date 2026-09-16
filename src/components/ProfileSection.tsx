import React from 'react';
import {
  Calendar,
  Warehouse,
  Boxes,
  Truck,
  Apple,
  PackageCheck,
  Navigation,
  Users,
  CreditCard,
  CheckCircle,
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const ProfileSection: React.FC = () => {
  const profileCards = [
    {
      icon: Calendar,
      title: '15+ Years Logistics Experience',
      detail:
        'Over a decade and a half of verified field and supervisory performance in high-throughput warehouse logistics, cold storage, and distribution hubs across Qatar.',
    },
    {
      icon: Warehouse,
      title: 'Warehouse Operations',
      detail:
        'End-to-end supervision of inbound staging, sorting, picking, cross-docking, temperature-monitored storage, and strict standard operating procedure (SOP) compliance.',
    },
    {
      icon: Boxes,
      title: 'Inventory Control & Accuracy',
      detail:
        'Proficient in maintaining stock accuracy, conducting periodic cycle counts, preventing shrinkage, managing FIFO/FEFO rotation, and reconciling inventory variances.',
    },
    {
      icon: Truck,
      title: 'Distribution Management',
      detail:
        'Coordinating daily dispatches to retail hypermarkets, catering companies, and hospitality partners with zero tolerance for delays.',
    },
    {
      icon: Apple,
      title: 'Fruits & Vegetables Handling',
      detail:
        'Specialized knowledge in fresh produce handling, quality inspection, cold-chain maintenance, and specialized banana ripening room management.',
    },
    {
      icon: PackageCheck,
      title: 'FMCG, Non-Food, DPH & LHH Items',
      detail:
        'Experienced across diverse merchandise classifications including Fast-Moving Consumer Goods, Non-Food supplies, Domestic & Personal Hygiene (DPH), and Light Household (LHH) goods.',
    },
    {
      icon: Navigation,
      title: 'Delivery Driving & Route Management',
      detail:
        'Extensive geographical familiarity with delivery corridors, commercial zones, and retail supermarket branches throughout Doha and all municipalities in Qatar.',
    },
    {
      icon: Users,
      title: 'Team Management & Coordination',
      detail:
        'Direct leadership of warehouse floor staff, receiving crews, forklift operators, and transport drivers with strong work planning and safety mentoring.',
    },
    {
      icon: CreditCard,
      title: 'Qatar Light Driving License (Manual)',
      detail:
        'Valid Qatar manual light vehicle driving license with extensive safe driving track record for delivery vehicles and staff buses.',
    },
  ];

  return (
    <section id="profile" className="py-16 sm:py-20 bg-white border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#205c3b] uppercase">
            <span className="w-6 h-0.5 bg-[#205c3b]"></span>
            <span>Candidate Overview</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#143d2b] tracking-tight">
            Professional Profile
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3f4e44] leading-relaxed">
            A seasoned logistics professional with an unbroken 15+ year record in warehouse management,
            inventory control, and timely regional distribution. Proven capability to manage fast-paced
            receiving, fresh perishables handling, team leadership, and fleet dispatch across Qatar.
          </p>
        </div>

        {/* Structured Profile Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`profile-card-${idx}`}
                className="bg-[#f7faf8] rounded-lg p-6 border border-[#dbe5df] hover:border-[#205c3b] transition-all hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#ebf3ed] border border-[#d2e2d7] flex items-center justify-center text-[#143d2b] mb-4">
                    <Icon className="w-5 h-5 text-[#205c3b]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#143d2b] tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#3f4e44] leading-relaxed">{item.detail}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e8efe9] flex items-center text-xs font-semibold text-[#205c3b]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>Verified in CV Experience</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Driving License & Geographic Anchor Banner */}
        <div className="mt-10 bg-[#ebf3ed] border border-[#c8dcd0] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#205c3b]">
              Verified Qualification
            </span>
            <h3 className="text-xl font-bold text-[#143d2b] mt-1">
              Qatar Light Driving License (Manual) & Route Mastery
            </h3>
            <p className="mt-2 text-sm text-[#38483e] leading-relaxed">
              Holds a valid Qatar Light Driving License (Manual). Deeply knowledgeable in Qatar’s industrial,
              commercial, and retail roadways with practical experience operating delivery vans, staff
              transport buses, and warehouse forklifts.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="px-4 py-3 bg-white border border-[#b8d1c1] rounded-md text-center">
              <span className="block text-xs uppercase font-medium text-[#52796f]">License Type</span>
              <span className="text-sm font-bold text-[#143d2b]">Qatar Light (Manual)</span>
            </div>
            <div className="px-4 py-3 bg-white border border-[#b8d1c1] rounded-md text-center">
              <span className="block text-xs uppercase font-medium text-[#52796f]">Location</span>
              <span className="text-sm font-bold text-[#143d2b]">Abu Hamour, Doha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
