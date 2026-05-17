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

                        {t.about_page.founder.linkedin && (
                            <a
                                href={t.about_page.founder.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-gold text-sm border border-gold/30 px-5 py-2.5 rounded-full hover:bg-gold/10 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn — Riché FLEURINORD
                            </a>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}