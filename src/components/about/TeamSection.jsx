import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

function MemberCard({ member, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onClick={() => onClick(member)}
            className="bg-navy-dark border border-white/10 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-gold/20 flex-shrink-0 group-hover:border-gold/50 transition-colors">
                    {member.photo ? (
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                        />
                    ) : (
                        <div className="w-full h-full bg-navy flex items-center justify-center">
                            <span className="font-display text-gold font-bold text-base">
                                {member.initials}
                            </span>
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="text-white font-display font-bold text-sm">{member.name}</h3>
                    <p className="text-gold text-xs mt-0.5">{member.role}</p>
                    <p className="text-gray-500 text-xs">{member.dept}</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-1">
                <p className="text-gray-600 text-xs group-hover:text-gold transition-colors">
                    Voir profil →
                </p>
                {member.linkedin && (

                    <a href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="text-gray-600 hover:text-gold transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                )}
            </div>
        </motion.div >
    );
}

function Modal({ member, onClose }) {
    if (!member) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={e => e.stopPropagation()}
                    className="bg-navy border border-gold/20 rounded-2xl p-8 max-w-lg w-full relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gold/30 flex-shrink-0">
                            {member.photo ? (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <div className="w-full h-full bg-navy-dark flex items-center justify-center">
                                    <span className="font-display text-gold font-bold text-2xl">
                                        {member.initials}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-gold text-sm mt-1">{member.role}</p>
                            <p className="text-gray-500 text-xs mt-0.5">{member.dept}</p>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                        <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 mt-5 text-gold text-sm border border-gold/30 px-4 py-2 rounded-full hover:bg-gold/10 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function TeamSection() {
    const { lang } = useLang();
    const tm = t.about_page.team;
    const [activeTab, setActiveTab] = useState('cofounders');
    const [selected, setSelected] = useState(null);

    const currentList = activeTab === 'cofounders' ? tm.cofounders : tm.members;

    const formatMember = (m) => ({
        ...m,
        role: m.role[lang],
        dept: m.dept[lang],
        bio: m.bio[lang],
        linkedin: m.linkedin,
    });

    return (
        <section className="bg-navy py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-gold text-xs tracking-widest uppercase mb-3">{tm.tag[lang]}</p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        {tm.title[lang]}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {tm.sub[lang]}
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center gap-3 mb-10">
                    <button
                        onClick={() => setActiveTab('cofounders')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${activeTab === 'cofounders'
                            ? 'bg-gold text-navy border-gold'
                            : 'border-white/20 text-gray-400 hover:border-gold/40 hover:text-white'
                            }`}
                    >
                        {tm.tab_cofounders[lang]}
                    </button>
                    <button
                        onClick={() => setActiveTab('members')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${activeTab === 'members'
                            ? 'bg-gold text-navy border-gold'
                            : 'border-white/20 text-gray-400 hover:border-gold/40 hover:text-white'
                            }`}
                    >
                        {tm.tab_members[lang]}
                    </button>
                </div>

                {/* Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {currentList.map((member) => (
                        <MemberCard
                            key={member.name}
                            member={formatMember(member)}
                            onClick={setSelected}
                        />
                    ))}
                </motion.div>

            </div>

            {/* Modal */}
            {selected && (
                <Modal member={selected} onClose={() => setSelected(null)} />
            )}
        </section>
    );
}