import SEO from '../components/ui/SEO';
import HistorySection from '../components/about/HistorySection';
import FounderSection from '../components/about/FounderSection';
import TeamSection from '../components/about/TeamSection';

export default function About() {
    return (
        <main className="pt-16">
            <SEO
                title="A propos"
                description="Decouvrez l'histoire, le fondateur et l'equipe derriere IMPACTIS Group, AI Venture Studio haitien."
                url="https://impactisgroup.com/about"
            />
            <HistorySection />
            <FounderSection />
            <TeamSection />
        </main>
    );
}