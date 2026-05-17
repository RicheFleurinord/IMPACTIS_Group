import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function CTASection() {
    const { lang } = useLang();
    const c = t.cta;

    return (
        <section className="bg-navy py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative border border-gold/20 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
                >
                    {/* Background décoratif */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-navy-dark/50 rounded-3xl" />

                    {/* Cercles décoratifs */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/10 rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-gold/5 rounded-full" />

                    <div className="relative z-10">
                        {/* Icône */}
                        <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/30 rounded-2xl mb-6">
                            <Rocket className="text-gold" size={28} />
                        </div>

                        {/* Tag */}
                        <p className="text-gold text-xs tracking-widest uppercase mb-4">
                            {c.tag[lang]}
                        </p>

                        {/* Titre */}
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {c.title[lang]}
                        </h2>

                        {/* Sous-titre */}
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            {c.sub[lang]}
                        </p>

                        {/* Boutons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 bg-gold text-navy font-medium px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors"
                            >
                                {c.btn1[lang]}
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/about"
                                className="flex items-center gap-2 border border-gold/40 text-gold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors"
                            >
                                {c.btn2[lang]}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}