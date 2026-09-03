import PageWrapper from '../components/layout/PageWrapper';
import Banner from '../components/banner/Banner';
import ContentWrapper from '../components/layout/ContentWrapper';
import { pressArticles, publications } from '../json/press.js';

// Bucket press items by the 4-digit year found in their `date` string.
// The year is derived here so data stays untouched in src/json/press.js —
// new entries only need to be added there and they group automatically.
const groupByYear = (items) => {
    const groups = {};
    items.forEach((item) => {
        const match = item.date && item.date.match(/20\d{2}/);
        const year = match ? match[0] : 'Undated';
        if (!groups[year]) groups[year] = [];
        groups[year].push(item);
    });
    return Object.entries(groups).sort((a, b) => {
        if (a[0] === 'Undated') return 1;
        if (b[0] === 'Undated') return -1;
        return Number(b[0]) - Number(a[0]);
    });
};

const SectionHeading = ({ children }) => (
    <div>
        <h2 className="font-display-bold text-3xl lg:text-5xl text-white uppercase text-left">
            {children}
        </h2>
        <div className="mt-3 h-1 w-full bg-gradient-to-r from-old-gold to-stardust" />
    </div>
);

// News / press coverage — title-led editorial row, purple used only as an accent.
const ArticleRow = ({ item }) => (
    <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-2 border-t border-white/15 py-5 transition-colors hover:bg-moon/20 md:flex-row md:items-start md:justify-between md:gap-6"
    >
        <div className="flex flex-col gap-1.5 md:pr-4">
            <h3 className="font-display-bold text-lg md:text-2xl text-white uppercase leading-snug transition-colors group-hover:text-stardust">
                {item.title}
            </h3>
            <p className="font-display2 text-xs md:text-sm text-white/50 uppercase tracking-wide">
                {item.source}{item.date ? ` · ${item.date}` : ''}
            </p>
        </div>
        <span className="font-display2 text-xs md:text-sm text-stardust uppercase whitespace-nowrap shrink-0 md:pt-1">
            Read article →
        </span>
    </a>
);

// Research papers — denser, citation-style stack so they read differently from news.
const PublicationRow = ({ item }) => (
    <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-1 border-t border-white/15 py-4 transition-colors hover:bg-moon/20"
    >
        <h3 className="font-display-bold text-sm md:text-base text-white uppercase leading-snug transition-colors group-hover:text-stardust">
            {item.title}
        </h3>
        <p className="font-display2 text-xs text-white/50 uppercase tracking-wide">
            {item.source}{item.date ? ` · ${item.date}` : ''}
        </p>
        <span className="mt-1 font-display2 text-xs text-stardust uppercase">
            View publication →
        </span>
    </a>
);

const Press = () => {
    const articlesByYear = groupByYear(pressArticles);

    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance leading-normal">
                                Press
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] mx-auto flex flex-col w-full space-y-10 md:space-y-14 pb-10">
                    {/* Intro */}
                    <p className="font-display2 text-sm md:text-base text-white/70 leading-7 max-w-[640px]">
                        PURPL has been featured in various news articles and publications. Read
                        about our work and achievements below.
                    </p>

                    {/* News & Articles */}
                    <section className="flex flex-col space-y-7">
                        <SectionHeading>News &amp; Articles</SectionHeading>
                        <div className="flex flex-col space-y-8">
                            {articlesByYear.map(([year, items]) => (
                                <div key={year} className="flex flex-col">
                                    <p className="font-display-bold text-xl md:text-2xl text-old-gold mb-1">
                                        {year}
                                    </p>
                                    <div className="flex flex-col border-b border-white/15">
                                        {items.map((item) => (
                                            <ArticleRow key={item.link} item={item} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Research Publications */}
                    <section className="flex flex-col space-y-7">
                        <SectionHeading>Research Publications</SectionHeading>
                        <div className="flex flex-col border-b border-white/15">
                            {publications.map((item) => (
                                <PublicationRow key={item.link} item={item} />
                            ))}
                        </div>
                    </section>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Press;
