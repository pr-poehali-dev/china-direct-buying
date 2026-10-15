import { useState } from "react";
import Icon from "@/components/ui/icon";
import { programModules } from "@/data/programModules";

const ProgramAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {programModules.map((m, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={m.num}
            className={`reveal rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
              isOpen
                ? "bg-white/10 border-brand-orange/60 shadow-[0_10px_30px_rgba(240,78,13,0.15)]"
                : "bg-white/5 border-brand-orange/15 hover:border-brand-orange/40"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 p-5 md:p-6 text-left min-h-[72px]"
            >
              <span className={`font-oswald text-4xl md:text-5xl leading-none select-none transition-colors ${isOpen ? "text-brand-orange" : "text-brand-orange/30"}`}>
                {m.num}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-oswald text-xs tracking-widest uppercase text-brand-orange mb-1">Модуль {i + 1}</p>
                <h3 className="font-oswald text-lg md:text-xl text-white uppercase tracking-wide leading-snug">{m.title}</h3>
              </div>
              <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-brand-orange border-brand-orange text-white" : "border-white/20 text-white/70"}`}>
                <Icon name={isOpen ? "Minus" : "Plus"} size={20} />
              </span>
            </button>

            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="px-5 md:px-6 pb-6 space-y-5">
                  <div>
                    <p className="font-oswald text-brand-yellow tracking-wide uppercase mb-3">{m.learnTitle}:</p>
                    <ol className="space-y-2.5">
                      {m.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-white/80 text-base leading-relaxed">
                          <span className="font-oswald text-brand-orange flex-shrink-0 w-5">{j + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="font-oswald text-brand-yellow tracking-wide uppercase mb-2">Результат после:</p>
                    <p className="text-white/80 text-base leading-relaxed">{m.result}</p>
                  </div>

                  <div className="rounded-xl p-4 border border-brand-yellow/40"
                    style={{ background: "linear-gradient(135deg, rgba(240,78,13,0.18), rgba(245,166,35,0.18))" }}>
                    <p className="font-oswald text-brand-yellow tracking-wide uppercase mb-2">🎁 {m.bonusTitle}:</p>
                    {m.bonuses.length === 1 ? (
                      <p className="text-white text-base leading-relaxed">{m.bonuses[0]}</p>
                    ) : (
                      <ol className="space-y-2">
                        {m.bonuses.map((b, k) => (
                          <li key={k} className="flex gap-3 text-white text-base leading-relaxed">
                            <span className="font-oswald text-brand-yellow flex-shrink-0 w-5">{k + 1}.</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramAccordion;
