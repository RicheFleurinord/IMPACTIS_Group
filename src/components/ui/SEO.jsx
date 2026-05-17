import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url }) {
    const siteName = "IMPACTIS Group";
    const fullTitle = title ? `${title} — ${siteName}` : `${siteName} | AI Venture Studio Haiti`;
    const defaultDesc = "IMPACTIS Group est un AI Venture Studio haitien qui concoit, developpe et lance des startups technologiques pour transformer Haiti et les marches emergents.";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || "https://impactisgroup.com"} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDesc} />
            <link rel="canonical" href={url || "https://impactisgroup.com"} />
        </Helmet>
    );
}