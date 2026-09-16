import React from 'react';
import {
  Boxes,
  CheckCircle2,
  Apple,
  Package,
  FileSpreadsheet,
  Monitor,
  ShieldCheck,
  MapPin,
  Forklift,
  UserCheck,
  Clock,
  HeartHandshake,
  Bus,
  Truck,
} from 'lucide-react';
import { cvData } from '../data/cvData';

// Map icon to exact skill name
const skillIconMap: Record<string, React.ElementType> = {
  'Warehouse Management & Supervision': Boxes,
  'Inventory Control & Stock Accuracy': CheckCircle2,
  'Fruits & Vegetables Handling': Apple,
  'FMCG, Non-Food, DPH & LHH Items': Package,
  'Receiving, Dispatch & Documentation': FileSpreadsheet,
  'Computer Basic Knowledge': Monitor,
  'Safe and Punctual Driving': ShieldCheck,
  'Local Route Understanding (Qatar)': MapPin,
  'Forklift Operation': Forklift,
  'Responsible & Self-Motivated': UserCheck,
  'Time Management & Work Planning': Clock,
  'Customer-focused Service with Attention to Quality and Safety': HeartHandshake,
  'Staff Bus Driving Experience': Bus,
  'Delivery Driving': Truck,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#f7faf8] border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#205c3b] uppercase">
            <span className="w-6 h-0.5 bg-[#205c3b]"></span>
            <span>Verified Capabilities</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#143d2b] tracking-tight">
            Core Competencies & Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3f4e44] leading-relaxed">
            Direct competencies drawn strictly from active roles across warehouse supervision, stock
            control, fleet delivery, and fresh food handling.
          </p>
        </div>

        {/* Skills Grid - 14 exact skills from CV */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cvData.skills.map((skill, index) => {
            const Icon = skillIconMap[skill] || CheckCircle2;
            return (
              <div
                key={index}
                id={`skill-card-${index}`}
                className="bg-white rounded-lg p-4 border border-[#dbe5df] hover:border-[#205c3b] transition-all flex items-start gap-3.5 group shadow-xs"
              >
                <div className="shrink-0 w-9 h-9 rounded-md bg-[#ebf3ed] border border-[#d2e2d7] flex items-center justify-center text-[#143d2b] group-hover:bg-[#143d2b] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4 text-[#205c3b] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#1e2420] group-hover:text-[#143d2b] leading-snug">
                    {skill}
                  </h3>
                  <span className="inline-block mt-1 text-[11px] font-medium text-[#52796f]">
                    Verified Skill
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Experience Callout */}
        <div className="mt-10 p-5 rounded-lg bg-white border border-[#dbe5df] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#143d2b] text-white flex items-center justify-center font-bold text-xs shrink-0">
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-[#143d2b]">
                Strict Adherence to Quality, Hygiene, and Qatar Municipality Safety Standards
              </p>
              <p className="text-xs text-[#52796f] mt-0.5">
                Experienced in operating warehouse forklifts, coordinating logistics personnel, and managing fresh perishable storage.
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold text-[#205c3b] bg-[#ebf3ed] px-3 py-1.5 rounded-md border border-[#c8dcd0] shrink-0">
            Recruitment-Ready
          </div>
        </div>
      </div>
    </section>
  );
};
