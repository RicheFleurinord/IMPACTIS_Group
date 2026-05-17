import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function HistorySection() {
    const { lang } = useLang();
    const h = t.about_page.history;

    return (
        <section className="bg-navy-dark py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold text-xs tracking-widest uppercase mb-3">{h.tag[lang]}</p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        {h.title[lang]}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {h.sub[lang]}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Ligne verticale */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {h.milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-gold rounded-full transform -translate-x-1/2 mt-2 z-10" />

                                {/* Contenu */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className="bg-navy border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors">
                                        <span className="inline-block text-gold text-xs font-medium border border-gold/30 px-3 py-1 rounded-full mb-3">
                                            {m.date}
                                        </span>
                                        <h3 className="font-display text-white font-bold text-lg mb-2">
                                            {m.title[lang]}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {m.desc[lang]}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}