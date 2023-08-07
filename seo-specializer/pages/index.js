import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CKeyF, CKeyFSmall, CTestimonials, P1, P2, P2S, WAppear, WKeyF, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto p-4 sm:p-12 sm:py-16 flex flex-wrap'>
                <div className='md:w-3/5 md:pr-5'>
                    <div className='sm:text-5xl text-3xl font-extrabold text-white'>
                        <WAppear>{"Discover the Art of SEO with SeoSpecializer"}</WAppear>
                    </div>
                    <div className=''>
                        <P1 title="Unlocking SEO's Power, Together!" text="Welcome to SeoSpecializer, your ultimate destination for unlocking the power of SEO! As a leading authority in search engine optimization, we are dedicated to helping businesses and individuals achieve online success. With our expertise and innovative strategies, we'll guide you through the dynamic world of SEO, empowering you to increase visibility, drive organic traffic, and boost your rankings on search engines." />
                        <P1 title="Customized Strategies, Elevated Results!" text="Elevate your online presence with our tailored SEO solutions! Our team of seasoned SEO specialists is passionate about crafting customized strategies that cater to your unique needs and goals. From comprehensive website audits to keyword research and on-page optimization, we leave no stone unturned to ensure that your website climbs the ranks and attracts your target audience." />
                        <P1 title="Stay Ahead, Thrive with SeoSpecializer!" text="Stay ahead in the digital landscape with SeoSpecializer! In the ever-evolving world of SEO, we stay up-to-date with the latest trends and algorithms, ensuring that your website remains relevant and competitive. With our data-driven approach and transparent reporting, you can have confidence in the results-driven strategies we employ to help your business thrive." />
                    </div>
                    <div className='flex w-fit my-8 m-auto p-1 px-3 pl-2 bg-white text-black hover:rounded-2xl duration-300 rounded-lg'>
                        <div className='mr-2 my-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                            </svg>
                        </div>
                        <div className='sm:text-2xl text-xl font-extrabold decoration-2'>
                            <Link href='/contact'>Skyrocket Your Online Success</Link>
                        </div>
                    </div>
                </div>
                <div className='md:w-2/5 md:pl-5 flex flex-wrap'>
                    <CKeyFSmall 
                        title='Personalized SEO Strategies'
                        f={[
                            "Tailored Solutions",
                            "Data-Driven Approach",
                            "Continuous Optimization",
                        ]}
                    />
                    <CKeyFSmall 
                        title='Transparent Reporting and Analytics'
                        f={[
                            "Real-Time Insights",
                            "Data Visualization",
                            "Measure Success",
                        ]}
                    />
                    <CKeyFSmall 
                        title='Keyword Research and Analysis'
                        f={[
                            "Strategic Keyword Targeting",
                            "Competitor Analysis",
                            "Long-Term Relevance",
                        ]}
                    />
                    <CKeyFSmall 
                        title='On-Page Optimization'
                        f={[
                            "SEO-Friendly Conten",
                            "Meta Tags and Descriptions",
                            "Page Speed Optimizatio",
                        ]}
                    />
                    <CKeyFSmall 
                        title='Link Building and Off-Page SEO'
                        f={[
                            "High-Quality Backlinks",
                            "Outreach and Partnerships",
                            "Local SEO Strategies",
                        ]}
                    />
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto sm:p-12 p-6'>
            <P2 title='Unleashing the Power of SEO: SeoSpecializer' img='2'>
                <P2S 
                    title='Empowering Your Online Odyssey!'
                    text="Step into the realm of SEO excellence with SeoSpecializer! We are more than just an SEO company; we are your dedicated partners on the journey to online success. Our passion lies in equipping businesses and individuals with the knowledge and tools they need to dominate search engine rankings, increase organic traffic, and achieve sustainable growth in the digital landscape."
                />
                <P2S 
                    title='Where Art Meets Science: SEO Perfected!'
                    text="Discover the art and science of SEO! Our team of seasoned specialists brings a wealth of experience and expertise to the table. From conducting in-depth keyword research to executing meticulous on-page and off-page optimization strategies, we leverage the latest industry insights to deliver exceptional results that align with your business objectives."
                />
                <P2S 
                    title='Navigate SEO with Confidence!'
                    text="SeoSpecializer: Your compass to navigate the SEO landscape! We believe in transparency, integrity, and the power of collaboration. As your SEO partner, we keep you informed every step of the way, providing detailed analytics and progress reports. With SeoSpecializer by your side, you'll unleash the full potential of SEO and reach new heights in the digital world."
                />
            </P2>
            <P2 title='SEO Made Simple with SeoSpecializer' img='3'>
                <P2S 
                    title='Simplicity Fuels Digital Success!'
                    text="Welcome to SeoSpecializer, where we demystify the world of SEO and make it accessible to all! As a leading SEO company, our mission is to simplify the complexities of search engine optimization and empower businesses of all sizes to thrive online. Whether you're a startup or an established brand, our user-friendly and effective SEO solutions will set you on the path to digital success."
                />
                <P2S 
                    title='Straightforward Solutions, Powerful Impact!'
                    text="Unlock the secrets to SEO success! Our team of dedicated specialists is committed to delivering straightforward and results-oriented strategies. We take the time to understand your unique needs, industry, and competition, allowing us to devise tailor-made SEO campaigns that drive measurable results and ensure maximum return on investment."
                />
                <P2S 
                    title='Empowering You with SEO Knowledge!'
                    text="SeoSpecializer: Your compass in the ever-changing SEO landscape! We believe that knowledge is power, which is why we provide you with the resources and guidance to make informed decisions about your online presence. With SeoSpecializer as your trusted SEO partner, you'll experience the transformative impact of SEO made simple."
                />
            </P2>
        </div>
        <div className='max-w-7xl m-auto sm:p-8 p-4'>
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
        <div className='w-fit m-auto'>
            <div className='flex w-fit my-8 m-auto p-1 px-3 mx-12 pl-2 bg-white text-black hover:rounded-2xl duration-300 rounded-lg'>
                <div className='mr-2 my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='sm:text-2xl text-xl font-extrabold decoration-2'>
                    <Link href='/about'>Discover Our SEO Journey and Success Stories!</Link>
                </div>
            </div>
        </div>
        <WServicesSmall />
        <div className='max-w-7xl m-auto sm:p-12 p-4'>
            <div className='sm:text-3xl text-2xl font-bold text-white text-center mb-8'>
                {"Feedback from our clients"}
            </div>
            <div className='flex flex-wrap'>
                <CTestimonials img='6' name="Sarah Anderson, Digital Marketing Manager" text="SeoSpecializer's SEO expertise has been instrumental in our online growth. With their on-page optimization mastery service, we witnessed a remarkable improvement in our search rankings and organic traffic. Their team's professionalism and commitment to results have made them an indispensable partner in our digital success." />
                <CTestimonials img='8' name="David Carter, Founder" text="SeoSpecializer's local SEO domination service made a significant impact on our travel agency. Our local visibility skyrocketed, leading to a surge in bookings and revenue. The team's attention to detail and effective strategies have been game-changers for our business. I highly recommend SeoSpecializer to any business looking to dominate their local market." />
                <CTestimonials img='7' name="Jennifer Williams, E-commerce Entrepreneur" text="SeoSpecializer's mobile-first SEO revolution service worked wonders for our online store. Their mobile speed optimization resulted in faster load times, improving user experience and conversion rates. We're impressed by their expertise and personalized approach, and we now enjoy increased sales and satisfied customers." />
                <CTestimonials img='9' name="Michael Lee, Small Business Owner" text="SeoSpecializer has been a trusted partner in my boutique's success story. Their dedication to providing tailored solutions through on-page optimization mastery has been invaluable. Our website's organic traffic has surged, and we've seen a positive impact on our sales. Their team's commitment to excellence sets them apart from the rest." />
            </div>
        </div>
        <Footer />
    </>;
}