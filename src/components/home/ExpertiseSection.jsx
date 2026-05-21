import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function ExpertiseSection() {
    const { lang } = useLang();
    const e = t.expertise;

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
                    <p className="text-gold text-xs tracking-widest uppercase mb-3">{e.tag[lang]}</p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        {e.title[lang]}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {e.sub[lang]}
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {e.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-navy border border-white/10 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* <div className="mb-4">
                                {typeof item.icon === 'string' && item.icon.match(/^(data:image\/[^;]+;base64,|.*\.(png|jpe?g|svg|webp))(\?.*)?$/i) ? (
                                    <img src={item.icon} alt={item.title[lang] ?? ''} className="w-12 h-12 object-contain mx-auto" />
                                ) : (
                                    <div className="text-4xl text-center">{item.icon}</div>
                                )}
                            </div> */}
                            <h3 className="font-display text-white font-bold text-lg mb-3">
                                {item.title[lang]}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc[lang]}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}