import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function HeroSection() {
    const { lang } = useLang();
    const h = t.hero;

    return (
        <section className="min-h-screen bg-navy-dark flex items-center justify-center px-6 pt-24 pb-10">
            <div className="max-w-4xl mx-auto text-center w-full">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 border border-gold/30 text-gold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-8"
                >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    {h.badge[lang]}
                </motion.div>

                {/* Titre */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
                >
                    {h.title1[lang]}
                    <br />
                    <span className="text-gold">{h.title2[lang]}</span>
                    <br />
                    {h.title3[lang]}
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {h.sub[lang]}
                </motion.p>

                {/* Boutons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link to="/startups" className="flex items-center gap-2 bg-gold text-navy font-medium px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors">
                        {h.btn1[lang]} <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 border border-gold/40 text-gold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors">
                        {h.btn2[lang]}
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-lg mx-auto"
                >
                    {[
                        { value: "5+", label: h.stat1[lang] },
                        { value: "3", label: h.stat2[lang] },
                        { value: "2026", label: h.stat3[lang] },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="font-display text-3xl font-bold text-gold">{stat.value}</p>
                            <p className="text-gray-500 text-xs mt-1 leading-tight">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}