import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CFeature, P1, WServicesSmall, WTestimony } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='max-w-7xl m-auto flex mb-16'>
            <div className='md:w-2/3 p-4 sm:pr-12 pt-10 sm:pt-[7rem]'>
                <div className='text-g-m font-bold sm:text-2xl text-lg'>
                    {"Be SEEN, be FOUND, be AWARE with SEO Aware!"}
                </div>
                <div className='text-white font-bold sm:text-5xl text-3xl my-4'>
                    {"SEO Aware"} <br /> 
                    {"Empowering Your Online Visibility"}
                </div>
                <div className='sm:my-20 my-12 text-white font-medium sm:text-2xl text-lg'>
                    {"Welcome to SEO Aware, the compass that guides your digital presence! Our mission is simple yet powerful: to make your brand SEEN, FOUND, and AWARE in the vast online landscape."}
                </div>
                <div className='py-6 hover:pt-2 hover:pb-10 duration-300'>
                    <div className='sm:text-3xl text-xl text-white bg-g-m w-fit m-auto p-3 px-4 rounded-full font-bold'><Link href='/contact'>Contact us</Link></div>
                </div>
            </div>
            <div className='md:block hidden w-1/3 banner-main rounded-bl-[10rem]'></div>
        </div>
        <div className='max-w-7xl m-auto p-4 flex md:flex-nowrap flex-wrap'>
            <div className='p-14 pt-0 m-auto'>
                <div className='sm:text-3xl text-2xl font-bold text-white text-center'>
                    BE SEEN
                </div>
                <div className='text-white font-semibold sm:text-xl text-lg text-center my-10'>
                    {"With our expert SEO strategies, we illuminate your online path, ensuring your website catches the eyes of potential customers and stands out in the crowd."}
                </div>
            </div>
            <div className='bg-white w-px h-[10rem] m-auto md:block hidden' />
            <div className='p-14 pt-0 m-auto'>
                <div className='sm:text-3xl text-2xl font-bold text-white text-center'>
                    BE FOUND
                </div>
                <div className='text-white font-semibold sm:text-xl text-lg text-center my-10'>
                    {"We navigate the labyrinth of search engines, leading the way for your target audience to discover your website effortlessly."}
                </div>
            </div>
            <div className='bg-white w-px h-[10rem] m-auto md:block hidden' />
            <div className='p-14 pt-0 m-auto'>
                <div className='sm:text-3xl text-2xl font-bold text-white text-center'>
                    BE AWARE
                </div>
                <div className='text-white font-semibold sm:text-xl text-lg text-center my-10'>
                    {"Harnessing the full potential of SEO, we create an online presence that keeps your brand at the forefront of your audience's minds."}
                </div>
            </div>
        </div>
        <P1 title="Be Seen, Be Found, Be Aware" text="With our tailored SEO strategies, your website will stand out, attract your target audience, and be at the forefront of their minds when they need your products or services." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>
        } />
        <P1 title="Top the Search Rankings" text="Our dedication to improving your search engine rankings means you can outshine your competitors and capture a larger share of the market." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
            </svg>
        } />
        <P1 title="Unlock Local Opportunities" text="For businesses looking to conquer their local market, our local SEO expertise will put you on the map and connect you with customers in your area." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
        } />
        <P1 title="Quality Backlinks" text="We build strong and authoritative backlinks, adding credibility to your website and boosting its reputation in the eyes of search engines." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
            </svg>
        } />
        <P1 title="Data-Driven Insights" text="With transparent reporting and measurable results, we keep you informed every step of the way, providing actionable insights to make informed business decisions." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
            <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
            </svg>
        } />
        <P1 title="Mobile-First Approach" text="In today's mobile-centric world, we optimize your website for seamless user experiences across all devices." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
            </svg>
        } />
        <P1 title="Partnership and Support" text="As your dedicated SEO partner, we work hand-in-hand to understand your goals, address your concerns, and achieve long-term success together." img={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
        } />
        <div className='max-w-7xl m-auto p-4 sm:text-2xl text-lg font-medium text-white sm:my-16 my-12'>
            {"Join hands with SEO Aware, and let's embark on a journey to propel your business towards digital excellence. Whether you're a startup seeking growth or an established brand aiming to conquer new horizons, our magic is tailored to fit your needs. Unlock the true potential of SEO with us, and together, we'll write a success story that knows no bounds."}
        </div>
        <div className='max-w-7xl m-auto p-4 sm:text-2xl text-lg font-medium text-white sm:my-16 my-12'>
            {"Ready to take the first step? Contact us today for a free consultation and discover how SEO Aware can transform your online presence!"}
            <div className='py-8 hover:pt-4 hover:pb-12 duration-300'>
                <div className='text-center w-fit m-auto text-2xl font-bold text-white bg-g-m p-3 px-4 rounded-full'>
                    <Link href='/contact'>Reach out to us</Link>
                </div>
            </div>
        </div>
        <WServicesSmall />
        <div className='max-w-7xl m-auto flex flex-wrap'>
            <CFeature title='Tailored SEO Strategies' text="We craft personalized SEO strategies based on your business's unique goals, target audience, and industry, ensuring optimal results for your website." />
            <CFeature title='Increased Website Traffic' text="Our expert SEO techniques drive organic traffic to your website, helping you reach a broader audience and attract potential customers." />
            <CFeature title='Improved Search Engine Rankings' text="We employ proven tactics to boost your website's search engine rankings, giving you a competitive edge and higher visibility online." />
            <CFeature title='Quality Backlink Building' text="Our backlink strategies strengthen your website's authority, earning valuable links from reputable sources and enhancing your credibility in the eyes of search engines." />
            <CFeature title='Keyword Dominance' text="Through comprehensive keyword research and implementation, we ensure your website ranks for relevant and high-converting keywords, maximizing your online reach." />
            <CFeature title='Content Optimization' text="We optimize your website's content to make it search engine friendly and user-centric, leading to better engagement and increased conversion rates." />
            <CFeature title='Transparent Reporting' text="With regular and detailed reports, we keep you informed about your website's performance, the progress of SEO efforts, and the achieved results." />
            <CFeature title='Responsive Support' text="Our dedicated team is always available to address your queries, provide guidance, and offer continuous support to help your business thrive." />
        </div>
        <div className='max-w-7xl m-auto p-4 flex flex-wrap my-16'>
            <div className='md:w-1/2 text-white font-bold sm:text-5xl text-3xl m-auto'>
                Discover Our Story and Join the Journey!
            </div>
            <div className='md:w-1/2 m-auto py-8 hover:pt-4 hover:pb-12 duration-300'>
                <div className='text-white font-bold text-2xl w-fit p-3 px-4 bg-g-m rounded-full m-auto'>
                    <Link href='/about'>Read about us page</Link>
                </div>
            </div>
        </div>
        <WTestimony />
        <Footer />
    </>;
}