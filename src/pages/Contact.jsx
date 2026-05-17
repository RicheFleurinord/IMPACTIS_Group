import { useState, useRef } from 'react';
import SEO from '../components/ui/SEO';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Send, AlertCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const { lang } = useLang();
    const c = t.contact_page;
    const f = c.form;
    const subjects = f.subjects;

    const [form, setForm] = useState({
        name: '', email: '', org: '', subject: 'partnership', message: '',
    });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        
        // Validation basique
        if (!form.name || !form.email || !form.message) {
            setStatus('error');
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            // EmailJS Integration
            // Note: Ces IDs devront être configurés dans un fichier .env
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id', 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
                {
                    from_name: form.name,
                    from_email: form.email,
                    organization: form.org,
                    subject: subjects[form.subject][lang],
                    message: form.message,
                    to_email: 'groupimpactis@gmail.com'
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
            );

            if (result.text === 'OK') {
                setStatus('success');
                setForm({ name: '', email: '', org: '', subject: 'partnership', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Email error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <SEO
                title="Contact"
                description="Contactez IMPACTIS Group pour un partenariat, investissement ou collaboration. Nous sommes prets a construire ensemble."
                url="https://impactisgroup.com/contact"
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
                        <p className="text-gold text-xs tracking-widest uppercase mb-3">{c.tag[lang]}</p>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                            {c.title[lang]}
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            {c.sub[lang]}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Formulaire — 2/3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:col-span-2"
                        >
                            <div className="bg-navy border border-white/10 rounded-2xl p-8">

                                {status === 'success' && (
                                    <div className="mb-6 bg-green-400/10 border border-green-400/30 text-green-400 rounded-xl px-5 py-4 text-sm flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        {f.success[lang]}
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="mb-6 bg-red-400/10 border border-red-400/30 text-red-400 rounded-xl px-5 py-4 text-sm flex items-center gap-3">
                                        <AlertCircle size={18} />
                                        {f.error[lang]}
                                    </div>
                                )}

                                <div className="space-y-5">

                                    {/* Nom + Email */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                                                {f.name[lang]}
                                            </label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder={f.placeholder_name[lang]}
                                                className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                                                {f.email[lang]}
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder={f.placeholder_email[lang]}
                                                className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Organisation + Sujet */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                                                {f.org[lang]}
                                            </label>
                                            <input
                                                name="org"
                                                value={form.org}
                                                onChange={handleChange}
                                                placeholder={f.placeholder_org[lang]}
                                                className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                                                {f.subject[lang]}
                                            </label>
                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                            >
                                                {Object.entries(subjects).map(([key, val]) => (
                                                    <option key={key} value={key}>{val[lang]}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                                            {f.message[lang]}
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder={f.placeholder_message[lang]}
                                            className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="flex items-center gap-2 bg-gold text-navy font-medium px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors disabled:opacity-60"
                                    >
                                        <Send size={16} />
                                        {loading ? f.sending[lang] : f.send[lang]}
                                    </button>

                                </div>
                            </div>
                        </motion.div>

                        {/* Infos contact — 1/3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="font-display text-white font-bold text-lg mb-6">
                                {c.info.title[lang]}
                            </h3>

                            <div className="bg-navy border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-navy-dark border border-gold/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-gold" size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{c.info.email[lang]}</p>
                                    <p className="text-white text-sm">groupimpactis@gmail.com</p>
                                </div>
                            </div>

                            <div className="bg-navy border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-navy-dark border border-gold/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-gold" size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{c.info.location[lang]}</p>
                                    <p className="text-white text-sm">{c.info.location_val[lang]}</p>
                                </div>
                            </div>

                            <div className="bg-navy border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-navy-dark border border-gold/20 flex items-center justify-center flex-shrink-0">
                                    <Globe className="text-gold" size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{c.info.avail[lang]}</p>
                                    <p className="text-white text-sm">{c.info.avail_val[lang]}</p>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="bg-navy border border-white/10 rounded-2xl p-5">
                                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Réseaux Sociaux</p>
                                <a
                                    href="https://www.linkedin.com/company/impactis-group/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gold text-sm hover:underline"
                                >
                                    LinkedIn — IMPACTIS Group →
                                </a>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    );
}