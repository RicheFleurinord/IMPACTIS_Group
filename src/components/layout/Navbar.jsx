import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { lang, toggleLang } = useLang();

    const links = [
        { to: "/", label: t.nav.home[lang] },
        { to: "/about", label: t.nav.about[lang] },
        { to: "/startups", label: t.nav.startups[lang] },
        { to: "/contact", label: t.nav.contact[lang] },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-gold/20">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/src/assets/images/logo.png"
                        alt="IMPACTIS GROUP"
                        className="h-11 w-11"
                    />
                    <span className="font-display text-xl font-bold text-gold">
                        IMPACTIS GROUP
                    </span>
                </Link>

                {/* Links Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === "/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-gold font-medium text-sm"
                                    : "text-gray-400 hover:text-white transition-colors text-sm"
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}

                    {/* Bouton Lang */}
                    <button
                        onClick={toggleLang}
                        className="text-xs border border-gold/40 text-gold px-3 py-1.5 rounded-full hover:bg-gold/10 transition-colors font-medium"
                    >
                        {lang === 'fr' ? 'EN' : 'FR'}
                    </button>

                    <Link
                        to="/contact"
                        className="bg-gold text-navy text-sm font-medium px-5 py-2 rounded-full hover:bg-gold-light transition-colors"
                    >
                        {t.nav.cta[lang]}
                    </Link>
                </div>

                {/* Bouton Mobile */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-white">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {open && (
                <div className="md:hidden bg-navy-dark border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
                    {links.map(l => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === "/"}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-gold font-medium" : "text-gray-400"
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <button onClick={toggleLang} className="text-gold text-sm text-left">
                        {lang === 'fr' ? '🌐 English' : '🌐 Français'}
                    </button>
                </div>
            )}
        </nav>
    );
}