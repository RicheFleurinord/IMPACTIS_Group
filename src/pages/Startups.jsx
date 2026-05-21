import { useState } from 'react';
import SEO from '../components/ui/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';

const statusColors = {
    dev: "border-blue-400/40 text-blue-400 bg-blue-400/10",
    launched: "border-gold/40 text-gold bg-gold/10",
    completed: "border-green-400/40 text-green-400 bg-green-400/10",
};

function StartupModal({ startup, onClose, lang }) {
    if (!startup) return null;
    const m = t.startups_page.modal;

    // Kreye lis etap yo dinamikman selon startup lan
    const steps = [
        { key: 'problem', label: m.problem[lang], content: startup.problem?.[lang] },
        { key: 'solution', label: m.solution[lang], content: startup.solution?.[lang] },
        startup.impact && { key: 'impact', label: m.impact[lang], content: startup.impact?.[lang] },
        startup.recognition && { key: 'recognition', label: m.recognition[lang], content: startup.recognition?.[lang] },
        startup.competition && { key: 'competition', label: m.competition[lang], content: startup.competition?.[lang] },
        { key: 'tech', label: m.tech[lang], content: null, isTech: true },
        startup.domain && { key: 'domain', label: m.domain[lang], content: startup.domain },
    ].filter(Boolean);

    const [currentStep, setCurrentStep] = useState(0);
    const step = steps[currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === steps.length - 1;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={e => e.stopPropagation()}
                    className="bg-navy border border-gold/20 rounded-2xl p-8 max-w-lg w-full relative"
                >
                    {/* Bouton fermer */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Header — toujou visible */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl">{startup.icon}</span>
                        <div>
                            <h3 className="font-display text-xl font-bold text-white">{startup.name}</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {startup.tags.map(tag => (
                                    <span key={tag} className="text-xs border border-gold/30 text-gold px-2 py-0.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex gap-2 mb-6">
                        {steps.map((s, i) => (
                            <button
                                key={s.key}
                                onClick={() => setCurrentStep(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep
                                    ? 'bg-gold w-6'
                                    : i < currentStep
                                        ? 'bg-gold/40 w-3'
                                        : 'bg-white/10 w-3'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Contenu étape */}
                    <div className="border-t border-white/10 pt-6 min-h-[160px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.25 }}
                            >
                                <p className="text-gold text-xs tracking-widest uppercase mb-3">
                                    {step.label}
                                </p>

                                {step.isTech ? (
                                    <div className="flex flex-wrap gap-2">
                                        {startup.tech.map(tech => (
                                            <span key={tech} className="text-xs bg-navy-dark border border-white/10 text-gray-400 px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.content}</p>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
                        <button
                            onClick={() => setCurrentStep(prev => prev - 1)}
                            disabled={isFirst}
                            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all ${isFirst
                                ? 'border-white/5 text-gray-700 cursor-not-allowed'
                                : 'border-white/20 text-gray-400 hover:border-gold/40 hover:text-white'
                                }`}
                        >
                            ← {lang === 'fr' ? 'Precedent' : 'Previous'}
                        </button>

                        <span className="text-gray-600 text-xs">
                            {currentStep + 1} / {steps.length}
                        </span>

                        <button
                            onClick={() => isLast ? onClose() : setCurrentStep(prev => prev + 1)}
                            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-all ${isLast
                                ? 'bg-gold text-navy font-medium hover:bg-gold-light'
                                : 'border border-gold/40 text-gold hover:bg-gold/10'
                                }`}
                        >
                            {isLast
                                ? (lang === 'fr' ? 'Fermer' : 'Close')
                                : (lang === 'fr' ? 'Suivant' : 'Next')
                            } {!isLast && '→'}
                        </button>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function Startups() {
    const { lang } = useLang();
    const sp = t.startups_page;
    const [active, setActive] = useState('all');
    const [selected, setSelected] = useState(null);

    const filters = [
        { key: 'all', label: sp.filter.all[lang] },
        { key: 'fintech', label: sp.filter.fintech[lang] },
        { key: 'ai', label: sp.filter.ai[lang] },
        { key: 'edtech', label: sp.filter.edtech[lang] },
    ];

    const filtered = active === 'all'
        ? t.startups_data
        : t.startups_data.filter(s => s.category === active);

    return (
        <>
            <SEO
                title="Nos Startups"
                description="Decouvrez le portfolio de startups d'IMPACTIS Group — KobMwen, BankChurnAI, EduKonekte et plus encore."
                url="https://impactisgroup.com/startups"
            />
            <main className="pt-24 pb-24 px-6 bg-navy-dark min-h-screen">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <p className="text-gold text-xs tracking-widest uppercase mb-3">{sp.tag[lang]}</p>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                            {sp.title[lang]}
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            {sp.sub[lang]}
                        </p>
                    </motion.div>

                    {/* Filtres */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-3 justify-center mb-12"
                    >
                        {filters.map(f => (
                            <button
                                key={f.key}
                                onClick={() => setActive(f.key)}
                                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${active === f.key
                                    ? 'bg-gold text-navy border-gold'
                                    : 'border-white/20 text-gray-400 hover:border-gold/40 hover:text-white'
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((startup, i) => (
                            <motion.div
                                key={startup.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                onClick={() => setSelected(startup)}
                                className="bg-navy border border-white/10 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                     <h3 className="font-display text-xl font-bold text-white mb-2">{startup.name}</h3>
                                    <span className={`text-xs border px-3 py-1 rounded-full ${statusColors[startup.status]}`}>
                                        {sp.status[startup.status][lang]}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {startup.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    {startup.desc[lang]}
                                </p>

                                <p className="text-gold text-xs group-hover:underline transition-all">
                                    {lang === 'fr' ? 'Voir les details →' : 'See details →'}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

                {/* Modal */}
                {selected && (
                    <StartupModal
                        startup={selected}
                        onClose={() => setSelected(null)}
                        lang={lang}
                    />
                )}
            </main>
        </>
    );
}