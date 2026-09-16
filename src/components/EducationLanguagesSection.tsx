import React from 'react';
import { GraduationCap, Languages, Globe2, Award, CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationLanguagesSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-[#f7faf8] border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Column */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#205c3b] uppercase">
              <span className="w-6 h-0.5 bg-[#205c3b]"></span>
              <span>Academic Background</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#143d2b] tracking-tight">
              Education
            </h2>
            <p className="mt-2 text-sm text-[#3f4e44]">
              Accredited formal education details as stated directly in the verified CV.
            </p>

            <div className="mt-8 bg-white border border-[#dbe5df] rounded-lg p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ebf3ed] border border-[#d2e2d7] flex items-center justify-center text-[#143d2b] shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#205c3b]" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-[#143d2b] bg-[#ebf3ed] rounded">
                    Formal Qualification
                  </span>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#143d2b]">
                    {cvData.education.degree}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-[#205c3b]">
                    {cvData.education.institution}
                  </p>
                  <p className="mt-1 text-sm text-[#52796f]">
                    {cvData.education.location}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2ebe5] flex items-center gap-2 text-xs text-[#52796f]">
                <CheckCircle2 className="w-4 h-4 text-[#205c3b]" />
                <span>Verified directly against original CV record</span>
              </div>
            </div>

            {/* License verification card */}
            <div className="mt-4 bg-white border border-[#dbe5df] rounded-lg p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#ebf3ed] border border-[#d2e2d7] flex items-center justify-center text-[#205c3b] shrink-0">
                <Award className="w-5 h-5 text-[#205c3b]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#143d2b]">Qatar Driving Credential</h4>
                <p className="text-xs text-[#3f4e44] mt-0.5">{cvData.license}</p>
              </div>
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#205c3b] uppercase">
              <span className="w-6 h-0.5 bg-[#205c3b]"></span>
              <span>Communication</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#143d2b] tracking-tight">
              Languages
            </h2>
            <p className="mt-2 text-sm text-[#3f4e44]">
              Multilingual operational capabilities across warehouse teams and Qatar retail supply chains.
            </p>

            <div className="mt-8 bg-white border border-[#dbe5df] rounded-lg p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#ebf3ed] border border-[#d2e2d7] flex items-center justify-center text-[#205c3b]">
                  <Languages className="w-5 h-5 text-[#205c3b]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#143d2b]">Spoken & Workplace Languages</h3>
                  <p className="text-xs text-[#52796f]">Listed as recorded in CV</p>
                </div>
              </div>

              {/* Languages List (Without invented levels) */}
              <div className="grid grid-cols-2 gap-3.5">
                {cvData.languages.map((lang, index) => (
                  <div
                    key={index}
                    id={`language-pill-${index}`}
                    className="p-4 rounded-md bg-[#f7faf8] border border-[#dbe5df] hover:border-[#205c3b] transition-all flex items-center gap-3"
                  >
                    <Globe2 className="w-4 h-4 text-[#205c3b]" />
                    <span className="text-base font-bold text-[#143d2b]">{lang}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2ebe5]">
                <p className="text-xs text-[#52796f] leading-relaxed">
                  Able to communicate with cross-functional warehouse teams, multinational delivery personnel, suppliers, and retail store managers across Qatar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
