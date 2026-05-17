import SEO from '../components/ui/SEO';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ExpertiseSection from '../components/home/ExpertiseSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
    return (
        <main>
            <SEO
                title="AI Venture Studio Haiti"
                description="IMPACTIS Group concoit, developpe et lance des startups technologiques alimentees par l'IA pour transformer Haiti et les marches emergents."
                url="https://impactisgroup.com"
            />
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <CTASection />
        </main>
    );
}