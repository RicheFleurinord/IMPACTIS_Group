import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';

export default function ServicesSection() {
  const { lang } = useLang();
  const s = t.services_page;

  const mainServices = s.services.slice(0, 6);
  const bottomServices = s.services.slice(6);

  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            {s.badge[lang]}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {s.title1[lang]} <span className="text-gold">{s.title2[lang]}</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mb-5 mx-auto" />
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl text-center mx-auto">
            {s.sub[lang]}
          </p>
        </motion.div>

        {/* Processus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-gold text-xs tracking-widest uppercase mb-6">
            {s.process_label[lang]}
          </p>
          <div className="relative grid grid-cols-5 gap-0">
            <div className="absolute top-5 left-[10%] right-[10%] h-px bg-gold/20" />
            {s.process.map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-11 h-11 rounded-full bg-navy-dark border-2 border-gold flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-gold font-bold text-sm">{step.num}</span>
                </div>
                <p className="text-white text-xs font-bold mb-1">{step.title[lang]}</p>
                <p className="text-gray-500 text-xs leading-tight">{step.sub[lang]}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grid principal — 3 colonnes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {mainServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 overflow-hidden ${
                service.featured
                  ? 'bg-gradient-to-br from-navy-light to-navy border-gold/40'
                  : 'bg-navy-dark border-white/10'
              }`}
            >
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gold rounded-l-xl" />
              <p className="text-gold text-xs tracking-widest uppercase mb-2">{service.label[lang]}</p>
              <h3 className="text-white font-display font-bold text-xl mb-3 leading-snug">{service.title[lang]}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc[lang]}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid bas — 2 colonnes */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {bottomServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-navy-dark border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gold rounded-l-xl" />
              <p className="text-gold text-xs tracking-widest uppercase mb-2">{service.label[lang]}</p>
              <h3 className="text-white font-display font-bold text-xl mb-3 leading-snug">{service.title[lang]}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc[lang]}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-navy-dark border border-gold/20 rounded-xl p-7 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">{s.cta.pre[lang]}</p>
            <h3 className="font-display text-white font-bold text-lg mb-1">{s.cta.title[lang]}</h3>
            <p className="text-gray-500 text-sm">{s.cta.sub[lang]}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="bg-gold text-navy text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              {s.cta.btn1[lang]}
            </Link>
            <Link
              to="/startups"
              className="border border-gold/40 text-gold text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gold/10 transition-colors whitespace-nowrap"
            >
              {s.cta.btn2[lang]} →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}