import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function AboutSection() {
    const { lang } = useLang();
    const a = t.about;

    return (
        <section className="bg-navy py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold text-xs tracking-widest uppercase mb-3">{a.tag[lang]}</p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        {a.title[lang]}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {a.sub[lang]}
                    </p>
                </motion.div>

                {/* 2 colonnes */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

                    {/* Mission & Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="border-l-2 border-gold pl-6">
                            <h3 className="text-gold font-display text-lg font-bold mb-2">{a.missionTitle[lang]}</h3>
                            <p className="text-gray-400 leading-relaxed">{a.missionText[lang]}</p>
                        </div>
                        <div className="border-l-2 border-gold/40 pl-6">
                            <h3 className="text-white font-display text-lg font-bold mb-2">{a.visionTitle[lang]}</h3>
                            <p className="text-gray-400 leading-relaxed">{a.visionText[lang]}</p>
                        </div>
                    </motion.div>

                    {/* Valeurs */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {a.values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-navy-dark border border-white/10 rounded-xl p-5 hover:border-gold/30 transition-colors"
                            >
                                <p className="text-gold font-display font-bold mb-2">{v.title}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{v[lang]}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}