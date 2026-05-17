import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const content = {
    tag: { fr: "Erreur 404", en: "Error 404" },
    title: { fr: "Page introuvable", en: "Page not found" },
    sub: { fr: "La page que vous recherchez n'existe pas ou a ete deplacee. Retournez a l'accueil pour continuer votre navigation.", en: "The page you're looking for doesn't exist or has been moved. Go back home to continue browsing." },
    btn1: { fr: "Retour a l'accueil", en: "Back to home" },
    btn2: { fr: "Page precedente", en: "Previous page" },
};

export default function NotFound() {
    const { lang } = useLang();
    const c = content;

    return (
        <main className="min-h-screen bg-navy-dark flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">

                {/* 404 grand texte décoratif */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-8"
                >
                    <p className="font-display text-[160px] md:text-[200px] font-bold leading-none select-none"
                        style={{ color: 'rgba(191,161,129,0.08)' }}>
                        404
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="border border-gold/30 rounded-2xl px-6 py-3">
                            <p className="text-gold text-xs tracking-widest uppercase">{c.tag[lang]}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Titre */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    {c.title[lang]}
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-lg leading-relaxed mb-10"
                >
                    {c.sub[lang]}
                </motion.p>

                {/* Boutons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-gold text-navy font-medium px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors"
                    >
                        <Home size={16} />
                        {c.btn1[lang]}
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 border border-gold/40 text-gold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        {c.btn2[lang]}
                    </button>
                </motion.div>

                {/* Logo bas */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-display text-gold/30 text-sm mt-16 tracking-widest uppercase"
                >
                    IMPACTIS GROUP
                </motion.p>

            </div>
        </main>
    );
}