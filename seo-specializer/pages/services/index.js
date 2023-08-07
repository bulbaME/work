import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CKeyF, P3, WKeyF, WServices, WServicesSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='sm:p-12 p-4 max-w-7xl m-auto py-8'>
            <div className='text-white text-center sm:text-3xl text-2xl font-bold'>
                {"SEO Specializations"}
            </div>
            <div className='text-white text-center sm:text-2xl text-xl font-medium'>
                {"Unleashing Your Website's Potential"}
            </div>
            <div className='text-c text-center sm:text-xl text-lg font-bold mt-6'>
                {"Empower Your Business with Our SEO Services"}
            </div>
        </div>
        <WServices />
        <div className='max-w-7xl m-auto sm:p-8 p-4'>
            <div className='sm:text-3xl text-2xl font-bold text-center text-white mb-8'>
                Why choose us?
            </div>
            <WKeyF title='Personalized SEO Strategies' img={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            }>
                <CKeyF title='Tailored Solutions' text="We craft custom SEO strategies based on your unique business goals, industry, and target audience." />
                <CKeyF title='Data-Driven Approach' text="Our decisions are backed by data and thorough analysis to maximize your online performance." />
                <CKeyF title='Continuous Optimization' text="We stay proactive, adjusting tactics as needed to keep your website ahead of the competition." />
            </WKeyF>
            <WKeyF title='Transparent Reporting and Analytics' img={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            }>
                <CKeyF title='Real-Time Insights' text="Access comprehensive reports to track your website's progress and SEO performance in real-time." />
                <CKeyF title='Data Visualization' text="Understand complex data easily through visually engaging analytics and performance metrics." />
                <CKeyF title='Measure Success' text="Clear metrics show the impact of our SEO efforts on your organic traffic and search rankings." />
            </WKeyF>
            <WKeyF title='Keyword Research and Analysis' img={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            }>
                <CKeyF title='Strategic Keyword Targeting' text="We identify high-value keywords to improve your website's visibility in relevant searches." />
                <CKeyF title='Competitor Analysis' text="Understand your competition's strategies and use that knowledge to gain a competitive edge." />
                <CKeyF title='Long-Term Relevance' text="We continually monitor and update keyword targets to keep your content fresh and SEO-friendly." />
            </WKeyF>
            <WKeyF title='On-Page Optimization' img={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
            }>
                <CKeyF title='SEO-Friendly Content' text="Our experts optimize your website's content to be search engine friendly and user-centric." />
                <CKeyF title='Meta Tags and Descriptions' text="Crafting compelling meta tags and descriptions to enhance click-through rates." />
                <CKeyF title='Page Speed Optimization' text="Improve user experience and search rankings with faster-loading web pages." />
            </WKeyF>
            <WKeyF title='Link Building and Off-Page SEO' img={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>              
            }>
                <CKeyF title='High-Quality Backlinks' text="We focus on building authoritative and relevant backlinks to boost your website's credibility." />
                <CKeyF title='Outreach and Partnerships' text="Engaging with influencers and other websites to expand your online reach." />
                <CKeyF title='Local SEO Strategies' text="Enhance your local presence with geo-targeted link-building and citation optimization." />
            </WKeyF>
        </div>
        <Footer />
    </>;
}