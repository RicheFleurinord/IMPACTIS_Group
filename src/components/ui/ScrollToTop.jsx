import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

// Regle pwoblèm refresh — chaque fwa paj chanje, ale anlè otomatikman
export function ScrollRestorer() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// Bouton scroll to top
export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!visible) return null;

    return (
        <button
            onClick={scrollUp}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-gold text-navy rounded-full flex items-center justify-center shadow-lg hover:bg-gold-light hover:scale-110 transition-all duration-300"
        >
            <ArrowUp size={18} />
        </button>
    );
}