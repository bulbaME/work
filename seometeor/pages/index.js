import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CFeautre, P1L, P1R, P2R, WFeautres, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='bg1 w-full'>
            <div className='max-w-7xl p-6 m-auto min-h-screen flex flex-wrap pt-[8rem] pb-[4rem]'>
                <div className='md:w-1/2 md:pr-8 text-white h-fit my-auto'>
                    <div className='my-auto py-8'>
                        <div className='font-extrabold sm:text-3xl text-xl'>
                            {"Your Gateway to Digital Success"}
                        </div>
                        <div className='font-medium sm:text-xl mt-8'>
                            {"Are you ready to take your online business to new heights? Look no further than SeoMeteor! We are your one-stop destination for all your SEO needs. With our expert team of digital enthusiasts and cutting-edge strategies, we'll make sure your website reaches for the stars and shines brightly in search engine rankings."}
                        </div>
                    </div>
                    <div className='my-auto py-8'>
                        <div className='font-extrabold sm:text-3xl text-xl'>
                            {"Reach for the Stars!"}
                        </div>
                        <div className='font-medium sm:text-xl mt-8'>
                            {"Don't let your online presence fade into obscurity. Partner with SeoMeteor and witness a digital transformation like never before. Together, we'll propel your website to reach the stars and beyond!"}
                        </div>
                    </div>
                    <div className='py-8 w-fit m-auto'>
                        <div className='w-fit px-4 py-3 font-extrabold my-3 text-xl bg-white rounded-full text-p hover:mb-5 hover:mt-1 hover:drop-shadow-lg duration-300 border-[1px] border-neutral-500'>
                            <Link href='/contact'>Get in touch</Link>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 md:pl-8 text-white h-fit my-auto'>
                    <CFeautre title='Unleash Your Potential' text="Witness a meteoric rise in your website's visibility and organic traffic as we optimize it to reach its full potential." />
                    <CFeautre title='Laser-Focused Keywords' text="Propel your brand into the digital stratosphere with our result-driven SEO techniques." />
                    <CFeautre title='Content That Sparkles' text="Our captivating content will engage your visitors and keep them orbiting your site for valuable insights." />
                    <CFeautre title='Stellar Link Building' text="Watch your website's authority and credibility soar with our strategic link-building efforts." />
                    <CFeautre title='Launch Your Brand' text="Propel your brand into the digital stratosphere with our result-driven SEO techniques." />
                </div>
            </div>
        </div>
        <WFeautres />
        <div className='max-w-7xl m-auto p-6 my-12 flex flex-wrap'>
            <div className='text-center font-semibold sm:text-xl pb-4 md:w-2/3'>
                {"Don't miss the opportunity to elevate your online presence. Our team of SEO experts is ready to craft a personalized strategy that drives real results for your business. Take the first step towards SEO excellence today!"}
            </div>
            <div className='md:w-1/3 h-fit m-auto px-4 text-center'>
                <div className='w-fit m-auto px-4 py-3 font-extrabold my-3 sm:text-xl bg-white rounded-full text-p hover:mb-5 hover:mt-1 hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                    <Link href='/contact#contact-us'>Get Started with SEO Excellence!</Link>
                </div>
            </div>
        </div>
        <WServicesSmall />
        <div className='max-w-7xl m-auto p-6 my-12 flex flex-wrap'>
            <div className='text-center font-semibold sm:text-xl pb-4 md:w-2/3'>
                {"Harness the power of SEO and propel your website to the top of search engine rankings. Don't miss out on the opportunity to drive organic traffic and increase your online visibility. Supercharge your SEO today and watch your online presence soar!"}
            </div>
            <div className='md:w-1/3 h-fit m-auto px-4 text-center'>
                <div className='w-fit m-auto px-4 py-3 font-extrabold my-3 sm:text-xl bg-white rounded-full text-p hover:mb-5 hover:mt-1 hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                    <Link href='/contact#contact-us'>Supercharge Your SEO Today!</Link>
                </div>
            </div>
        </div>
        <div className='my-16'>
            <P1L 
                title='Elevate Your Digital Presence with SeoMeteor' 
                slogan='Rise and Shine with SeoMeteor!' 
                text={[
                    "Welcome to SeoMeteor, the digital gateway to unleashing your website's full potential. Our meteoric SEO strategies and stellar services are designed to elevate your online presence and help your business reach for the stars. As your strategic partners, we understand the importance of standing out in the crowded digital landscape. With our result-oriented approach, you can conquer the digital realm and shine brightly in search engine rankings.",
                    "Our team of SEO experts is committed to crafting a customized strategy tailored to your unique business goals. We'll conduct an in-depth analysis of your website, industry, and target audience to identify the most effective keywords and optimization opportunities. We ensure that your website stays ahead of the competition and remains search engine friendly.",
                    "SeoMeteor takes pride in transparency, ensuring you stay well-informed throughout the journey. Regular updates, detailed reports, and open communication build the foundation of our trustworthy collaboration."
                ]}
                img='1'
            />
            <P2R
                title='SEO Made Effortless' 
                slogan="Effortless SEO - SeoMeteor's Shooting Star!" 
                text={[
                    "Say goodbye to the complexities of SEO and embrace an effortless approach with SeoMeteor. We believe that SEO shouldn't be a daunting task for businesses. Instead, it should be a seamless and efficient process that drives success. With our shooting star approach, we'll make SEO effortless for you, allowing your brand to shine brightly in the digital cosmos.",
                    "Our team of SEO experts is dedicated to understanding your unique business requirements and tailoring a strategy that aligns with your objectives. Whether you're a local business aiming to attract nearby customers or a global enterprise seeking broader visibility, SeoMeteor has the expertise to make it happen.",
                    "From a comprehensive SEO audit that uncovers hidden opportunities to on-page optimization that enhances your website's user experience, we cover every aspect to ensure search engines and users love your website. Our stellar content creation and strategic link-building efforts build your brand's authority and credibility."
                ]} 
                img='3'
            />
            <div className='max-w-7xl m-auto p-6 my-12 flex flex-wrap'>
                <div className='text-center font-semibold sm:text-xl pb-4 md:w-2/3'>
                    {"Is your website not performing as expected? Unleash its true potential with our powerful SEO solutions. Our proven strategies will boost your rankings, attract more traffic, and convert visitors into loyal customers."}
                </div>
                <div className='md:w-1/3 h-fit m-auto px-4 text-center'>
                    <div className='w-fit m-auto px-4 py-3 font-extrabold my-3 sm:text-xl bg-white rounded-full text-p hover:mb-5 hover:mt-1 hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                        <Link href='/contact#contact-us'>{"Unlock Your Website's Potential Now!"}</Link>
                    </div>
                </div>
            </div>
            <P1L 
                title='Unveil Digital Success - Triumph with SeoMeteor!' 
                slogan="SeoMeteor's Triumph!" 
                text={[
                    "Our comprehensive SEO audit serves as a powerful tool to uncover hidden opportunities and identify critical issues hindering your website's performance. By delving deep into your website's structure, content, and technical aspects, we gain valuable insights that form the foundation of your success.",
                    "SeoMeteor's strategic keyword research goes beyond identifying generic keywords. Instead, we focus on finding laser-focused keywords that align perfectly with your target audience's search intent. With this approach, you can be confident that every piece of content we create resonates with your visitors, sparking engagement and loyalty.",
                    "On-page optimization is at the core of our strategy, ensuring that your website is search engine friendly and user-centric. From meta tags and descriptions to URL structure and site navigation, we leave no stone unturned in providing your visitors with an exceptional experience.",
                ]}
                img='4'
            />
            <P2R 
                title='Propel your business with SeoMeteor'
                slogan="Guiding you on the path to triumph in the digital universe!"
                text={[
                    "Are you ready to propel your business towards unprecedented heights? SeoMeteor is your ultimate path to triumph in the digital universe. As your strategic partner, we take great pride in crafting a bespoke SEO strategy tailored to your unique business needs and objectives.",
                    "Our journey together begins with a comprehensive SEO audit that uncovers hidden opportunities and identifies areas for improvement.",
                    "Strategic keyword research lies at the heart of our approach, helping us discover laser-focused keywords that drive the right traffic to your website. By aligning our efforts with your target audience's search intent, we ensure that your website appears where it matters the most.",
                    "On-page optimization is an art we have mastered. From crafting engaging meta titles and descriptions to optimizing page content and structure, we create a seamless user experience that keeps visitors coming back for more."
                ]}
                img='2'
            />
        </div>
        <div className='max-w-7xl m-auto p-6 my-12 flex flex-wrap'>
            <div className='text-center font-semibold sm:text-xl pb-4 md:w-2/3'>
                {"Curious to know more about SeoMeteor and our journey in the world of SEO? Explore our About page to discover the story behind our success, our team of dedicated experts, and our commitment to helping businesses like yours thrive in the digital landscape."}
            </div>
            <div className='md:w-1/3 h-fit m-auto px-4 text-center'>
                <div className='w-fit m-auto px-4 py-3 font-extrabold my-3 sm:text-xl bg-white rounded-full text-p hover:mb-5 hover:mt-1 hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                    <Link href='/about'>Learn Our Story</Link>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}