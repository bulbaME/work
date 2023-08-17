import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, P2L, P2R, WServicesSmall, WTestimonials } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg1 w-full'>
            <div className='max-w-7xl m-auto p-6 text-center py-12'>
                <div className='sm:text-3xl text-xl text-white font-extrabold'>
                    {"About JustBelieveSeo - Our Journey to SEO Success!"}
                </div>
                <div className='sm:text-xl text-white opacity-70 font-bold mt-4'>
                    {"Learn our story and why JustBelieveSeo is your path to digital triumph!"}
                </div>
            </div>
        </div>
        <div className='my-16'>
            <P1L
                slogan='Your Path to SEO Excellence!'
                title='Welcome to JustBelieveSeo'
                text={[
                    "Welcome to JustBelieveSeo, your gateway to unparalleled SEO excellence! As a leading digital agency, we go beyond the ordinary to provide cutting-edge solutions that elevate your brand's online presence. Our journey began with a vision to empower businesses of all sizes to conquer the digital realm. With an unwavering commitment to quality and innovation, we have become a driving force in the SEO landscape. Our passionate team of experts thrives on challenges and thrills at the prospect of transforming businesses through strategic SEO initiatives.",
                    "At JustBelieveSeo, we believe that every business has the potential to thrive online, and our mission is to help you unlock that potential. With a team of passionate experts, data-driven strategies, and a dedication to ethical practices, we offer a seamless path to SEO greatness. Embrace the journey to success, as we join forces to maximize your digital footprint and drive your brand towards unprecedented achievements."
                ]}
                img='6'
            />
            <P2R
                slogan='Propelling Your Business to New Heights'
                title='Our Mission'
                text={[
                    "At JustBelieveSeo, our mission is rooted in empowering your brand to soar above the competition. We understand that the digital landscape can be overwhelming, but our goal is to equip you with the tools you need to achieve lasting success. Our dedicated team of SEO experts dives deep into understanding your business objectives, industry nuances, and target audience. With this knowledge, we craft bespoke strategies tailored to your unique needs, ensuring that every aspect of your digital presence works in harmony.",
                    "We believe that no two businesses are alike, and our personalized approach ensures your digital journey aligns with your vision. Our passion for digital marketing drives us to stay ahead of trends, continuously innovate, and deliver tangible results. Our mission is to propel your business to new heights, where you can confidently navigate the complexities of the digital realm and thrive in the ever-changing online landscape. JustBelieveSeo is more than an agency - we are your growth partner, propelling your business to new heights in the digital realm."
                ]}
                img='7'
            />
            <P1L
                slogan='Where expertise meets innovation'
                title='Meet Our Team of SEO Experts'
                text={[
                    "Behind JustBelieveSeo's success lies an extraordinary team of SEO pioneers, each equipped with a diverse skill set and a shared passion for excellence. Our experts are not only well-versed in the intricacies of search engine algorithms but also adept at adapting to the dynamic digital landscape. With years of experience and an unyielding pursuit of knowledge, they bring fresh perspectives and innovative ideas to the table.",
                    "At JustBelieveSeo, we recognize that talent flourishes in an environment of collaboration and synergy. Our team thrives on creativity, sharing ideas, and pushing the boundaries of what's possible in SEO. Together, we are a force to be reckoned with, capable of delivering unrivaled SEO brilliance. Collaboration and synergy are the driving forces that fuel our team, as we harness our collective expertise to uplift your brand. At JustBelieveSeo, we take great pride in turning challenges into opportunities, and each project becomes a canvas for showcasing our SEO artistry."
                ]}
                img='8'
            />
            <P2R
                slogan='Navigating towards SEO greatness, anchored by integrity and ethics!'
                title='Our Commitment to Ethical SEO'
                text={[
                    "Integrity and ethics are the guiding stars that illuminate our path at JustBelieveSeo. We understand the value of trust in the digital realm, and our commitment to ethical SEO practices sets us apart. We adhere to industry best practices and the guidelines set by search engines, ensuring that your website's growth is sustainable and devoid of any risks.",
                    "While shortcuts may promise short-term gains, we believe in charting a course towards SEO greatness that withstands the test of time. Our ethical approach not only ensures compliance but also fosters a positive reputation for your brand. At JustBelieveSeo, you can rest assured that we navigate with integrity, ensuring your journey to SEO success is smooth and reliable.",
                    "We believe in transparent communication, and our clients have full visibility into our strategies and actions. Our commitment to integrity extends to the way we treat our clients, partners, and each other as a team. With JustBelieveSeo, you can have confidence in knowing that your brand's digital growth is built on a foundation of trust, ethics, and a shared vision for long-term success."
                ]}
                img='9'
            />
            <P1L
                slogan='Embark on a journey to SEO greatness'
                title='Partner with JustBelieveSeo Today'
                text={[
                    "Are you ready to unlock the true potential of your brand in the digital arena? JustBelieveSeo invites you to embark on a transformative journey to SEO greatness. Whether you are a budding startup or an established enterprise, our comprehensive suite of services caters to your unique needs.",
                    "Our team of experts is eager to collaborate with you, understanding your goals and crafting strategies that align with your vision. From data-driven insights to innovative solutions, we provide the tools you need to thrive in the competitive digital landscape. Your success is our driving force, and together, we can make your brand shine brighter than ever before.",
                    "Partner with JustBelieveSeo today and step into the limelight of SEO excellence! Let us navigate the complexities of the digital realm together, as your brand's success awaits on the path to SEO greatness. With JustBelieveSeo as your strategic partner, you can confidently explore the boundless opportunities of the digital landscape and achieve remarkable online achievements. Get ready to elevate your brand's presence, connect with your target audience, and achieve extraordinary results in the ever-changing digital world. Together, let's make your brand a digital sensation!"
                ]}
                img='10'
            />
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
        <WTestimonials />
        <Footer />
    </>;
}