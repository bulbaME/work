import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P2L, P2R, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={4} />
        <div className='max-w-7xl m-auto py-8 p-4'>
            <div className='sm:text-4xl text-2xl text-center font-extrabold text-white'>
                {"Our Story - The Journey of Passion, Dedication, and Success!"}
            </div>
            <div className='sm:text-xl text-center max-w-5xl m-auto font-medium mt-16 text-white'>
                {"Welcome to the heart of SEO Aware, where dreams became reality. Our story is one of passion, dedication, and an unwavering commitment to excellence. From humble beginnings to becoming a leading force in the world of SEO, our journey has been nothing short of remarkable. Get to know the faces behind the magic, the values that drive us, and the milestones that define us. Join us on this inspiring adventure and learn why we're the perfect partner to turn your digital dreams into success stories."}
            </div>
        </div>
        <P2L img='/img/4.jpg' title="Our Vision" slogan="Elevating Online Success" text="At SEO Aware, we envision a digital landscape where every business has the opportunity to thrive and reach its full potential. Our passion lies in empowering brands to shine in the online world, ensuring that their voice is heard, and their unique offerings are discovered by their target audience. We believe that with the right SEO strategies and a touch of magic, any business can elevate its online success and make a lasting impact in the digital realm." />
        <P2R img='/img/3.jpg' title="Our Journey" slogan="From Humble Beginnings to SEO Wizards" text="Our journey began with a small team of SEO enthusiasts who shared a common dream – to help businesses unlock the power of SEO and soar to new heights. Over the years, we honed our skills, mastered the ever-changing algorithms, and embraced innovation to stay ahead of the curve. With each success story, our reputation as SEO wizards grew, and soon we found ourselves guiding a diverse range of businesses towards digital excellence. Today, we stand proud as a force to be reckoned with in the world of SEO, a testament to our unwavering dedication and commitment to our clients' success." />
        <P2L img='/img/5.jpg' title="Our Approach" slogan="Combining Expertise and Creativity" text="At SEO Aware, we believe that SEO is both an art and a science. Our approach is a harmonious blend of expertise and creativity. We delve deep into the data, conduct comprehensive analyses, and devise data-driven strategies to deliver measurable results. But we also recognize the importance of creativity in the digital landscape. Our talented team of SEO sorcerers crafts engaging content, designs captivating websites, and infuses innovative thinking into every campaign we undertake. We take pride in our ability to adapt and evolve, always seeking new ways to push boundaries and achieve remarkable outcomes for our clients." />
        <P2R img='/img/2.jpg' title="Our Mission" slogan="Your Success is Our North Star" text="Our mission is simple – your success is our North Star. We treat each client as a partner on this journey, and your goals become our goals. We take the time to understand your unique business needs, target audience, and aspirations, and then tailor our SEO strategies to align perfectly with your vision. We strive to deliver exceptional results that go beyond mere rankings – we want to see your business thrive, grow, and leave a lasting mark in your industry. With SEO Aware by your side, you can rest assured that you have a passionate and dedicated team working tirelessly to make your digital dreams a reality." />
        <WServicesSmall />
        <div className='max-w-7xl m-auto p-4 flex flex-wrap my-16'>
            <div className='md:w-1/2 text-white font-bold sm:text-5xl text-3xl m-auto'>
                Unlock Your Digital Potential - Let's Create Magic Together!
            </div>
            <div className='md:w-1/2 m-auto py-8 hover:pt-4 hover:pb-12 duration-300'>
                <div className='text-white font-bold text-2xl w-fit p-3 px-4 bg-g-m rounded-full m-auto'>
                    <Link href='/about'>Reach out today</Link>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}