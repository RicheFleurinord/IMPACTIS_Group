import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function FounderSection() {
    const { lang } = useLang();
    const f = t.about_page.founder;

    return (
        <section className="bg-navy-dark py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold text-xs tracking-widest uppercase mb-3">{f.tag[lang]}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-64 h-64 rounded-3xl overflow-hidden border-2 border-gold/30">
                                <img
                                    src={t.about_page.founder.photo}
                                    alt="Riché FLEURINORD"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-64 h-64 border border-gold/10 rounded-3xl -z-10" />
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                            {f.name[lang]}
                        </h2>
                        <p className="text-gold text-sm mb-8">{f.role[lang]}</p>
                        <p className="text-gray-400 leading-relaxed">{f.bio2[lang]}</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}