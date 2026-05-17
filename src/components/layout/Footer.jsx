import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import logo from "../../assets/images/logo.png"

export default function Footer() {
    const { lang } = useLang();
    const f = t.footer;

    const navLinks = [
        { to: "/", label: t.nav.home[lang] },
        { to: "/about", label: t.nav.about[lang] },
        { to: "/startups", label: t.nav.startups[lang] },
        { to: "/contact", label: t.nav.contact[lang] },
    ];

    return (
        <footer className="bg-navy-dark border-t border-white/10 pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    <div>
                        <Link to="/" className="flex items-center gap-1 mb-4">
                            <img
                                src={logo}
                                alt="IMPACTIS GROUP"
                                className="h-14 w-auto"
                            />
                            <span className="font-display text-xl font-bold text-gold">
                                IMPACTIS GROUP
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {f.desc[lang]}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/impactis-group/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gold text-sm transition-colors">LinkedIn</a>
                            <a href="https://www.instagram.com/impactis.group/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gold text-sm transition-colors">Instagram</a>

                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-bold mb-6 text-sm tracking-widest uppercase">
                            {f.links[lang]}
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map(l => (
                                <li key={l.to}>
                                    <Link to={l.to} className="text-gray-500 hover:text-gold text-sm transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-bold mb-6 text-sm tracking-widest uppercase">
                            {f.contact[lang]}
                        </h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li>groupimpactis@gmail.com</li>
                            <li>Port-au-Prince, Haiti</li>
                            <li>impactisgroup.com</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        {`© 2026 IMPACTIS Group — ${f.rights[lang]}`}
                    </p>
                    <p className="text-gray-600 text-xs">
                        {f.built[lang]}
                    </p>
                </div>

            </div>
        </footer>
    );
}